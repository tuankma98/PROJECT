import React from "react";
import { useState } from "react";

import { Box, Button } from "@mui/material";

import { deleteTeacher, editTeacher } from "../../../store";

import FormAddTeacher from "./FormAddTeacher";
import Notification from "../../notification/Notification";

export default function ListTeacher(props) {
  const { teachers, text } = props;

  const [popup, setPopup] = useState(false);
  const [toggle, setToggle] = useState(0);
  const [showFormTrack, setShowFormTrack] = useState(false);

  const handleClick = () => {
    props.handleShowFormTrack();
  };

  // EDIT TEACHER
  const { editTeacherAPI } = editTeacher();
  const editTeacherByAdmin = async (dataTeacher, username) => {
    const data = await editTeacherAPI(dataTeacher, username);
    if (data) setPopup(true);
    props.updateTeacher();
  };

  const handleEditTeacher = (username, index) => {
    setShowFormTrack(true);
    setToggle(index);
  };

  // DELETE TEACHER
  const { deleteTeacherAPI } = deleteTeacher();
  const deleteTeacherByAdmin = async (username) => {
    const data = await deleteTeacherAPI(username);
  };

  const handleDeleteTeacher = (username) => {
    deleteTeacherByAdmin(username);
    props.updateTeacher();
  };

  return (
    <React.Fragment>
      {popup && (
        <Notification
          title="Sửa thành công"
          content={`Nhấn đóng để tiếp tục sử dụng hệ thống`}
          handleClose={() => setPopup(false)}
          mail={false}
        />
      )}

      <ul>
        {teachers &&
          teachers.map((teacher, index) => (
            <li key={index}>
              {teacher.username}

              <Box className="admin-courses-track-btn">
                {text !== "sinhvien" && (
                  <Button
                    sx={{ mt: 3, mb: 2, mr: 3 }}
                    className="btn btn-info"
                    onClick={() => handleEditTeacher(teacher.username, index)}
                  >
                    Edit teacher
                  </Button>
                )}
                <Button
                  sx={{ mt: 3, mb: 2 }}
                  className="btn btn-primary"
                  onClick={() => handleDeleteTeacher(teacher.username)}
                >
                  {`${
                    text === "sinhvien" ? "Delete student" : "Delete teacher"
                  }`}
                </Button>
              </Box>

              <FormAddTeacher
                teacher={teacher}
                title="Sửa giáo viên"
                show={toggle === index ? showFormTrack : false}
                handleTurnOffPopup={() => setShowFormTrack(false)}
                updateTeacher={() => props.updateTeacher()}
                editTeacher={(dataTeacher) =>
                  editTeacherByAdmin(dataTeacher, teacher.username)
                }
              />
            </li>
          ))}
      </ul>

      {text !== "sinhvien" && (
        <Box className="admin-courses-button" onClick={handleClick}>
          <span className="admin-courses-button__plus">+</span>
        </Box>
      )}
    </React.Fragment>
  );
}
