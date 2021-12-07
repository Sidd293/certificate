import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "@/utils/ActiveLink";
import PageBanner from "@/components/Common/PageBanner";
import Cookies from "js-cookie";
import Switch from "react-switch";
import baseUrl from "../../utils/baseUrl";

const appsettings = () => {
  // console.log(pendingRequests)
  const [chatBotActivation, setChatBotActivation] = useState("");

  const getChatBotState = async () => {
    const response = await axios.get(
      `${baseUrl}/api/v1/appsettings/chatBotState`
    );

    if (JSON.stringify(response.data) === "true") {
      setChatBotActivation(JSON.stringify(response.data));
    } else {
      setChatBotActivation(JSON.stringify(response.data));
    }
  };

  const handleClick = async () => {
    const headers = { authorization: `${Cookies.get("token")}` };
    const value = chatBotActivation === "true" ? "OFF" : "ON";
    const payload = { value };
    await axios.post(`${baseUrl}/api/v1/appsettings/chatBotState`, payload, {
      headers,
    });
    getChatBotState();
  };

  useEffect(async () => {
    await getChatBotState();
  }, []);

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

                  <li>
                    <Link href="/support/curriculum" activeClassName="active">
                      <a>Course Curriculum</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/support/appsettings" activeClassName="active">
                      <a>App Settings</a>
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
                      <th scope="col">Settings</th>
                      <th scope="col" className="text-right">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>ChatBot</td>
                      <td className="text-right">
                        <Switch
                          onChange={handleClick}
                          checkedIcon={null}
                          uncheckedIcon={null}
                          checked={chatBotActivation == "true" ? true : false}
                        />
                        {/* <button className="btn btn-success mr-05" onClick={handleClick} >
                                                    Turn { chatBotActivation == "true" ? "OFF" : "ON" } ChatBot
                                                </button> */}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* {pendingRequests.length ? (
                                <>
                                    {pendingRequests.map((request) => {
                                        return (
                                            <ul key={request.id}>
                                                <li>
                                                    {request.name}
                                                    <button
                                                        onClick={ e => {
                                                            window.confirm("Are you sure?") && approveReq(request.id)
                                                        }}
                                                    >
                                                        Approve
                                                    </button>
                                                    <button
                                                        onClick={ e => {
                                                            window.confirm("Are you sure?") && declineReq(request.id)
                                                        }}
                                                    >
                                                        Decline
                                                    </button>
                                                </li>
                                            </ul>
                                        )
                                    })}
                                </>
                            ) : (
                                <ul>
                                    <li>No Pending Requests!</li>
                                </ul>
                            )} */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default appsettings;
