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

const teachers = ({users}) => {
  const { addToast } = useToasts();
  const router = useRouter();
  const { token } = parseCookies();
  const [model, setModel] = useState(false);
  const [role, setRole] = useState('');

  const toggle = () => setModel(!model);

  const selectRole = (e) => {
    setRole(e.target.value);
  };

  const deleteUser = async (id) => {
    try {
      const url = `${baseUrl}/api/v1/admin/delete-user`;
      const payload = { id: id };
      const response = await axios.post(url, payload, {
        headers: { Authorization: token },
      });

      // console.log(response.data)
      addToast(response.data, {
        appearance: "success",
      });
      router.push("/admin/users");
    } catch (error) {
      //   catchErrors(error, setError)
      console.log(error);
    }
  };

  const changeRole = async (id, role) => {
    try {
      const url = `${baseUrl}/api/v1/admin/change-role`;
      const payload = { id: id, role: role };
      const response = await axios.post(url, payload, {
        headers: { Authorization: token },
      });
      // console.log(response.data)
      addToast(response.data, {
        appearance: "success",
      });
      router.push("/admin/users");
    } catch (error) {
      //   catchErrors(error, setError)
      console.log(error);
    }
  };

  const teachers = users.filter((user)=>{
      if(user.role=='teacher'){
          return user;
      }
  })

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
                </ul>
              </div>
            </div>

            <div className="col-md-8 col-lg-8">
              <div className="table-responsive">
                <table className="table vertical-align-top">
                  <thead>
                    <tr>
                      {/* <th scope="col">#</th> */}
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Role</th>
                      {/* <th scope="col" className="text-right">
                        Action
                      </th> */}
                    </tr>
                  </thead>

                  <tbody>
                    {teachers.length ? (
                      <>
                        {teachers.map((user) => {
                          return (
                            <tr key={user.id}>
                              {/* <th scope="row">1</th> */}
                              <td>{user.name}</td>
                              <td>{user.email}</td>
                              <td>{user.role}</td>
                              {/* <td className="text-right">
                                <div>
                                  <Button
                                    color="danger"
                                    onClick={toggle}
                                  >
                                    Click Me
                                  </Button>
                                  <Modal toggle={toggle} isOpen={model} centered backdrop={false} fade={true}>
                                    <ModalHeader
                                      toggle={toggle}
                                    >
                                      Change Role
                                    </ModalHeader>
                                    <ModalBody>
                                      <select
                                      onChange={selectRole}>
                                        <option>---select role---</option>
                                        <option value="student">Student</option>
                                        <option value="teacher">Teacher</option>
                                        <option value="student">Support</option>
                                      </select>
                                    </ModalBody>
                                    <ModalFooter>
                                      <Button
                                        color="primary"
                                        onClick={(e) => {
                                      window.confirm("Are you sure?") &&
                                      changeRole(user.id, role);
                                    }}
                                      >
                                        Do Something
                                      </Button>{" "}
                                      <Button
                                        onClick={toggle}
                                      >
                                        Cancel
                                      </Button>
                                    </ModalFooter>
                                  </Modal>
                                </div>
                                {user.role === "student" ? (
                                  <button
                                    onClick={(e) => {
                                      window.confirm("Are you sure?") &&
                                      changeRole(user.id, "teacher");
                                    }}
                                    className="btn btn-success mr-05"
                                  >
                                    <a className="btn btn-success">
                                      <i className="bx bxs-edit"></i> Change
                                      Role to Teacher
                                    </a>
                                  </button>
                                ) : (
                                  <button
                                    onClick={(e) => {
                                      window.confirm("Are you sure?") &&
                                      changeRole(user.id, "student");
                                    }}
                                    className="btn btn-success mr-05"
                                  >
                                    <a className="btn btn-success">
                                      <i className="bx bxs-edit"></i> Change
                                      Role to Student
                                    </a>
                                  </button>
                                )}

                                <button
                                  onClick={(e) => {
                                    window.confirm("Are you sure?") &&
                                      deleteUser(user.id);
                                  }}
                                  className="btn btn-danger"
                                >
                                  Delete
                                </button>
                              </td>
                              <td className="text-right">
                                {user.role === "student" ? (
                                  <button
                                    onClick={(e) => {
                                      window.confirm("Are you sure?") &&
                                      changeRole(user.id, "teacher");
                                    }}
                                    className="btn btn-success mr-05"
                                  >
                                    <a className="btn btn-success">
                                      <i className="bx bxs-edit"></i> Change
                                      Role to Teacher
                                    </a>
                                  </button>
                                ) : (
                                  <button
                                    onClick={(e) => {
                                      window.confirm("Are you sure?") &&
                                      changeRole(user.id, "student");
                                    }}
                                    className="btn btn-success mr-05"
                                  >
                                    <a className="btn btn-success">
                                      <i className="bx bxs-edit"></i> Change
                                      Role to Student
                                    </a>
                                  </button>
                                )}

                                <button
                                  onClick={(e) => {
                                    window.confirm("Are you sure?") &&
                                      deleteUser(user.id);
                                  }}
                                  className="btn btn-danger"
                                >
                                  Delete
                                </button>
                              </td> */}
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
  const url = `${baseUrl}/api/v1/admin/users_info`;
  const response = await axios.get(url, payload);
  // console.log(response)
  return response.data;
};

export default teachers;
