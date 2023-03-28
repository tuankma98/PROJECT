import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import { API_LINK } from '../../constants';

function BlogItem(props) {
  const router = useRouter();

  const { blog } = props;

  const handleShare = () => {};

  const handleViewBlog = () => {
    router.push({
      pathname: '/blog/[blogId]',
      query: { blogId: blog.slug },
    });
  };

  const linkShare = (slug) => {
    return `${API_LINK}/blog/${slug}`;
  };

  useEffect(() => {
    linkShare('blog-1');
  }, []);

  return (
    <Grid item xs={12} sm={12} md={4} className="blog-item">
      <Card className="blog-card">
        <Box onClick={handleViewBlog}>
          <CardMedia
            className="blog-card-img"
            image={blog.featured_image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {blog.title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{
                WebkitLineClamp: 3,
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                wordBreak: 'break-word',
              }}
            >
              {blog.description}
            </Typography>
          </CardContent>
        </Box>
        <CardActions className="blog-card__actions">
          <Box className="blog-card__author">
            <Avatar src={blog.created_by.avatar} />
            <Box ml={2}>
              <Typography variant="subtitle2" component="p">
                {blog.created_by.username}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary" component="p">
                {blog.created_by.createdAt.slice(0, 10)}
              </Typography>
            </Box>
          </Box>
          <Box>{/* <BookmarkBorderIcon /> */}</Box>
          <Button size="small" onClick={handleShare}>
            <Link
              color="inherit"
              href={`https://www.facebook.com/sharer/sharer.php?u=${linkShare(blog.slug)}`}
            >
              Share
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default BlogItem;
