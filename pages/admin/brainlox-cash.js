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

const brainloxCash = ({ users }) => {
  const { addToast } = useToasts();
  const router = useRouter();
  const { token } = parseCookies();

  const updateCoin = async (id, coin) => {
    setInEditMode({
      status: false,
      rowKey: id,
    });

    try {
      const url = `${baseUrl}/api/v1/admin/users/edit-brainlox-coin`;
      const payload = { userId: id, brainlox_coin: coin };
      const response = await axios.post(url, payload, {
        headers: { Authorization: token },
      });
      // console.log(response.data)
      addToast(response.data, {
        appearance: "success",
      });
      router.push("/admin/brainlox-cash");
    } catch (error) {
      //   catchErrors(error, setError)
      console.log(error);
    }
  };

  const [inEditMode, setInEditMode] = useState({
    status: false,
    rowKey: null,
  });

  const editCash = (coin, id) => {
    setCash({
      coin: coin,
      rowKey: id,
    });
  };

  const [cash, setCash] = useState({
    coin: 0,
    rowKey: null,
  });

  return (
    <React.Fragment>
      <PageBanner
        pageTitle="Brainlox Cash"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Brainlox Cash"
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
                    <Link href="/admin/users" activeClassName="active">
                      <a>All Users</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/brainlox-cash" activeClassName="active">
                      <a>Brainlox Cash</a>
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
                      <th scope="col">Name</th>
                      <th scope="col">Cash</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {users.length > 0 ? (
                      <>
                        {users.map((user) => {
                          return (
                            <tr key={user.id}>
                              <td>{user.name}</td>
                              <td>
                                {inEditMode.status &&
                                inEditMode.rowKey === user.id ? (
                                  <input
                                    type="text"
                                    value={cash.coin}
                                    onChange={(event) =>
                                      editCash(event.target.value, user.id)
                                    }
                                  />
                                ) : (
                                  <p>{user.brainlox_coin}</p>
                                )}
                              </td>
                              <td>
                                {inEditMode.status &&
                                inEditMode.rowKey === user.id ? (
                                  <button
                                    onClick={(e) => {
                                      updateCoin(user.id, cash.coin);
                                    }}
                                    className="btn btn-success mr-05"
                                  >
                                    <a className="btn btn-success">
                                      {/* <i className="bx bxs-edit"></i>  */}
                                      Save
                                    </a>
                                  </button>
                                ) : (
                                  <button
                                    onClick={(e) => {
                                      setInEditMode({
                                        status: true,
                                        rowKey: user.id,
                                      });
                                    }}
                                    className="btn btn-primary mr-05"
                                  >
                                    <a className="btn btn-primary">
                                      {/* <i className="bx bxs-edit"></i> */}
                                      Edit Cash
                                    </a>
                                  </button>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </>
                    ) : (
                      <>No users</>
                    )}
                    {/* <tr>
                      <td>User 1</td>
                      <td>
                        {toggle ? (
                          <p>{cash}</p>
                        ) : (
                          <input type="text" value="0" />
                        )}
                      </td>
                      <td>
                        {toggle ? (
                          <button
                            onClick={(e) => {
                              setToggle(false);
                            }}
                            className="btn btn-primary mr-05"
                          >
                            <a className="btn btn-primary">
                              <i className="bx bxs-edit"></i>
                               Edit Cash
                            </a>
                          </button>
                        ) : (
                          <button
                            onClick={(e) => {
                              setToggle(true);
                            }}
                            className="btn btn-success mr-05"
                          >
                            <a className="btn btn-success">
                              <i className="bx bxs-edit"></i> 
                              Save
                            </a>
                          </button>
                        )}
                      </td>
                    </tr> */}
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

brainloxCash.getInitialProps = async (ctx) => {
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
  // console.log(response)
  return response.data;
};

export default brainloxCash;
