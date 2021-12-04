import React from 'react'
// import Navbar from '../components/_App/Navbar';
import PageBanner from '@/components/Common/PageBanner'
import Link from 'next/link'
import baseUrl from "@/utils/baseUrl";
import cookie from "js-cookie";
import axios from "axios";

// import Footer from '../components/_App/Footer';

const MyProfile = ({name, email, phone, location, about}) => {
  return (
        <React.Fragment>
            {/* <Navbar /> */}
            <PageBanner
                pageTitle="My Profile"
                homePageUrl="/"
                homePageText="Home"
                activePageText="My Profile"
            />

            <div className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="user-profile">
                                <img src="/images/success-people/success-people3.jpg" />
                                <h3>{name}</h3>
                                <p>{email}</p>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="user-profile-table">
                                <div className="table-responsive">
                                    <table className="table table-bordered vertical-align-top">
                                        <tbody>
                                            <tr>
                                                <td>Phone Number</td>
                                                <td>{phone}</td>
                                            </tr>
                                            <tr>
                                                <td>Location</td>
                                                <td>{location}</td>
                                            </tr>
                                            <tr>
                                                <td>About Me</td>
                                                <td>{about}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </React.Fragment>
  )
}

MyProfile.getInitialProps = async () => {
    const url = `${baseUrl}/api/v1/auth/account`;
    const headers = { authorization: `${cookie.get("token")}` };
    const response = await axios.get(url, {headers});
    return response.data;
}

export default MyProfile
