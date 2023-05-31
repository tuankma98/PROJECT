import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ReactPlayer from 'react-player';

import {
  addCommentInTrack,
  editCommentIntrack,
  deleteCommentInTrack,
  getAllUser,
  getUser,
  getTrackById,
} from '../../../store';

import DefaultLayout from '../../../layouts/default';
import Copyright from '../../../components/CopyRight';
import Notification from '../../../components/notification/Notification';
import Comment1 from '../../../components/track/trackComment/Comment1';

import Toolbar from '@mui/material/Toolbar';
import { Box, Button, Container, FormLabel, Grid, TextField } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import TrackPost from '../../../components/track/trackComment/TrackPost';

function Track() {
  const router = useRouter();

  const [dataTrackById, setDataTrackById] = useState([]);

  const [allUser, setAllUser] = useState([]);
  const [nameUserLogin, setNameUserLogin] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [popup, setPopup] = useState(false);

  // GET DATA TRACK
  const { getTrackByIdAPI } = getTrackById();
  const getDataTrackById = async (slugCourse, idTrack) => {
    console.log(slugCourse);
    const data = await getTrackByIdAPI(slugCourse, idTrack);
    if (data) setDataTrackById(data.track);
  };

  useEffect(() => {
    if (!router.isReady) return;
    getDataTrackById(router.query.courseId, router.query.trackId);
    console.log(router.query.courseId, router.query.trackId);
  }, [router.isReady]);

  // GET ALL TEACHER
  const { getAllUserAPI } = getAllUser();
  const getAllUserByUser = async () => {
    const data = await getAllUserAPI();
    console.log(data);
    if (data) setAllUser(data);
  };

  // GET USER
  const { fetchDataUser } = getUser();
  const getNameUser = async () => {
    const data = await fetchDataUser();
    if (data) setNameUserLogin(data.username);
  };

  const getAuthor = (id) => {
    return allUser?.filter((user) => user._id === id);
  };

  useEffect(() => {
    getAllUserByUser();
    const tokens = localStorage.getItem('tokens');
    if (tokens) getNameUser();
  }, []);

  /**
   * ADD COMMENT
   */
  const { addCommentAPI } = addCommentInTrack();
  const addCommentByUser = async (dataComment, slugCourse, idTrack) => {
    setIsLoading(true);
    const data = await addCommentAPI(dataComment, slugCourse, idTrack);
    if (data) {
      getDataTrackById(router.query.courseId, router.query.trackId);
      setIsLoading(false);
    }
  };

  const addNewComment = (e) => {
    e.preventDefault();

    const newText = document.querySelector('#shareCommentText2').value;
    if (newText !== '') {
      addCommentByUser({ content: newText }, router.query.courseId, router.query.trackId);
    } else alert('Please write a comment to share!');
  };

  /**
   * EDIT COMMENT
   */
  const { editCommentAPI } = editCommentIntrack();
  const editCommentByUser = async (value, idComment) => {
    const data = await editCommentAPI(value, idComment);
    if (data) {
      getDataTrackById(router.query.courseId, router.query.trackId);
      setPopup(true);
    }
  };

  const updateComment = (value, idComment) => {
    editCommentByUser(value, idComment);
  };

  /**
   * DELETE COMMENT
   */
  const { deleteCommentAPI } = deleteCommentInTrack();

  const deleteCommentByUser = async (value, idComment) => {
    const data = await deleteCommentAPI(value, idComment, router.query.trackId);
    if (data) getDataTrackById(router.query.courseId, router.query.trackId);
  };

  const removeComment = (slug, idComment) => {
    deleteCommentByUser(slug, idComment);
  };

  const displayComments = (comment, i) => {
    return (
      <Comment1
        key={i}
        index={i}
        removeCommentFromBoard={() => removeComment(router.query.courseId, comment._id)}
        updateCommentFromBoard={(value) => updateComment(value, comment._id)}
        author={() => getAuthor(comment.created_by)}
        dataAuthor={getAuthor(comment.created_by)}
        nameUserLogin={nameUserLogin}
      >
        {comment.content}
      </Comment1>
    );
  };

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Container sx={{ mt: 12 }}>
        <Box className="blog-container" component="main">
          <Toolbar />

          <Box className="track-container">
            {dataTrackById && (
              <Box className="track-content">
                <ReactPlayer url={dataTrackById.video_url} controls />
                <h1>{dataTrackById.title}</h1>
              </Box>
            )}

            <Grid container className="blog-wrapper">
              <Grid lg={9}>
                <Box className="track-comment">
                  <TrackPost>
                    <div className="board">
                      {popup && (
                        <Notification
                          title="Cập nhật bình luận thành công"
                          content={`Bình luận của bạn đã được cập nhật.`}
                          handleClose={() => setPopup(false)}
                          mail={false}
                        />
                      )}

                      <Box className="commentBox">
                        <Box component="form" className="commentForm" noValidate sx={{ mt: 1 }}>
                          <FormLabel className="form-control-label">Bình luận của bạn</FormLabel>
                          <TextField
                            fullWidth
                            required
                            multiline
                            label="Description"
                            id="shareCommentText2"
                            className="settings-form-input"
                            name="description"
                            rows={4}
                          />
                          <Button
                            type="submit"
                            sx={{ mt: 3, mb: 2 }}
                            className="btn btn-primary"
                            onClick={addNewComment}
                          >
                            Submit
                          </Button>
                        </Box>

                        {isLoading && <CircularProgress />}

                        {dataTrackById?.comments &&
                          [...dataTrackById.comments].reverse().map(displayComments)}
                      </Box>
                    </div>
                  </TrackPost>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

      <Copyright sx={{ pt: 4, pb: 4 }} />
    </Box>
  );
}

Track.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Track;
