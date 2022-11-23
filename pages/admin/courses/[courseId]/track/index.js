// import * as React from "react";
// import AdminLayout from "../../../../../layouts/admin";
// import Container from "@mui/material/Container";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import { useState } from "react";
// import { FormLabel } from "@mui/material";
// import { Grid } from "@mui/material";
// import { Button } from "@mui/material";
// import Copyright from "../../../../../components/CopyRight";
// import { useRouter } from "next/router";
// import setTrack from "../../../../../api/postAPI/setTrack";

// function Track() {
//   const [dataCourse, setDataCourse] = useState();
//   const [success, setSuccess] = useState(false);

//   const router = useRouter();

//   const { fetchDataTrack } = setTrack();

//   const setTrackItem = async () => {
//     const data = await fetchDataTrack(dataCourse, router.query.courseId);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setDataCourse({
//       ...dataCourse,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setTrackItem(dataCourse, router.query.courseId);
//   };

//   return (
//     <Box
//       component="main"
//       sx={{
//         backgroundColor: (theme) =>
//           theme.palette.mode === "light"
//             ? theme.palette.grey[100]
//             : theme.palette.grey[900],
//         flexGrow: 1,
//         height: "100vh",
//         overflow: "auto",
//       }}
//     >
//       <Container className="settings-container admin-courses" sx={{ mt: 20 }}>
//         {/* <!-- Page content --> */}
//         <Grid
//           container
//           spacing={1}
//           className="settings-padding settings-content"
//         >
//           <Grid item lg={12}>
//             <div className="settings-form settings-card settings-shadow">
//               <div className="settings-card-header">
//                 <Grid container className="settings-form-header">
//                   <Grid item xs={8}>
//                     <h3>Add track</h3>
//                   </Grid>
//                 </Grid>
//               </div>
//               <Box className="settings-card-profile-body">
//                 <Box
//                   component="form"
//                   noValidate
//                   onSubmit={handleSubmit}
//                   sx={{ mt: 1 }}
//                 >
//                   <h6 className="settings-form-heading">Course information</h6>
//                   <Grid container spacing={1} className="settings-form-padding">
//                     <Grid item xs={12} lg={6}>
//                       <div className="">
//                         <FormLabel className="form-control-label">
//                           Title
//                         </FormLabel>
//                         <TextField
//                           fullWidth
//                           required
//                           label="Title"
//                           id="input-title"
//                           className="settings-form-input"
//                           name="title"
//                           onChange={handleChange}
//                         />
//                       </div>
//                     </Grid>
//                     <Grid item xs={12} lg={6}>
//                       <div className="">
//                         <FormLabel className="form-control-label">
//                           Position
//                         </FormLabel>
//                         <TextField
//                           fullWidth
//                           label="Position"
//                           id="input-position"
//                           name="position"
//                           className="settings-form-input"
//                           required
//                           onChange={handleChange}
//                         />
//                       </div>
//                     </Grid>
//                     <Grid item xs={12} lg={6}>
//                       <div className="">
//                         <FormLabel className="form-control-label">
//                           Duration
//                         </FormLabel>
//                         <TextField
//                           fullWidth
//                           required
//                           label="Duration"
//                           id="input-duration"
//                           className="settings-form-input"
//                           name="duration"
//                           onChange={handleChange}
//                         />
//                       </div>
//                     </Grid>
//                     <Grid item xs={12} lg={6}>
//                       <div className="">
//                         <FormLabel className="form-control-label">
//                           Video_url
//                         </FormLabel>
//                         <TextField
//                           fullWidth
//                           required
//                           label="Video url"
//                           id="input-video-url"
//                           className="settings-form-input"
//                           name="video_url"
//                           onChange={handleChange}
//                         />
//                       </div>
//                     </Grid>
//                   </Grid>

//                   <Button
//                     type="submit"
//                     sx={{ mt: 3, mb: 2 }}
//                     className="btn btn-primary"
//                   >
//                     Submit
//                   </Button>
//                 </Box>
//               </Box>
//             </div>
//           </Grid>
//         </Grid>
//       </Container>

//       <Copyright sx={{ pt: 4, pb: 4 }} />
//     </Box>
//   );
// }

// Track.getLayout = function getLayout(page) {
//   return <AdminLayout>{page}</AdminLayout>;
// };

// export default Track;
