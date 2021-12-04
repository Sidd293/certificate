import React from 'react'
// import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner'
import GiftCourseForm from '../components/Contact/GiftCourseForm'
// import Footer from '../components/_App/Footer';
// import GoogleMap from '../components/Contact/GoogleMap'

const Contact = () => {
  return (
        <React.Fragment>
            {/* <Navbar /> */}
            <PageBanner
                pageTitle="Gift a Course"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Gift a Course"
            />

            <div className="contact-area ptb-100">
                <div className="container" >
                    <div className="align-items-center">
                        <div className="">
                            <GiftCourseForm />
                        </div>
                    </div>
                </div>
            </div>

            {/* <GoogleMap /> */}

            {/* <Footer /> */}
        </React.Fragment>
  )
}

export default Contact
