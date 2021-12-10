import React from "react";
import { parseCookies } from "nookies";
import axios from "axios";
import { useToasts } from "react-toast-notifications";
import { useRouter } from "next/router";
import baseUrl from "@/utils/baseUrl";
import catchErrors from "@/utils/catchErrors";
import PageBanner from "@/components/Common/PageBanner";
import Link from "@/utils/ActiveLink";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const adminCourses = ({ courses }) => {
  const { token } = parseCookies();
  const { addToast } = useToasts();
  const router = useRouter();

  // const confirmEditCourse = () => {
  //   const result = window.confirm("Are you sure?");
  //   if (result === true) {
  //     console.log("Edit btn clicked");
  //   }
  // };
  const confirmDelete = (id) => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCourseHandeler(id);
        // console.log(id);
      }
    });
  };

  const deleteCourseHandeler = async (id) => {
    try {
      const url = `${baseUrl}/api/v1/courses/deleteCourse`;
      const payload = { id: id };
      const response = await axios.post(url, payload, {
        headers: { Authorization: token },
      });

      // console.log(response.data)

      addToast(response.data, {
        appearance: "success",
      });

      router.reload();
    } catch (error) {
      //   catchErrors(error, setError)
      console.log(error);
      addToast("Something went wrong...", {
        appearance: "error",
      });
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
                    <Link href="/admin/courses" activeClassName="active">
                      <a>All Courses</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/dashboard" activeClassName="active">
                      <a>Back to Dashboard</a>
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
                      <th scope="col">Course Title</th>
                      <th scope="col" className="text-right">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {courses.length ? (
                      <>
                        {courses.map((request) => {
                          return (
                            <tr key={request.id}>
                              {/* <th scope="row">1</th> */}
                              <td>{request.title}</td>
                              <td className="text-right">
                                <button
                                  // onClick={(e) => {
                                  //   confirmEditCourse();
                                  // }}
                                  className="btn btn-success mr-05"
                                >
                                  <Link
                                    // href=""
                                    href="/admin/course/[id]"
                                    as={`/admin/course/${request.id}`}
                                  >
                                    <a className="btn btn-success">
                                      <i className="bx bxs-edit"></i> Edit
                                    </a>
                                  </Link>
                                </button>

                                <button
                                  onClick={(e) => {
                                    confirmDelete(request.id);
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
                        <td colSpan="3">No Courses</td>
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

adminCourses.getInitialProps = async () => {
  const url = `${baseUrl}/api/v1/courses`;
  const response = await axios.get(url);
  // console.log(response)
  return response.data;
};

export default adminCourses;
