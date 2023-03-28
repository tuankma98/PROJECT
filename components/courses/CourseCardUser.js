import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { getCourses, getUser } from '../../store';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

export default function CourseCardUser(props) {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [courses, setCourses] = useState([]);

  // GET DATA USER
  const { fetchDataUser } = getUser();
  const getDataUser = async () => {
    const data = await fetchDataUser();
    console.log(data);
    if (data) {
      if (data.role === 'user') setUserName('user');
    }
  };

  // GET DATA COURSE
  const { fetchDataCoursesAPI } = getCourses();
  const getData = async () => {
    getDataUser();
    const data = await fetchDataCoursesAPI();
    setCourses(data.course);
    console.log(data.course);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = (slug) => {
    props.urlRouter(slug);
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
            ${item.created_by === userName ? 'no-active' : ''}
            ${userName === '' ? 'no-active' : ''}
          `}
        >
          <Card
            xs={12}
            md={8}
            lg={9}
            sx={{
              cursor: 'pointer',
              '&:hover': {
                boxShadow: '0 0 12px 3px rgba(0, 0, 0, 0.08)',
                maxWidth: 345,
              },
            }}
          >
            <CardMedia component="img" height="140" image={item.featured_image} />
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
