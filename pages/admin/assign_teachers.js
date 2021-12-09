import React, { useState, useEffect } from "react";
import { parseCookies } from "nookies";
import axios from "axios";
import { useToasts } from "react-toast-notifications";
import { useRouter } from "next/router";
import baseUrl from "@/utils/baseUrl";
import catchErrors from "@/utils/catchErrors";
import { redirectUser } from "@/utils/auth";
import PageBanner from "@/components/Common/PageBanner";
import Link from "@/utils/ActiveLink";

const assign_teachers = ({ enrolled, teachers }) => {
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const { token } = parseCookies();
  const { addToast } = useToasts();
  const { router } = useRouter();


  const assignTeacher = async (id, teacherId) => {
    try {
      const url = `${baseUrl}/api/v1/admin/assign_teacher`;
      const payload = { id: id, teacherId: teacherId };
      const response = await axios.post(url, payload, {
        headers: { Authorization: token },
      });
      // console.log(response.data)
      addToast(response.data, {
        appearance: "success",
      });
      router.push("/admin/assign_teachers");
    } catch (error) {
      //   catchErrors(error, setError)
      console.log(error);
    }
  };

  const selectTeacher = (event) => {
    setSelectedTeacher(event.target.value);
  };
  return (
    <React.Fragment>
      <PageBanner
        pageTitle="Assign Teacher"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Assign Teacher"
      />

      <div className="ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-4">
              <div className="td-sidebar">
                <ul>
                  <li>
                    <Link
                      href="/admin/pending-requests"
                      activeClassName="active"
                    >
                      <a>Pending Requests</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/courses" activeClassName="active">
                      <a>All Courses</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/curriculum" activeClassName="active">
                      <a>Course Curriculum</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/users_details" activeClassName="active">
                      <a>All Users</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/teacher" activeClassName="active">
                      <a>Teachers</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/admin/enrolled_courses"
                      activeClassName="active"
                    >
                      <a>Sold Courses</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/admin/assign_teachers"
                      activeClassName="active"
                    >
                      <a>Assign Teacher</a>
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
                      <th scope="col">#</th>
                      <th scope="col">User</th>
                      <th scope="col">Course</th>
                      <th scope="col">Teacher Assigned</th>
                      <th scope="col" className="text-right">
                        Assign Teacher
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {enrolled.length ? (
                      <>
                        {enrolled.map((course, index) => {
                          return (
                            <tr key={course.id}>
                              <td>{index+1}</td>
                              <td>{course.user.name}</td>
                              <td>{course.course.title}</td>
                              <td>
                              { course.teacherId!==null? <Link
                                  href="/admin/teacher/[id]"
                                  as={`/admin/teacher/${course.teacherId}`}
                                  target="_blank"
                                >
                                  <a className="btn btn-success" target="_blank">
                                    <i className="bx bxs-edit"></i>See details
                                  </a>
                                </Link> : 
                                <>Teacher not assigned yet....</>
                              }                      

                              </td>
                              {/* <td>{course.teacherId}</td> */}
                              <td>
                                <select
                                  onChange={selectTeacher}
                                  name="teacherId"
                                  //className="form-control"
                                >
                                  <option>---select Teacher---</option>
                                  {teachers.length > 0 ? (
                                    teachers.map((el) => (
                                      <>
                                        <option value={el.id} key={el.id}>
                                          {el.name}
                                        </option>
                                      </>
                                    ))
                                  ) : (
                                    <option>No Teachers</option>
                                  )}
                                </select>
                                <button
                                  onClick={(e) => {
                                    window.confirm("Are you sure?") &&
                                      assignTeacher(course.id, selectedTeacher);
                                  }}
                                  className="btn btn-success mr-05"
                                >
                                  <a className="btn btn-success">
                                    <i className="bx bxs-edit"></i> Assign
                                    Teacher
                                  </a>
                                </button>
                              </td>
                              {/* <td>{course.createdAt.slice(0,10)}  at {course.createdAt.slice(11,19)} </td> */}
                            </tr>
                          );
                        })}
                      </>
                    ) : (
                      <tr className="text-center">
                        <td colSpan="3">No Users</td>
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

assign_teachers.getInitialProps = async (ctx) => {
  const { token } = parseCookies(ctx);
  if (!token) {
    redirectUser(ctx, "/authentication");
  }
  // const { id } = ctx.query
  const payload = {
    headers: { Authorization: token },
  };
  const url = `${baseUrl}/api/v1/admin/enrolled`;
  const response = await axios.get(url, payload);
  // console.log(response)
  return response.data;
};

export default assign_teachers;
