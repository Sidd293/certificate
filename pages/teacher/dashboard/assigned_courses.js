import React from "react";
import { parseCookies } from "nookies";
import axios from "axios";
import baseUrl from "@/utils/baseUrl";
import PageBanner from "@/components/Common/PageBanner";
import Link from "@/utils/ActiveLink";

const assignedCourses = ({ enrolled }) => {
  console.log(enrolled);
  return (
    <React.Fragment>
      <PageBanner
        pageTitle="Assigned Courses"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Assigned Courses"
      />

      <div className="ptb-100">
        <div className="container">
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
                    <Link
                      href="/teacher/course/upload-course-video"
                      activeClassName="active"
                    >
                      <a>Upload Course Video</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/teacher/dashboard/assigned_courses"
                      activeClassName="active"
                    >
                      <a>Assigned Courses</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-8 col-lg-8">
              <div className="table-responsive">
                <table className="table vertical-align-top">
                  <thead>
                    <tr>
                      <th scope="col">Courses</th>
                      <th scope="col" className="text-right">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {enrolled.length ? (
                      enrolled.map((course) => (
                        <tr key={course.id}>
                          <td>{course.course.title}</td>
                        </tr>
                      ))
                    ) : (
                      <tr className="text-center">
                        <td colSpan="3">Empty</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

assignedCourses.getInitialProps = async (ctx) => {
  const { token } = parseCookies(ctx);
  if (!token) {
    return { courses: [] };
  }

  const payload = {
    headers: { Authorization: token },
  };

  const url = `${baseUrl}/api/v1/teacher/assigned_courses`;
  const response = await axios.get(url, payload);
  // console.log(response.data)
  return response.data;
};

export default assignedCourses;
