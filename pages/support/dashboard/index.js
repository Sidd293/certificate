import React, { useEffect, useState } from "react";
import Link from "@/utils/ActiveLink";
import PageBanner from "@/components/Common/PageBanner";
import axios from "axios";
import baseUrl from "@/utils/baseUrl";
import { parseCookies } from "nookies";
import { redirectUser } from "@/utils/auth";
import Preloader from "@/components/_App/Preloader";

const index = () => {
  // const [loader, setLoader] = useState(true);
  const [totalUsers, setTotalUsers] = useState("");

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

    const supportUser = response.data.users.filter(
      (sUser) => sUser.role === "support"
    );
    setTotalUsers(supportUser.length);
  };

  useEffect(() => {
    // totalCoursesLength();
    totalUserLength();
  }, []);

  // const supportUsers = users.data.users;
  // console.log(supportUsers);
  return (
    <React.Fragment>
      <PageBanner
        pageTitle="Support Dashboard"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Support Dashboard"
      />

      <div className="ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-4">
              <div className="td-sidebar">
                <ul>
                  <li>
                    <Link href="/support/allusers" activeClassName="active">
                      <a>All Users</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/support/brainlox-cash"
                      activeClassName="active"
                    >
                      <a>Brainlox Cash</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/support/courses" activeClassName="active">
                      <a>All Courses</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/support/createCourse" activeClassName="active">
                      <a>Create a Course</a>
                    </Link>
                  </li>

                  {/* <li>
                    <Link href="/support/curriculum" activeClassName="active">
                      <a>Course Curriculum</a>
                    </Link>
                  </li> */}
                  <li>
                    <Link href="/support/appsettings" activeClassName="active">
                      <a>App Settings</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-8 col-lg-8">
              <div className="td-text-area">
                <h4>Support Dashboard</h4>
                <table className="table table-striped">
                  <thead>
                    {/* <tr>
                      <th scope="col">#</th>
                      <th scope="col">#</th>
                    </tr> */}
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Total no of users</th>
                      {totalUsers !== "" ? (
                        <td>{totalUsers}</td>
                      ) : (
                        <Preloader />
                      )}
                    </tr>
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
// index.getInitialProps = async (ctx) => {
//   const { token } = parseCookies(ctx);
//   if (!token) {
//     redirectUser(ctx, "/");
//   }
//   // const { id } = ctx.query
//   const payload = {
//     headers: { Authorization: token },
//   };
//   const url = `${baseUrl}/api/v1/admin/users`;
//   const response = await axios.get(url, payload);
//   return response.data;
// };

export default index;
