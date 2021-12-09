import React from "react";
import Link from "@/utils/ActiveLink";
import PageBanner from "@/components/Common/PageBanner";
import axios from "axios";
import baseUrl from "@/utils/baseUrl";
import { parseCookies } from "nookies";
import { redirectUser } from "@/utils/auth";
import { useToasts } from "react-toast-notifications";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const index = ({ users }) => {
  const { addToast } = useToasts();
  const router = useRouter();
  const { token } = parseCookies();

  // console.log(users);

  const fetchedSupportUsers = users.filter((sUser) => sUser.role === "support");

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
        supportUserDeleteHandeler(id);
        // console.log(id);
      }
    });
  };

  const supportUserDeleteHandeler = async (id) => {
    try {
      const url = `${baseUrl}/api/v1/authSupport/deleteSupport`;
      const payload = { id: id };
      const response = await axios.post(url, payload, {
        headers: { Authorization: token },
      });

      // console.log(response.data)
      addToast(response.data, {
        appearance: "success",
      });
      router.push("/admin/supportUser/dashboard");
    } catch (error) {
      //   catchErrors(error, setError)
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <PageBanner
        pageTitle="Support Users"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Support Users"
      />

      <div className="ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-4">
              <div className="td-sidebar">
                <ul>
                  <li>
                    <Link
                      href="/admin/supportUser/createSupportUser"
                      activeClassName="active"
                    >
                      <a>Create Support User</a>
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
              <div className="td-text-area">
                <h4>Support Users</h4>

                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {fetchedSupportUsers.length > 0 ? (
                      <>
                        {fetchedSupportUsers.map((user, index) => {
                          return (
                            <tr key={user.id}>
                              <th scope="row">{index + 1}</th>
                              <td>{user.name}</td>
                              <td>{user.email}</td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                  onClick={
                                    (e) => confirmDelete(user.id)
                                    // supportUserDeleteHandeler(user.id)
                                  }
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </>
                    ) : (
                      <>
                        <tr>No users</tr>
                      </>
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
index.getInitialProps = async (ctx) => {
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
  return response.data;
};

export default index;
