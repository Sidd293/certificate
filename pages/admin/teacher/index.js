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

const teachers = ({teachers}) => {
  const { addToast } = useToasts();
  const router = useRouter();
  const { token } = parseCookies();
 

  const deleteUser = async (id) => {
    try {
      const url = `${baseUrl}/api/v1/teacher/deleteTeacher`;
      const payload = { id: id };
      const response = await axios.post(url, payload, {
        headers: { Authorization: token },
      });

      // console.log(response.data)
      addToast(response.data, {
        appearance: "success",
      });
      router.push("/admin/teacher");
    } catch (error) {
      //   catchErrors(error, setError)
      console.log(error);
    }
  };



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
                    <Link href="/admin/teacher/createTeacher" activeClassName="active">
                      <a>Create Teacher</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/teacher" activeClassName="active">
                        <a>Teachers</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-8 col-lg-8">
              <div className="table-responsive">
              <h3>Teachers</h3>
                <table className="table vertical-align-top">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      {/* <th scope="col">Role</th> */}
                      <th scope="col" className="text-right">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {teachers.length ? (
                      <>
                        {teachers.map((teacher,index) => {
                          return (
                            <tr key={teacher.id}>
                              <th scope="row">{index+1}</th>
                              <td>{teacher.name}</td>
                              <td>{teacher.email}</td>
                              {/* <td>{teacher.role}</td> */}
                              <td className="text-right">
                                <button
                                  onClick={(e) => {
                                    window.confirm("Are you sure?") &&
                                      deleteUser(teacher.id);
                                  }}
                                  className="btn btn-danger"
                                >
                                  Delete
                                </button>
                              </td>
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

teachers.getInitialProps = async (ctx) => {
  const { token } = parseCookies(ctx);
  if (!token) {
    redirectUser(ctx, "/authentication");
  }
  // const { id } = ctx.query
  const payload = {
    headers: { Authorization: token },
  };
  const url = `${baseUrl}/api/v1/admin/teachers`;
  const response = await axios.get(url, payload);
  // console.log(response)
  return response.data;
};

export default teachers;
