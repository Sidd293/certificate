import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
        <footer className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            {/* <Link href="/">
                                <a className="logo">
                                    <img src="/images/brainLox_white.jpeg" alt="logo" style={{width: '15vh'}}/>
                                </a>
                            </Link> */}

                            <p>Working to bring significant changes in online-based learning by doing extensive research for course curriculum preparation, student engagements, and looking forward to the flexible education!</p>

                            <ul className="social-link">
                                <li>
                                    <a href="https://www.facebook.com/brainlox/" className="d-block" target="_blank">
                                        <i className='bx bxl-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/brainlox" className="d-block" target="_blank">
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/brainloxed/" className="d-block" target="_blank">
                                        <i className='bx bxl-instagram'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/brainlox/" className="d-block" target="_blank">
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/channel/UCzTWxSKEXsRtWyEHkrWxiEg" className="d-block" target="_blank">
                                        <i className='bx bxl-youtube'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Explore</h3>
                            <ul className="footer-links-list">
                                <li>
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/courses">
                                        <a>Courses</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/gift-a-course">
                                        <a>Gift a Course</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/share-a-message">
                                        <a>Share a Message</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Resources</h3>
                            <ul className="footer-links-list">
                                <li>
                                    <Link href="/faq">
                                        <a>FAQ</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>Contact</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Address</h3>
                            <ul className="footer-contact-info">
                                <li>
                                    <i className='bx bx-map'></i>
                                    USA
                                </li>
                                <li>
                                    <i className='bx bx-phone-call'></i>
                                    <a href="tel:+44587154756">(+1) 414 429 3937</a>
                                </li>
                                <li>
                                    <i className='bx bx-envelope'></i>
                                    <a href="mailto:support@brainlox.com">support@brainlox.com</a>
                                </li>
                                <li>
                                    <i className='bx bxs-inbox'></i>
                                    <a href="tel:+557854578964">(+1) 414 429 3937</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-area">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p><i className='bx bx-copyright'></i>{currentYear} Brainlox</p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <ul>
                                <li>
                                    <Link href="/privacy-policy">
                                        <a>Privacy Policy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms-of-service">
                                        <a>Terms &amp; Conditions</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </footer>
  )
}

export default Footer
