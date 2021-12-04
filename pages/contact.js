import React from 'react'
// import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner'
import ContactForm from '../components/Contact/ContactForm'
// import Footer from '../components/_App/Footer';
// import GoogleMap from '../components/Contact/GoogleMap'

const Contact = () => {
  return (
        <React.Fragment>
            {/* <Navbar /> */}
            <PageBanner
                pageTitle="Contact"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Contact"
            />

            <div className="contact-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="contact-info">
                                <span className="sub-title">Contact Details</span>
                                <h2>Get in Touch</h2>
                                <p>For any queries, Please knock us. Happy to help you anytime!</p>

                                <ul>
                                    {/* <li>
                                        <div className="icon">
                                            <i className='bx bx-map'></i>
                                        </div>
                                        <h3>Our Address</h3>
                                        <p>2750 Quadra Street Victoria Road, New York, Canada</p>
                                    </li> */}
                                    <li>
                                        <div className="icon">
                                            <i className='bx bx-phone-call'></i>
                                        </div>
                                        <h3>Contact</h3>
                                        <p>Mobile: <a href="tel:+44457895789">(+1) 414 429 3937</a></p>
                                        <p>Mail: <a href="mailto:support@brainlox.com">support@brainlox.com</a></p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className='bx bx-time-five'></i>
                                        </div>
                                        <h3>Hours of Operation</h3>
                                        <p>24 hours a Day</p>
                                        <p>7 Days a Week</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <ContactForm />
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
