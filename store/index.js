import {
  API_ADMIN_LOGIN,
  API_BLOG,
  API_ALL_USER,
  API_COURSES,
  API_FOTGOT_PASSWORD,
  API_LOGIN,
  API_ME,
  API_PATCH_USER,
  API_RESET_PASSWORD,
  API_SIGNUP,
  API_TEACHERS,
  API_COMMENT,
  API_SEARCH,
} from "../constants";

/**
 *
 * @param {*} raw : infomation
 * @param {*} api : API
 * @returns
 * LOGIN - REGISTER USER
 */
const fetchDataUser = async (raw, api) => {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const response = await fetch(api, {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("error", error);
  }
};

// LOGIN USER
export const loginUser = (raw) => {
  fetchDataUser(raw, API_LOGIN);
  return { fetchDataUser };
};

// CREATE USER
export const signUpUser = (raw) => {
  fetchDataUser(raw, API_SIGNUP);
  return { fetchDataUser };
};

/**
 * LOGIN ADMIN
 */
export const loginAdmin = () => {
  const checkRole = async (token) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("token", token);

      const response = await fetch(API_ME, {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      });
      const json = await response.json();
      return json.role === "admin" || "teacher" ? true : false;
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchDataLoginAdmin = async (raw) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const response = await fetch(API_ADMIN_LOGIN, {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(raw),
        redirect: "follow",
      });

      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
    }
  };

  return { fetchDataLoginAdmin, checkRole };
};

/**
 * GET DATA USER
 */
import getTokenUser from "../api/getTokenUser";
import getTokenAdmin from "../api/getTokenAdmin";

const getDataRole = async (func, api) => {
  try {
    const myHeaders = new Headers();
    func(myHeaders);

    const response = await fetch(api, {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    });
    const json = await response.json();
    if (response.status === 200) return json;
  } catch (error) {
    console.log("error", error);
  }
};

// DATA USER
const getDataOfUser = async (func, api) => {
  try {
    const myHeaders = new Headers();
    if (func !== "") func(myHeaders);

    const response = await fetch(api, {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    });
    const json = await response.json();

    if (response.status === 200) return json;
  } catch (error) {
    console.log("error", error);
  }
};

// GET ALL USER
export const getAllUser = () => {
  const getAllUserAPI = async () => {
    return getDataOfUser("", API_ALL_USER);
  };

  return { getAllUserAPI };
};

// GET DATA USER
export const getUser = () => {
  const fetchDataUser = async () => {
    return getDataOfUser(getTokenUser, API_ME);
  };

  return { fetchDataUser };
};

// GET DATA USER
export const getAllBlog = () => {
  const getAllBlogAPI = async () => {
    return getDataOfUser(getTokenUser, API_BLOG);
  };

  return { getAllBlogAPI };
};

// GET DATA ADMIN
export const getAdmin = () => {
  const getAdminAPI = async () => {
    return getDataRole(getTokenAdmin, API_ME);
  };

  return { getAdminAPI };
};

/**
 * PATCH DATA USER
 */
const patchData = async (data, api) => {
  try {
    const myHeaders = new Headers();
    getTokenUser(myHeaders);
    myHeaders.append("Content-Type", "application/json");

    const response = await fetch(api, {
      method: "PATCH",
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
    });

    const json = await response.json();
    if (response.status === 200) return json;
  } catch (error) {
    console.log(error);
  }
};

export const patchDataUser = () => {
  const editDataUserAPI = async (dataUser) => {
    return patchData(dataUser, API_PATCH_USER);
  };

  return { editDataUserAPI };
};

// EDIT COMMENT
export const editComment = () => {
  const editCommentAPI = async (dataComment, idComment) => {
    const newComment = { content: dataComment };
    return patchData(newComment, `${API_COMMENT}/${idComment}`);
  };

  return { editCommentAPI };
};

// EDIT COMMENT IN TRACK
export const editCommentIntrack = () => {
  const editCommentAPI = async (dataComment, idComment) => {
    const newComment = { content: dataComment };
    return patchData(newComment, `${API_COMMENT}/${idComment}?scope=track`);
  };

  return { editCommentAPI };
};

/**
 * COURSE + TRACK
 */

/**
 * GET COURSES
 */
export const getCourses = () => {
  const fetchDataCoursesAPI = async () => {
    try {
      const response = await fetch(API_COURSES, {
        method: "GET",
        redirect: "follow",
      });

      const json = await response.json();
      if (response.status === 200) return json;
    } catch (error) {
      console.log(error);
    }
  };

  return { fetchDataCoursesAPI };
};

/**
 *
 * GET COURSE BY SLUG
 */
const getDataCourse = async (api) => {
  try {
    const myHeaders = new Headers();
    getTokenUser(myHeaders);

    const response = await fetch(api, {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    });

    const json = await response.json();
    if (response.status === 200) return json;
  } catch (error) {
    console.log(error);
  }
};

// GET COURSE BY SLUG
export const getCourseBySlug = () => {
  const getCourseBySlugAPI = async (slug) => {
    return getDataCourse(`${API_COURSES}/${slug}`);
  };

  return { getCourseBySlugAPI };
};

// GET COURSE BY SLUG
export const getBlogBySlug = () => {
  const getBlogBySlugAPI = async (slug) => {
    return getDataCourse(`${API_BLOG}/${slug}`);
  };

  return { getBlogBySlugAPI };
};

// GET TRACK BY ID
export const getTrackById = () => {
  const getTrackByIdAPI = async (slugCourse, idTrack) => {
    return getDataCourse(`${API_COURSES}/${slugCourse}/track/${idTrack}`);
  };

  return { getTrackByIdAPI };
};

/**
 * GET ALL TEACHER
 */
const getDataTeacher = async (api) => {
  try {
    const myHeaders = new Headers();
    getTokenAdmin(myHeaders);

    const response = await fetch(api, {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    });

    const json = await response.json();
    if (response.status === 200) return json;
  } catch (error) {
    console.log(error);
  }
};

export const getTeacher = () => {
  const getAllTeacherAPI = async () => {
    return getDataTeacher(API_TEACHERS);
  };

  return { getAllTeacherAPI };
};

/***
 * ADD COURSE + TRACK
 */
const addData = async (dataCourse, courseId, api) => {
  try {
    const myHeaders = new Headers();
    getTokenAdmin(myHeaders);
    myHeaders.append("Content-Type", "application/json");

    const response = await fetch(api, {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(dataCourse),
      redirect: "follow",
    });

    const json = await response.json();
    return response.status;
  } catch (error) {
    console.log("error", error);
  }
};

// ADD COURSE
export const addCourse = () => {
  const addCourseAPI = (dataCourse) => {
    return addData(dataCourse, "", API_COURSES);
  };
  return { addCourseAPI };
};

// ADD TRACK
export const addTrack = () => {
  const addTrackAPI = async (dataCourse, courseId) => {
    return addData(dataCourse, courseId, `${API_COURSES}/${courseId}/track`);
  };

  return { addTrackAPI };
};

// FORGOT PASSWORD
export const forgotPassword = () => {
  const forgotPasswordAPI = async (email) => {
    return addData(email, "", API_FOTGOT_PASSWORD);
  };

  return { forgotPasswordAPI };
};

/**
 * ADD COMMENT
 * @returns
 */

const addDataComment = async (data, api) => {
  // console.log(data, api);
  try {
    const myHeaders = new Headers();
    getTokenUser(myHeaders);
    myHeaders.append("Content-Type", "application/json");

    const response = await fetch(api, {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
    });

    const json = await response.json();
    // console.log(json);
    return response.status;
  } catch (error) {
    console.log("error", error);
  }
};

// ADD COMMENT
export const addComment = () => {
  const addCommentAPI = async (dataComment, slugComment) => {
    return addDataComment(
      dataComment,
      `${API_COMMENT}/${slugComment}?scope=blog`
    );
  };

  return { addCommentAPI };
};

// ADD COMMENT IN TRACK
export const addCommentInTrack = () => {
  const addCommentAPI = async (dataComment, slugCourse, idTrack) => {
    return addDataComment(
      dataComment,
      `${API_COMMENT}/${slugCourse}?scope=track&trackId=${idTrack}`
    );
  };

  return { addCommentAPI };
};

// ADMIN
const addDataCommentAdmin = async (data, api) => {
  // console.log(data, api);
  try {
    const myHeaders = new Headers();
    getTokenAdmin(myHeaders);
    myHeaders.append("Content-Type", "application/json");

    const response = await fetch(api, {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
    });

    const json = await response.json();
    // console.log(json);
    return response.status;
  } catch (error) {
    console.log("error", error);
  }
};

// ADD COMMENT
export const addCommentAdmin = () => {
  const addCommentAPI = async (dataComment, slugComment) => {
    return addDataCommentAdmin(
      dataComment,
      `${API_COMMENT}/${slugComment}?scope=blog`
    );
  };

  return { addCommentAPI };
};

// ADD COMMENT IN TRACK
export const addCommentAdminInTrack = () => {
  const addCommentAPI = async (dataComment, slugCourse, idTrack) => {
    return addDataCommentAdmin(
      dataComment,
      `${API_COMMENT}/${slugCourse}?scope=track&trackId=${idTrack}`
    );
  };

  return { addCommentAPI };
};

// RESET PASSWORD
export const resetPassword = () => {
  const resetPasswordAPI = async (token, raw) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("token", token);
      myHeaders.append("Content-Type", "application/json");

      const response = await fetch(API_RESET_PASSWORD, {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(raw),
        redirect: "follow",
      });

      const json = await response.json();
      // console.log(json);
      if (response.status === 200) return json;
      if (response.status === 400) return false;
    } catch (error) {
      console.log("error", error);
    }
  };

  return { resetPasswordAPI };
};

// CREATE TEACHER
export const createTeacher = () => {
  const createTeacherAPI = (dataTeacher) => {
    return addData(dataTeacher, "", API_TEACHERS);
  };

  return { createTeacherAPI };
};

const addData2 = async (dataCourse, api) => {
  console.log(dataCourse, api);
  try {
    const myHeaders = new Headers();
    getTokenUser(myHeaders);
    myHeaders.append("Content-Type", "application/json");

    const response = await fetch(api, {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(dataCourse),
      redirect: "follow",
    });

    const json = await response.json();
    return response.status;
  } catch (error) {
    console.log("error", error);
  }
};
// ADD BLOG
export const addBlog = () => {
  const addBlogAPI = async (data) => {
    return addData2(data, API_BLOG);
  };

  return { addBlogAPI };
};

/***
 * EDIT COURSE + TRACK
 */

const editData = async (data, slug, trackId, api) => {
  try {
    const myHeaders = new Headers();
    getTokenAdmin(myHeaders);
    myHeaders.append("Content-Type", "application/json");

    const response = await fetch(api, {
      method: "PATCH",
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
    });

    const json = await response.json();
    if (response.status === 200) return json;
    // console.log(json);
    if (response.status === 400) return false;
  } catch (error) {
    console.log(error);
  }
};

// EDIT COURSE
export const editCourse = () => {
  const editCourseAPI = async (dataCourse, slug) => {
    return editData(dataCourse, "", "", `${API_COURSES}/${slug}`);
  };

  return { editCourseAPI };
};

// EDIT TRACK
export const editTrack = () => {
  const editTrackAPI = async (dataTrack, slug, trackId) => {
    return editData(
      dataTrack,
      slug,
      "",
      `${API_COURSES}/${slug}/track/${trackId}`
    );
  };

  return { editTrackAPI };
};

// EDIT TEACHER
export const editTeacher = () => {
  const editTeacherAPI = async (dataTeacher, username) => {
    return editData(dataTeacher, "", "", `${API_TEACHERS}/${username}`);
  };

  return { editTeacherAPI };
};

/**
 * DELETE COURSE + TRACK + TEACHER
 */
const deleteData = async (api, text) => {
  try {
    const myHeaders = new Headers();
    if (text === "user") getTokenUser(myHeaders);
    else getTokenAdmin(myHeaders);

    const response = await fetch(api, {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    });

    const json = await response.json();
    if (response.status === 200) return true;
    if (response.status === 400) return false;
  } catch (error) {
    console.log(error);
  }
};

// DELETE COURSE
export const deleteCourse = () => {
  const deleteCourseAPI = async (slug) => {
    return deleteData(`${API_COURSES}/${slug}`);
  };

  return { deleteCourseAPI };
};

/**
 * DELETE TRACK
 */
export const deleteTrack = () => {
  const deleteTrackAPI = async (slug, trackId) => {
    return deleteData(`${API_COURSES}/${slug}/track/${trackId}`);
  };

  return { deleteTrackAPI };
};

// DELETE TEACHER
export const deleteTeacher = () => {
  const deleteTeacherAPI = async (username) => {
    return deleteData(`${API_TEACHERS}/${username}`);
  };

  return { deleteTeacherAPI };
};

// DELETE COMMENT
export const deleteComment = () => {
  const deleteCommentAPI = async (slug, idComment) => {
    return deleteData(`${API_COMMENT}/${slug}/${idComment}?scope=blog`, "user");
  };

  return { deleteCommentAPI };
};

// DELETE COMMENT TRACK
export const deleteCommentInTrack = () => {
  const deleteCommentAPI = async (slug, idComment, idTrack) => {
    return deleteData(
      `${API_COMMENT}/${slug}/${idComment}?scope=track&trackId=${idTrack}`,
      "user"
    );
  };

  return { deleteCommentAPI };
};

/**
 * SEARCH
 */
export const searchKey = () => {
  const searchAPI = async (key) => {
    try {
      const myHeaders = new Headers();

      const response = await fetch(`${API_SEARCH}/?q=${key}`, {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      });

      const json = await response.json();
      // console.log(json)
      if (response.status === 200) {
        if (key === "") return false;
        else return json;
      }
      if (response.status === 400) return false;
    } catch (error) {
      console.log(error);
    }
  };

  return { searchAPI };
};
