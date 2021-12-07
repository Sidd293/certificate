import React, { useState } from "react";
import { parseCookies } from "nookies";
import axios from "axios";
import { useToasts } from "react-toast-notifications";
import { useRouter } from "next/router";
import baseUrl from "@/utils/baseUrl";
import catchErrors from "@/utils/catchErrors";
import { redirectUser } from "@/utils/auth";
import PageBanner from "@/components/Common/PageBanner";
import Link from "@/utils/ActiveLink";

const enrolled_courses = ({enrolled}) => {
  return (
    <React.Fragment>
      <PageBanner
        pageTitle="Sold Courses"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Sold Courses"
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
                    <Link href="/admin/enrolled_courses" activeClassName="active">
                        <a>Sold Courses</a>
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
                      {/* <th scope="col">#</th> */}
                      <th scope="col">User</th>
                      <th scope="col">Course</th>
                      {/* <th scope="col">Teacher Assigned</th>
                      <th scope="col" className="text-right">
                        Assign Teacher
                      </th> */}
                      <th scope="col">Date</th>
                    </tr>
                  </thead>

                  <tbody>
                    {enrolled.length ? (
                      <>
                        {enrolled.map((course) => {
                          return (
                            <tr key={course.id}>
                              <td>{course.user.name}</td>
                              <td>{course.course.title}</td>
                              {/* <td>dummy text</td>
                              <td>Assign teacher</td> */}
                              <td>{course.createdAt.slice(0,10)}  at {course.createdAt.slice(11,19)} </td>
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

enrolled_courses.getInitialProps = async (ctx) => {
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

export default enrolled_courses;
