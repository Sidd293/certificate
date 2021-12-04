import React, { useState } from "react";
import { parseCookies } from "nookies";
import axios from "axios";
import { Alert, Spinner } from "reactstrap";
import baseUrl from "@/utils/baseUrl";
import toast from "react-hot-toast";
import catchErrors from "@/utils/catchErrors";
import PageBanner from "@/components/Common/PageBanner";
import Link from "@/utils/ActiveLink";

const INIT_VIDEO = {
  order: 0,
  name: "",
  description: "",
  id: "",
};

const UpdateCurriculum = ({ courses }) => {
  // console.log(courses[0].videos)

  const { token } = parseCookies();
  const [video, setVideo] = React.useState(INIT_VIDEO);
  const [loading, setLoading] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);
  const [course, setCourse] = React.useState("");
  const [selectedCourse, setSelectedCourse] = React.useState("");
  const [selectedCurriculum, setSelectedCurriculum] = React.useState("");

  React.useEffect(() => {
    const { order, name } = video;

    const isVideo = Object.values({
      name,
      // order,
    }).every((el) => Boolean(el));
    isVideo ? setDisabled(false) : setDisabled(true);
  }, [video]);

  const handleChange = (e) => {
    // console.log(d.value)
    const { name, value, files } = e.target;
    if (name === "video_url") {
      const videoSize = files[0].size / 1024 / 1024;
      if (videoSize > 20) {
        addToast(
          "The video size greater than 20 MB. Make sure less than 20 MB.",
          {
            appearance: "error",
          }
        );
        e.target.value = null;
        return;
      }
      setVideo((prevState) => ({ ...prevState, video_url: files[0] }));
    } else {
      setVideo((prevState) => ({ ...prevState, [name]: value }));
    }
    // console.log(video);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const url = `${baseUrl}/api/v1/courses/course/video-update`;
      const { id, order, name, description, courseId } = video;
      const payload = {
        // order,
        name,
        description,
        id,
        // videoUrl
        courseId,
      };

      const response = await axios.post(url, payload, {
        headers: { Authorization: token },
      });

      console.log(response.data);

      setLoading(false);
      toast.success(response.data);
      setVideo(INIT_VIDEO);
    } catch (err) {
      catchErrors(err, setError);
      toast.error(error);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const selectCourse = (event) => {
    setSelectedCourse(event.target.value);
  };

  // console.log(selectedCurriculum);

  const selCourse = courses
    .filter((item) => {
      if (item.id == selectedCourse) {
        return item;
      }
    })
    .map((filteredCourse) => filteredCourse.videos);

  const selectCurriculum = (event) => {
    setSelectedCurriculum(event.target.value);
    const data = {
      // order: '2',
      name: "",
      description: "",
      id: selectedCurriculum,
      courseId: selectedCourse,
    };
    console.log(selectedCurriculum);
    console.log(selectedCourse);

    setVideo(data);
  };

  // setVideo(selectedCurriculum)

  // console.log(selCourse)

  return (
    <React.Fragment>
      <PageBanner
        pageTitle="Upload Course Video"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Upload Course Video"
      />

      <div className="ptb-100">
        <div className="container">
          {courses.length == 0 && (
            <Alert color="danger" className="text-center">
              You have to create course first here{" "}
              <Link href="/teacher/course/create">
                <a>Create Course</a>
              </Link>
            </Alert>
          )}

          <div className="row">
            <div className="col-md-4 col-lg-4">
              <div className="td-sidebar">
                <ul>
                  <li>
                    <Link href="/teacher/courses" activeClassName="active">
                      <a>My Courses</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/teacher/course/create"
                      activeClassName="active"
                    >
                      <a>Create A Course</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/teacher/courses/course-edit"
                      activeClassName="active"
                    >
                      <a>Edit My Course</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/curriculum" activeClassName="active">
                      <a>Upload Course Curriculum</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/update-curriculum" activeClassName="active">
                      <a>Update Course Curriculum</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-8 col-lg-8">
              <div className="border-box">
                <form onSubmit={handleSubmit}>
                  {loading && (
                    <h3 className="loading-spinner">
                      <div className="d-table">
                        <div className="d-table-cell">
                          <Spinner color="danger" /> Video uploading...
                        </div>
                      </div>
                    </h3>
                  )}

                  <div className="form-group">
                    <label>Select Course</label>
                    <select
                      onChange={selectCourse}
                      name="courseId"
                      className="form-control"
                    >
                      <option>Select Course</option>
                      {courses.map((course) => (
                        <option value={course.id} key={course.id}>
                          {course.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Select Video order</label>
                    <select
                      onChange={selectCurriculum}
                      name="courseId"
                      className="form-control"
                    >
                      <option>Select Curriculum</option>
                      {selCourse.length > 0
                        ? selCourse.map((item) =>
                            item.length > 0 ? (
                              item.map((el) => (
                                <>
                                  <option value={el.id} key={el.id}>
                                    {el.order}
                                  </option>
                                </>
                              ))
                            ) : (
                              <option>No course</option>
                            )
                          )
                        : null}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      placeholder="Enter course title"
                      className="form-control"
                      name="name"
                      value={video.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Deescription</label>
                    <input
                      type="text"
                      placeholder="Enter course title"
                      className="form-control"
                      name="description"
                      value={video.description}
                      onChange={handleChange}
                    />
                  </div>

                  <br />

                  <button
                    className="default-btn"
                    disabled={disabled || loading}
                  >
                    <i className="flaticon-right-chevron"></i>
                    Upload
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

UpdateCurriculum.getInitialProps = async (ctx) => {
  const { token } = parseCookies(ctx);
  if (!token) {
    return { courses: [] };
  }

  const payload = {
    headers: { Authorization: token },
  };

  const url = `${baseUrl}/api/v1/courses/course/Index`;
  const response = await axios.get(url, payload);
  // console.log(response.data)
  return response.data;
};

export default UpdateCurriculum;
