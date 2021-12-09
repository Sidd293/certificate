import React from 'react'
// import Navbar from '../components/_App/Navbar';
import PageBanner from '@/components/Common/PageBanner'
// import Footer from '../components/_App/Footer';
import ProfileCourses from '@/components/Profile/ProfileCourses'
import Quizzes from '@/components/Profile/Quizzes'
import { parseCookies } from 'nookies'
import { redirectUser } from '@/utils/auth'
import baseUrl from '@/utils/baseUrl'
import axios from 'axios'

const Profile = ({teacher}) => {
    console.log(teacher)
  return (
        <React.Fragment>
            {/* <Navbar /> */}
            <PageBanner
                pageTitle="Profile"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Profile"
            />

            <div className="profile-area">
                <div className="container">
                    <div className="profile-box ptb-100">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-4">
                                <div className="image">
                                    <img src="/images/default-user.jpg" alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-8">
                                <div className="content">
                                    <h3>{teacher.name}</h3>
                                    <span className="sub-title">{teacher.role}</span>
                                    <p>{teacher.about}</p>
                                    <ul className="info">
                                        <li><span>Phone Number:</span> <a href="tel:+44254588689">{teacher.phone}</a></li>
                                        <li><span>Email:</span> <a href="mailto:hello@sarahtaylor.com">{teacher.email}</a></li>
                                    </ul>

                                    {/* <ul className="social-link">
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <ProfileCourses /> */}

                    {/* <Quizzes /> */}
                </div>
            </div>

            {/* <Footer /> */}
        </React.Fragment>
  )
}

Profile.getInitialProps = async ctx => {
    const { token } = parseCookies(ctx)
    if (!token) {
      redirectUser(ctx, '/')
    }
    const { id } = ctx.query
    const payload = {
      headers: { Authorization: token }
    }
  
    const url = `${baseUrl}/api/v1/admin/teacher/${id}`
    const response = await axios.get(url, payload)
    // console.log(response.data)
    return response.data
}

export default Profile
