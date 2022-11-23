import * as React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { debounce } from "lodash";
import { searchKey } from "../store";

import { CardMedia } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";
import CircularProgress from "@mui/material/CircularProgress";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
      "&:focus": {
        width: "50ch",
      },
    },
  },
}));

const WAIT_TIME = 1000; //miliseconds

export default function SearchBar() {
  const [queryWithDebounce, setQueryWithDebounce] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [course, setCourse] = useState([]);
  const [blog, setBlog] = useState([]);
  const [noKey, setNoKey] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  // Search
  const { searchAPI } = searchKey();
  const searchByUser = async (key) => {
    const data = await searchAPI(key);
    console.log(data);
    if (data) {
      setCourse(data.course);
      setBlog(data.blog);
      setShowResult(true);
      setIsLoading(false)
    }
    if (!data) {
      setNoKey(true);
      setCourse([]);
      setBlog([]);
      setIsLoading(false)
    }
  };

  const handleClick = (slug, text) => {
    if (text === "course") {
      router.push({
        pathname: "/courses/[courseId]",
        query: { courseId: `${slug}` },
      });
    }
    if (text === "blog") {
      router.push({
        pathname: "/blog/[blogId]",
        query: { blogId: `${slug}` },
      });
    }
  };

  const handleChange = (e) => {
    setIsLoading(true)
    onSearchItemWithDebounce(e.target.value)
  } 

  // with Debounce technique
  const onSearchItemWithDebounce = debounce((query) => {
    setQueryWithDebounce(query);
    searchByUser(query);
  }, WAIT_TIME);

  return (
    <React.Fragment>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>

        <StyledInputBase
          placeholder="Tìm kiếm khóa học..."
          inputProps={{ "aria-label": "search" }}
          onChange={handleChange}
          onClick={() => setShowResult(true)}
        />
      </Search>

      {showResult && (
        <React.Fragment>
          <div
            className={`search-result-overlay ${showResult ? "is-active" : ""}`}
            onClick={() => setShowResult(false)}
          ></div>

          <div className="search-result">
            <div className="search-result-container">
              <React.Fragment>
                <div className="search-header">
                  <div>
                    <SearchIcon />
                    <span>Kết quả cho {queryWithDebounce}</span>
                  </div>
                  {isLoading && <CircularProgress />}

                </div>

                {course.length > 0 && (
                  <div className="search-heading">
                    <h5>Bài học</h5>
                  </div>
                )}
                {course.length > 0 &&
                  course.map((item, index) => (
                    <Box
                      color="inherit"
                      className="search-link"
                      onClick={() => handleClick(item.slug, "course")}
                      key={index}
                    >
                      <CardMedia component="img" image={item.featured_image} />
                      <span>{item.title}</span>
                    </Box>
                  ))}

                {blog.length > 0 && (
                  <div className="search-heading">
                    <h5>Bài viết</h5>
                  </div>
                )}
                {blog.length > 0 &&
                  blog.map((item, index) => (
                    <Box
                      color="inherit"
                      onClick={() => handleClick(item.slug, "blog")}
                      className="search-link"
                      key={index}
                    >
                      <CardMedia component="img" image={item.featured_image} />
                      <span>{item.title}</span>
                    </Box>
                  ))}
              </React.Fragment>
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
