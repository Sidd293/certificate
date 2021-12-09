import React, { useState } from "react";
import { parseCookies } from "nookies";
import axios from "axios";
import baseUrl from "@/utils/baseUrl";
import { redirectUser } from "@/utils/auth";
import PageBanner from "@/components/Common/PageBanner";
import Link from "@/utils/ActiveLink";

const adminUsers = ({referrels}) => {
  console.log(referrels)
  return (
    <React.Fragment>
      <PageBanner
        pageTitle="Referrels"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Referrels"
      />

      <div className="ptb-100">
        <div className="container">
          <div className="row">
            {/* <div className="col-md-4 col-lg-4">
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
                    <Link href="/admin/users" activeClassName="active">
                      <a>All Users</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}

            <div className="col-md-12 col-lg-12">
              <div className="table-responsive">
              <h1>Referrels</h1>
                <table className="table vertical-align-top">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Medium</th>
                      <th scope="col">Sender Name</th>
                      <th scope="col">Sender Email</th>
                      <th scope="col">Sender Phone</th>
                      <th scope="col">Receiver Name</th>
                      <th scope="col">Receiver Email</th>
                      <th scope="col">Receiver Phone</th>
                      <th scope="col">Message From Sender</th>
                    </tr>
                  </thead>

                  <tbody>
                    {referrels.length ? (
                      <>
                        {referrels.map((referrel,index) => {
                          return (
                            <tr key={referrel.id}>
                              <th scope="row">{index+1}</th>
                              <td>{referrel.medium}</td>
                              <td>{referrel.sender_name}</td>
                              <td>{referrel.sender_email}</td>
                              <td>{referrel.sender_phone}</td>
                              <td>{referrel.receiver_name}</td>
                              <td>{referrel.receiver_email}</td>
                              <td>{referrel.receiver_phone}</td>
                              <td>{referrel.msg_from_sender}</td>
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

adminUsers.getInitialProps = async (ctx) => {
  const { token } = parseCookies(ctx);
  if (!token) {
    redirectUser(ctx, "/");
  }
  // const { id } = ctx.query
  const payload = {
    headers: { Authorization: token },
  };
  const url = `${baseUrl}/api/v1/admin/referrels`;
  const response = await axios.get(url, payload);
  // console.log(response)
  return response.data;
};

export default adminUsers;
