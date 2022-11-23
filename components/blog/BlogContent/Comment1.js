import React from "react";
import { useState, useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";

import { Box, CardMedia, TextField } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import PopupDelete from "../../general/PopupDelete";

export default function Comment1(props) {
  const { dataAuthor, nameUserLogin, index } = props;

  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(props.children);
  const [popupDelete, setPopupDelete] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const [toggle, setToggle] = useState(0);

  useEffect(() => {
    console.log(popupDelete);
  }, []);

  const ref = useRef();

  const edit = () => setEditing(true);

  const save = () => {
    props.updateCommentFromBoard(value);
    setEditing(false);
  };

  const remove = (index) => {
    setToggle(index);
    setPopupDelete(true);
  };

  const closePopup = () => {
    setPopupDelete(false);
    setIsDelete(false);
  };

  useEffect(() => {
    if (isDelete) props.removeCommentFromBoard();
  }, [isDelete]);

  const submitDelete = () => {
    setIsDelete(true);
    setPopupDelete(false);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="commentBody">
      <div className="commentHeader">
        <Box className="commentImage">
          {dataAuthor[0] && (
            <CardMedia image={dataAuthor[0].avatar} component="img" />
          )}
        </Box>

        <PopupDelete
          popupDelete={toggle === index ? popupDelete : false}
          closePopup={closePopup}
          submitDelete={submitDelete}
        />

        {/* <Typography
          variant="body2"
          color="text.secondary"
          className="commentName"
          align="center"
        >
          {dataAuthor[0].createdAt.slice(0, 10)}
        </Typography> */}

        <div>
          {editing && dataAuthor[0].username === nameUserLogin && (
            <div className="commentContainer">
              {dataAuthor[0] && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="commentName"
                  align="center"
                >
                  {dataAuthor[0].username}
                </Typography>
              )}

              <div className="commentText">
                <TextField
                  fullWidth
                  required
                  multiline
                  label="Description"
                  className="settings-form-input"
                  name="description"
                  onChange={handleChange}
                  value={value}
                  rows={4}
                />
              </div>

              <Box className="commentIcon">
                <SaveIcon onClick={save} />
              </Box>
            </div>
          )}

          {!editing && (
            <div className="commentContainer">
              {dataAuthor[0] && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="commentName"
                  align="center"
                >
                  {dataAuthor[0].username}
                </Typography>
              )}

              <div className="commentText">{props.children}</div>

              {dataAuthor[0] && (
                <Box className="commentIcon">
                  {dataAuthor[0].username === nameUserLogin && (
                    <React.Fragment>
                      <EditIcon onClick={edit} />
                      <DeleteForeverIcon onClick={() => remove(index)} />
                    </React.Fragment>
                  )}

                  {dataAuthor[0].username !== nameUserLogin && (
                    <FavoriteBorderIcon />
                  )}
                </Box>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
