// import React from "react";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";

// import Comment1 from "./Comment1";
// import Notification from "../../notification/Notification";

// import {
//   getBlogBySlug,
//   addComment,
//   editComment,
//   deleteComment,
//   getAllUser,
//   getUser,
//   getTrackById,
// } from "../../../store";

// import { Box, Button, FormLabel, TextField } from "@mui/material";
// import CircularProgress from "@mui/material/CircularProgress";

// function TrackMain(props) {
//   const { dataTrack, slugCourse } = props;

//   const router = useRouter();

//   const [allUser, setAllUser] = useState({});
//   const [nameUserLogin, setNameUserLogin] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [popup, setPopup] = useState(false);

//   // GET DATA TRACK
//   const { getTrackByIdAPI } = getTrackById();
//   const getDataTrack = async (slugCourse, idTrack) => {
//     // const data = await getTrackByIdAPI(slugCourse, idTrack);
//     // if (data) setDataBlog(data.blog);
//     console.log(slugCourse, idTrack);
//   };

//   // GET DATA BLOG
//   const { getBlogBySlugAPI } = getBlogBySlug();
//   const getDataBlog = async (blogId) => {
//     const data = await getBlogBySlugAPI(blogId);
//     if (data) setDataBlog(data.blog);
//   };

//   useEffect(() => {

//     // console.log(dataTrack)
//     // getDataBlog(router.query.blogId);
//     if(slugCourse) console.log(slugCourse);
    
//   }, []);

//   // GET ALL TEACHER
//   const { getAllUserAPI } = getAllUser();
//   const getAllUserByUser = async () => {
//     const data = await getAllUserAPI();
//     if (data) setAllUser(data);
//   };

//   // GET USER
//   const { fetchDataUser } = getUser();
//   const getNameUser = async () => {
//     const data = await fetchDataUser();
//     if (data) setNameUserLogin(data.username);
//   };

//   const getAuthor = (id) => {
//     return allUser.filter((user) => user._id === id);
//   };

//   useEffect(() => {
//     getAllUserByUser();
//     getNameUser();
//   }, []);

//   const displayComments = (comment, i) => {
//     return (
//       <Comment1
//         key={i}
//         index={i}
//         // comment={comment}
//         // removeCommentFromBoard={() =>
//         //   removeComment(dataTrack.slug, comment._id)
//         // }
//         // updateCommentFromBoard={(value) => updateComment(value, comment._id)}
//         author={() => getAuthor(comment.created_by)}
//         dataAuthor={getAuthor(comment.created_by)}
//         nameUserLogin={nameUserLogin}
//       >
//         {comment}
//       </Comment1>
//     );
//   };

//   return (
//     <React.Fragment>
//       <div className="board">
//         {popup && (
//           <Notification
//             title="Cập nhật bình luận thành công"
//             content={`Bình luận của bạn đã được cập nhật.`}
//             handleClose={() => setPopup(false)}
//             mail={false}
//           />
//         )}

//         <Box className="commentBox">
//           <Box
//             component="form"
//             className="commentForm"
//             noValidate
//             sx={{ mt: 1 }}
//           >
//             <FormLabel className="form-control-label">
//               Bình luận của bạn
//             </FormLabel>
//             <TextField
//               fullWidth
//               required
//               multiline
//               label="Description"
//               id="shareCommentText"
//               className="settings-form-input"
//               name="description"
//               rows={4}
//             />
//             <Button
//               type="submit"
//               sx={{ mt: 3, mb: 2 }}
//               className="btn btn-primary"
//               // onClick={addNewComment}
//             >
//               Submit
//             </Button>
//           </Box>

//           {isLoading && <CircularProgress />}

//           {dataTrack && [...dataTrack.comments].reverse().map(displayComments)}
          
//         </Box>
//       </div>
//     </React.Fragment>
//   );
// }

// export default TrackMain;
