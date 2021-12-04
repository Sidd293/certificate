import React from "react";
// import Navbar from '../components/_App/Navbar';
import PageBanner from "../components/Common/PageBanner";
import Sidebar from "../components/TermsOfService/Sidebar";
// import Footer from '../components/_App/Footer';

const PrivacyPolicy = () => {
  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <PageBanner
        pageTitle="Privacy Policy"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Privacy Privacy"
      />

      <div className="privacy-policy-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="privacy-policy-content">
                <img src="/images/courses/courses1.jpg" alt="image" />
                <p>
                  <i>
                    This Privacy Policy was last updated on October 8, 2021.
                  </i>
                </p>
                <h3>Consent</h3>

                <p>
                  Triluxo Technology Private Limited (“Company” or “We” and
                  their connotations) operates an internet site – (URL:
                  https://brainlox.com/) (collectively known as “Platform”) that
                  is engaged with inside the carrier of on-line tutoring to
                  kids. Our Platform is by and large meant for teachers and kids
                  (herein referred as “Child”) who are registered on our
                  Platform. When the child is registered, parent provide his
                  consent for using the platform by the kid. The instructors,
                  mother and father of the Child or customers above 18 years age
                  hereinafter are known as You.
                </p>

                <p>
                  We value the privacy of both the parents/guardians as well as
                  the children who are using the apps and have, thus, created
                  this Privacy Policy (the “Privacy Policy”) to show our
                  commitment towards safeguarding your privacy. Your privacy is
                  very important to us, and we take it seriously. Let us know if
                  you have any questions or other feedback about our Privacy
                  Policy below.
                </p>

                <h3>Personal Information:</h3>

                <p>
                  The application, website and other associated products obtain
                  information that you provide when you book demo and register
                  with us. During the registration process, you generally
                  provide (a) your email address, phone number, city and your
                  kid’s name, kid’s age and kid’s gender (b) information that
                  you provide to us when you contact us for help. In this
                  Policy, “Information” is interpreted as including all types of
                  personal information, sensitive personal information, and
                  Associated Information (as defined under the Data Protection
                  Rules of 2011 (the “Data Protection Rules”)).
                </p>

                <p>
                  Occasionally, we may use the Information to contact you, to
                  provide you with the Services, important information, required
                  notices, and marketing promotions. We will ask you when we
                  need more information that personally identifies you (personal
                  information) or allows us to contact you.
                </p>

                <p>
                  If you do not agree with the terms of this Policy, please do
                  not use the Website, Applications, our products or avail any
                  of our Services.
                </p>

                <p>
                  Additional information that may be collected automatically by
                  applications or websites include your mobile device type, your
                  unique device ID, the IP address of your mobile device, your
                  mobile operating system, the type of mobile browsers you use,
                  as well as information about how you navigate and use the
                  applications or website. In order to deliver more personalized
                  content to you, we may collect info about how you use our
                  applications or website, such as the pages you visit and your
                  interactions with our products. We also collect other
                  information as per your permissions, as is the case with most
                  mobile applications.
                </p>

                <h3>Children’s Privacy</h3>
                <p>
                  Regarding the personal information we may receive relating to
                  children on our Website and Applications, we recognize the
                  need to provide additional privacy protections. Our additional
                  steps to protect children’s privacy include – Notifying
                  parents about our information practices with regard to
                  children, including the types of personal information we may
                  collect relating to children, the uses to which we may put
                  that information, and whether and with whom we may share that
                  information.
                </p>

                <h3>Retention of User Data</h3>
                <p>
                  According to our current plan, user data will be retained at
                  least three years after an account is closed. Depending on
                  legal and business requirements, we may alter this practice.
                  As an example, some data may be retained longer if required to
                  meet legal obligations or voluntary codes of conduct. In some
                  cases, we may shorten the retention period to free up space if
                  it is necessary to do so.
                </p>

                <h3>Sharing of Personal Information</h3>

                <p>
                  We may share your personal information with third party
                  service providers (called ‘processors’) to perform certain
                  processing activities on our behalf, such as Parties involved
                  in hosting and enabling our Services. Please note that we will
                  not share your Personal Information with third parties
                  allowing them to use this information for their own purposes
                  unless you have given explicit consent thereto. Categories of
                  third party processors are:
                </p>

                <h4>Usage Analytics</h4>

                <p>
                  We may use third-party Service Providers to monitor and
                  analyze the use of our Service
                </p>

                <h4>Online and Behavioral Marketing</h4>
                <p>
                  We use remarketing services to advertise on third party
                  websites to you after you visit our Service. We and our
                  third-party vendors use cookies to inform, optimise and serve
                  ads based on your past visits to our Service
                </p>

                <h4>Payment Processing and Discounting</h4>
                <p>
                  We may provide paid products and/or services within the
                  Service. In that case, we use third-party services for payment
                  processing (e.g. payment processors).
                </p>

                <h4>Collaboration and Location Service Providers</h4>
                <p>
                  We collaborate with location service providers to send out
                  emails, SMS’s and OTP’s to our customers, enable online live
                  video classes for students and teachers and to also enable
                  telephony across our students, teachers and support team.
                </p>

                <h3>Changes to this Privacy Policy</h3>
                <p>
                  This Privacy Policy will remain in effect except with respect
                  to any changes in its provisions in the future, which will be
                  in effect immediately after being posted on this page.
                </p>
                <p>
                  We reserve the right to update or change our Privacy Policy at
                  any time and you should check this Privacy Policy
                  periodically. Your continued use of the Service after we post
                  any modifications to the Privacy Policy on this page will
                  constitute your acknowledgment of the modifications and your
                  consent to abide and be bound by the modified Privacy Policy.
                </p>
                <p>
                  If we make any material changes to this Privacy Policy, we
                  will notify you either through the email address you have
                  provided us, or by placing a prominent notice on our website
                </p>
              </div>
            </div>

            {/* <div className="col-lg-4 col-md-12">
                            <Sidebar />
                        </div> */}
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default PrivacyPolicy;
