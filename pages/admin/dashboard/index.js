import React, { useEffect, useState } from "react";
import Link from "@/utils/ActiveLink";
import PageBanner from "@/components/Common/PageBanner";
import axios from "axios";
import baseUrl from "@/utils/baseUrl";
import { parseCookies } from "nookies";
import { redirectUser } from "@/utils/auth";
import Preloader from "@/components/_App/Preloader";

const index = () => {
  const [totalCourses, setTotalCourses] = useState("");
  const [totalUsers, setTotalUsers] = useState("");

  const totalCoursesLength = async () => {
    const url = `${baseUrl}/api/v1/courses`;
    const response = await axios.get(url);
    setTotalCourses(response.data.courses.length);
  };
  const totalUserLength = async (ctx) => {
    const { token } = parseCookies(ctx);
    if (!token) {
      redirectUser(ctx, "/");
    }
    // const { id } = ctx.query
    const payload = {
      headers: { Authorization: token },
    };
    const url = `${baseUrl}/api/v1/admin/users`;
    const response = await axios.get(url, payload);
    // console.log(response);
    setTotalUsers(response.data.users.length);
  };

  useEffect(() => {
    totalCoursesLength();
    totalUserLength();
  }, []);

  return (
    <React.Fragment>
      <PageBanner
        pageTitle="Admin Dashboard"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Admin Dashboard"
      />

      <div className="ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-4">
              <div className="td-sidebar">
                <ul>
                  <li>
                    <Link
                      href="/admin/teachers-requests"
                      activeClassName="active"
                    >
                      <a>Teachers Requests</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/courses" activeClassName="active">
                      <a>All Courses</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/allusers" activeClassName="active">
                      <a>All Users</a>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/admin/curriculum" activeClassName="active">
                      <a>Course Curriculum</a>
                    </Link>
                  </li> */}
                  <li>
                    <Link href="/admin/appsettings" activeClassName="active">
                      <a>App Settings</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/brainlox-cash" activeClassName="active">
                      <a>Brainlox Cash</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/admin/supportUser/dashboard"
                      activeClassName="active"
                    >
                      <a>Support Users</a>
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
                      <a>Assign Teachers</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/admin/referrels"
                      activeClassName="active"
                    >
                      <a>Referrels</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-8 col-lg-8">
              <div className="td-text-area">
                <h4>Admin Dashboard</h4>

                <table className="table table-striped">
                  <thead>
                    {/* <tr>
                      <th scope="col">#</th>
                      <th scope="col">#</th>
                    </tr> */}
                  </thead>
                  <tbody>
                    {totalCourses && totalUsers !== "" ? (
                      <>
                        <tr>
                          <th scope="row">Total no of users</th>
                          <td>{totalUsers}</td>
                        </tr>
                        <tr>
                          <th scope="row">Total no of courses</th>
                          <td>{totalCourses}</td>
                        </tr>
                      </>
                    ) : (
                      <Preloader />
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

export default index;
