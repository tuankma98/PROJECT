import * as React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { getCourses, getAdmin } from "../../store";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function CourseCardAmin(props) {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [courses, setCourses] = useState([]);
  const [isActive, setIsActive] = useState(false);

  // GET DATA USER
  const { getAdminAPI } = getAdmin();
  const getDataUser = async () => {
    const data = await getAdminAPI();
    if(data) setUserName(data.username);
  };

  // GET DATA COURSE
  const { fetchDataCoursesAPI } = getCourses();
  const getData = async () => {
    getDataUser();
    const data = await fetchDataCoursesAPI();
    setCourses(data.course);
  };

  useEffect(() => {
    // getDataUser();
    getData();
  }, []);

  const handleClick = (slug) => {
    props.urlRouter(slug);
    // router.push({
    //   pathname: "/courses/[courseId]",
    //   query: { courseId: `${slug}` },
    // });
  };

  return (
    <Grid container spacing={2}>
      {courses.map((item, index) => (
        <Grid
          item
          md={4}
          xl={3}
          onClick={() => handleClick(item.slug)}
          key={index}
          className={`course-card 
          ${item.created_by !== userName ? "no-active" : ""}
          ${item.created_by === "" ? "no-active" : ""}
          `}
        >
          <Card sx={{ maxWidth: 345 }} xs={12} md={8} lg={9}>
            <CardMedia
              component="img"
              height="140"
              image={item.featured_image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.level}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
