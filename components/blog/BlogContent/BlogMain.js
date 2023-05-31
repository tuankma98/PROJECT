import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Comment1 from './Comment1';
import BlogPost from './BlogPost';
import BlogContent from './BlogContent';
import Notification from '../../notification/Notification';

import {
  getBlogBySlug,
  addComment,
  editComment,
  deleteComment,
  getAllUser,
  getUser,
} from '../../../store';

import { Box, Button, FormLabel, Grid, TextField } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

function BlogMain() {
  const router = useRouter();

  const [dataBlog, setDataBlog] = useState({});
  const [allUser, setAllUser] = useState({});
  const [nameUserLogin, setNameUserLogin] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [popup, setPopup] = useState(false);

  // GET DATA BLOG
  const { getBlogBySlugAPI } = getBlogBySlug();
  const getDataBlog = async (blogId) => {
    const data = await getBlogBySlugAPI(blogId);
    if (data) setDataBlog(data.blog);
  };

  useEffect(() => {
    if (!router.isReady) return;
    getDataBlog(router.query.blogId);
  }, [router.isReady]);

  /**
   * ADD COMMENT
   */
  const { addCommentAPI } = addComment();
  const addCommentByUser = async (dataComment, slugComment) => {
    setIsLoading(true);
    const data = await addCommentAPI(dataComment, slugComment);
    if (data) {
      getDataBlog(router.query.blogId);
      setIsLoading(false);
    }
  };

  const addNewComment = (e) => {
    e.preventDefault();

    const newText = document.querySelector('#shareCommentText').value;
    if (newText !== '') {
      addCommentByUser({ content: newText }, router.query.blogId);
    } else alert('Please write a comment to share!');
  };

  /**
   * EDIT COMMENT
   */
  const { editCommentAPI } = editComment();
  const editCommentByUser = async (value, idComment) => {
    const data = await editCommentAPI(value, idComment);
    if (data) {
      getDataBlog(router.query.blogId);
      setPopup(true);
    }
  };

  const updateComment = (value, idComment) => {
    editCommentByUser(value, idComment);
  };

  /**
   * DELETE COMMENT
   */
  const { deleteCommentAPI } = deleteComment();
  const deleteCommentByUser = async (value, idComment) => {
    const data = await deleteCommentAPI(value, idComment);
    if (data) getDataBlog(router.query.blogId);
  };

  const removeComment = (slug, idComment) => {
    deleteCommentByUser(slug, idComment);
  };

  // GET ALL TEACHER
  const { getAllUserAPI } = getAllUser();
  const getAllUserByUser = async () => {
    const data = await getAllUserAPI();
    if (data) setAllUser(data);
  };

  // GET USER
  const { fetchDataUser } = getUser();
  const getNameUser = async () => {
    const data = await fetchDataUser();
    if (data) setNameUserLogin(data.username);
  };

  const getAuthor = (id) => {
    if (allUser) {
      return Array.from(allUser).filter((user) => user._id === id);
    }
    return false;
  };

  useEffect(() => {
    getAllUserByUser();

    const tokens = localStorage.getItem('tokens');
    if (tokens) getNameUser();
  }, []);

  const displayComments = (comment, i) => {
    return (
      <Comment1
        key={i}
        index={i}
        removeCommentFromBoard={() => removeComment(dataBlog.slug, comment._id)}
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
    <React.Fragment>
      <BlogContent dataBlog={dataBlog} />

      <Grid container className="blog-wrapper">
        <Grid lg={9}>
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
              <BlogPost>
                <Box component="form" className="commentForm" noValidate sx={{ mt: 1 }}>
                  <FormLabel className="form-control-label">Bình luận của bạn</FormLabel>
                  <TextField
                    fullWidth
                    required
                    multiline
                    label="Description"
                    id="shareCommentText"
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
              </BlogPost>

              {dataBlog.comments && [...dataBlog.comments].reverse().map(displayComments)}
            </Box>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default BlogMain;
