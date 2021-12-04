import React from "react";
// import Navbar from '../components/_App/Navbar';
import PageBanner from "../components/Common/PageBanner";
import Sidebar from "../components/TermsOfService/Sidebar";
// import Footer from '../components/_App/Footer';

const TermsOfService = () => {
  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <PageBanner
        pageTitle="Terms Of Service"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Terms Of Service"
      />

      <div className="terms-of-service-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="terms-of-service-content">
                <img src="/images/courses/courses2.jpg" alt="image" />
                <p>
                  <i>
                    This Terms of Service was last updated on October 8, 2021.
                  </i>
                </p>
                <h3>Terms and Conditions</h3>
                {/* <p>Triluxo Technology Private Limited (“Company” or “We” and their connotations) operates an internet site – (URL: https://brainlox.com/) (collectively known as “Platform”) that is engaged with inside the carrier of on-line tutoring to kids. Our Platform is by and large meant for teachers and kids (herein referred as “Child”) who are registered on our Platform. When the child is registered, parent provide  his consent for using the platform by the kid. The instructors, mother and father of the Child or customers above 18 years age hereinafter are known as You.</p>
                                <p></p> */}
                <p>Welcome to Brainlox!</p>
                <p>
                  These terms and conditions outline the rules and regulations
                  for the use of TRILUXO TECHNOLOGIES PRIVATE LIMITED’s Website,
                  located at <b> https://brainlox.com </b>
                </p>
                <p>
                  By accessing this website, we assume you accept these terms
                  and conditions. Do not continue to use Brainlox if you do not
                  agree to take all of the terms and conditions stated on this
                  page.
                </p>
                <p>
                  The following terminology applies to these Terms and
                  Conditions, Privacy Statement and Disclaimer Notice and all
                  Agreements: “Client”, “You” and ““Your” refers to you, the
                  person log on this website and compliant to the Company’s
                  terms and conditions. “The Company”, “Ourselves”, “We”, “Our”
                  and “Us”, refers to our Company. “Party”, “Parties”, or “Us”,
                  refers to both the Client and ourselves. All terms refer to
                  the offer, acceptance and consideration of payment necessary
                  to undertake the process of our assistance to the Client in
                  the most appropriate manner for the express purpose of meeting
                  the Client’s needs in respect of provision of the Company’s
                  stated services, in accordance with and subject to, prevailing
                  law of Netherlands. Any use of the above terminology or other
                  words in the singular, plural, capitalization and/or he/she or
                  they, are taken as interchangeable and therefore as referring
                  to same.
                </p>
                {/* <blockquote className="blockquote">
                                    <p>We collect certain data from you directly, like information you enter yourself, data about your participation in courses, and data from third-party platforms you connect with Brainlox. We also collect some data automatically, like information about your device and what parts of our Services you interact with or spend time using.</p>
                                </blockquote> */}
                <h3>Cookies</h3>
                <p>
                  We employ the use of cookies. By accessing <b> www.brainlox.com, </b>
                  you agreed to use cookies in agreement with the TRILUXO
                  TECHNOLOGIES PRIVATE LIMITED’s Privacy Policy.
                </p>
                <p>
                  Most interactive websites use cookies to let us retrieve the
                  user’s details for each visit. Cookies are used by our website
                  to enable the functionality of certain areas to make it easier
                  for people visiting our website. Some of our
                  affiliate/advertising partners may also use cookies.
                </p>

                <h3>License</h3>
                <p>
                  Unless otherwise stated, TRILUXO TECHNOLOGIES PRIVATE LIMITED
                  and/or its licensors own the intellectual property rights for
                  all material on www.brainlox.com. All intellectual property
                  rights are reserved. You may access this from www.brainlox.com
                  for your own personal use subjected to restrictions set in
                  these terms and conditions.
                </p>
                <p>You must not:</p>
                <ul>
                  <li>Republish material from <b> www.brainlox.com </b></li>
                  <li>
                    Sell, rent or sub-license material from <b> www.brainlox.com </b>
                  </li>
                  <li>
                    Reproduce, duplicate or copy material from <b> www.brainlox.com </b>
                  </li>
                  <li>Redistribute content from <b> www.brainlox.com </b></li>
                </ul>
                <p>
                  Parts of this website offer an opportunity for users to post
                  and exchange opinions and information in certain areas of the
                  website. TRILUXO TECHNOLOGIES PRIVATE LIMITED does not filter,
                  edit, publish or review Comments prior to their presence on
                  the website. Comments do not reflect the views and opinions of
                  TRILUXO TECHNOLOGIES PRIVATE LIMITED, its agents and/or
                  affiliates. Comments reflect the views and opinions of the
                  person who post their views and opinions. To the extent
                  permitted by applicable laws, TRILUXO TECHNOLOGIES PRIVATE
                  LIMITED shall not be liable for the Comments or for any
                  liability, damages or expenses caused and/or suffered as a
                  result of any use of and/or posting of and/or appearance of
                  the Comments on this website.
                </p>
                <p>
                  TRILUXO TECHNOLOGIES PRIVATE LIMITED reserves the right to
                  monitor all Comments and to remove any Comments which can be
                  considered inappropriate, offensive or causes breach of these
                  Terms and Conditions.
                </p>
                <p>You warrant and represent that:</p>
                <ul>
                  <li>
                    You are entitled to post the Comments on our website and
                    have all necessary licenses and consents to do so;
                  </li>
                  <li>
                    The Comments do not invade any intellectual property right,
                    including without limitation copyright, patent or trademark
                    of any third party;
                  </li>
                  <li>
                    The Comments do not contain any defamatory, libellous,
                    offensive, indecent or otherwise unlawful material which is
                    an invasion of privacy
                  </li>
                  <li>
                    The Comments will not be used to solicit or promote business
                    or custom or present commercial activities or unlawful
                    activity.
                  </li>
                </ul>
                <p>
                  You hereby grant TRILUXO TECHNOLOGIES PRIVATE LIMITED a
                  non-exclusive license to use, reproduce, edit and authorize
                  others to use, reproduce and edit any of your Comments in any
                  and all forms, formats or media.
                </p>
                <h3>Hyperlinking to our Content</h3>
                <p>
                  The following organizations may link to our website without
                  prior written approval:
                </p>
                <ul>
                  <li>Government agencies;</li>
                  <li>Search engines;</li>
                  <li>News organizations;</li>
                  <li>
                    Online directory distributors may link to our website in the
                    same manner as they hyperlink to the Websites of other
                    listed businesses; and
                  </li>
                  <li>
                    System wide Accredited Businesses except soliciting
                    non-profit organizations, charity shopping malls, and
                    charity fundraising groups which may not hyperlink to our
                    Web site.
                  </li>
                </ul>
                <p>
                  These organizations may link to our home page, to publications
                  or to other Website information so long as the link: (a) is
                  not in any way deceptive; (b) does not falsely imply
                  sponsorship, endorsement or approval of the linking party and
                  its products and/or services; and (c) fits within the context
                  of the linking party’s site.
                </p>
                <p>
                  We may consider and approve other link requests from the
                  following types of organizations:
                </p>
                <ul>
                  <li>
                    commonly-known consumer and/or business information sources;
                  </li>
                  <li>dot.com community sites;</li>
                  <li>associations or other groups representing charities;</li>
                  <li>online directory distributors;</li>
                  <li>internet portals;</li>
                  <li>accounting, law and consulting firms; and</li>
                  <li>educational institutions and trade associations</li>
                </ul>
                <p>
                  We will approve link requests from these organizations if we
                  decide that: (a) the link would not make us look unfavourably
                  to ourselves or to our accredited businesses; (b) the
                  organization does not have any negative records with us; (c)
                  the benefit to us from the visibility of the hyperlink
                  compensates the absence of TRILUXO TECHNOLOGIES PRIVATE
                  LIMITED; and (d) the link is in the context of general
                  resource information.
                </p>
                <p>
                  These organizations may link to our home page so long as the
                  link: (a) is not in any way deceptive; (b) does not falsely
                  imply sponsorship, endorsement or approval of the linking
                  party and its products or services; and (c) fits within the
                  context of the linking party’s site.
                </p>
                <p>
                  If you are one of the organizations listed in paragraph 2
                  above and are interested in linking to our website, you must
                  inform us by sending an e-mail to TRILUXO TECHNOLOGIES PRIVATE
                  LIMITED. Please include your name, your organization name,
                  contact information as well as the URL of your site, a list of
                  any URLs from which you intend to link to our website, and a
                  list of the URLs on our site to which you would like to link.
                  Wait 2-3 weeks for a response.
                </p>
                <p>
                  Approved organizations may hyperlink to our website as
                  follows:
                </p>

                <ul>
                  <li>By use of our corporate name; or</li>
                  <li>
                    By use of the uniform resource locator being linked to; or
                  </li>
                  <li>
                    By use of any other description of our website being linked
                    to that makes sense within the context and format of content
                    on the linking party’s site.
                  </li>
                </ul>

                <p>
                  No use of TRILUXO TECHNOLOGIES PRIVATE LIMITED’s logo or other
                  artwork will be allowed for linking absent a trademark license
                  agreement.
                </p>

                <h3>iFrames</h3>
                <p>
                  Without prior approval and written permission, you may not
                  create frames around our Webpages that alter in any way the
                  visual presentation or appearance of our website.
                </p>

                <h3>Content Liability</h3>
                <p>
                  We shall not be hold responsible for any content that appears
                  on your Website. You agree to protect and defend us against
                  all claims that is rising on your Website. No link(s) should
                  appear on any Website that may be interpreted as libellous,
                  obscene or criminal, or which infringes, otherwise violates,
                  or advocates the infringement or other violation of, any
                  third-party rights.
                </p>

                <h3>Reservation of Rights</h3>
                <p>
                  We reserve the right to request that you remove all links or
                  any particular link to our website. You approve to immediately
                  remove all links to our Website upon request. We also reserve
                  the right to amend these terms and conditions and it’s linking
                  policy at any time. By continuously linking to our website,
                  you agree to be bound to and follow these linking terms and
                  conditions.
                </p>

                <h3>Removal of links from our website</h3>
                <p>
                  If you find any link on our website that is offensive for any
                  reason, you are free to contact and inform us any moment. We
                  will consider requests to remove links but we are not
                  obligated to or so or to respond to you directly.
                </p>
                <p>
                  We do not ensure that the information on this website is
                  correct, we do not warrant its completeness or accuracy; nor
                  do we promise to ensure that the website remains available or
                  that the material on the website is kept up to date.
                </p>

                <h3>Third- Party Permission</h3>
                <p>
                  The Company has subscribed to various third-party service
                  providers and You agree and acknowledge that, while accepting
                  these Terms, You explicitly grant permission to these service
                  providers to use your information and make cold calls in
                  furtherance of our Services on the Platform, even when your
                  mobile phone is on ‘Do Not Disturb’ mode. In the event of any
                  dispute between the third-party and You, the Company shall not
                  be held liable in any manner whatsoever.
                </p>

                <h3>Indemnity</h3>
                <p>
                  You agree to indemnify and hold us harmless, our contractors,
                  and our licensors, and respective directors, officers,
                  employees and agents from and against any all claims and
                  expenses, including attorneys’ fees, arising out of their use
                  of the Services and/or the Platform, including but not limited
                  to the violation of these Terms by the Users.
                </p>

                <h3>Government Laws and Jurisdiction</h3>

                <p>
                  These Terms shall be governed by and construed in accordance
                  with the Arbitration and Conciliation Act 1996, or such
                  similar laws of India, which are not in conflict with each
                  other. Such shall be subjected to the exclusive jurisdiction
                  of the competent courts of Mumbai, India.
                </p>

                <h3>Disclaimer</h3>

                <p>
                  To the maximum extent permitted by applicable law, we exclude
                  all representations, warranties and conditions relating to our
                  website and the use of this website. Nothing in this
                  disclaimer will:
                </p>

                <ul>
                  <li>
                    limit or exclude our or your liability for death or personal
                    injury;
                  </li>
                  <li>
                    limit or exclude our or your liability for fraud or
                    fraudulent misrepresentation;
                  </li>
                  <li>
                    limit any of our or your liabilities in any way that is not
                    permitted under applicable law; or
                  </li>
                  <li>
                    exclude any of our or your liabilities that may not be
                    excluded under applicable law.
                  </li>
                </ul>
                <p>
                  The limitations and prohibitions of liability set in this
                  Section and elsewhere in this disclaimer: (a) are subject to
                  the preceding paragraph; and (b) govern all liabilities
                  arising under the disclaimer, including liabilities arising in
                  contract, in tort and for breach of statutory duty.
                </p>
                <p>
                  As long as the website and the information and services on the
                  website are provided free of charge, we will not be liable for
                  any loss or damage of any nature.
                </p>

                <h3>Contact</h3>
                <p>
                  If you have any questions about these Terms, please contact us
                  by email or postal mail on the following address:
                </p>

                <br />

                <p>Name: Triluxo Technologies Private Limited</p>

                <p>E-mail id: support@brainlox.com</p>

                <p>Ph: 9811690305</p>

                <p>
                  Address: 2nd Floor, Tower- Klassic, Jaypee Wish Town , Sector
                  -134, Noida, Gautam Buddha Nagar,
                </p>

                <p>Uttar Pradesh, India, 201304</p>

                {/* <h3>1. Our website</h3>
                                <p>Our website address is: http://brainlox.com</p>
                                <blockquote className="blockquote">
                                    <p>We collect certain data from you directly, like information you enter yourself, data about your participation in courses, and data from third-party platforms you connect with Brainlox. We also collect some data automatically, like information about your device and what parts of our Services you interact with or spend time using.</p>
                                </blockquote>
                                <h3>2. Data You Provide to Us</h3>
                                <p>We may collect different data from or about you depending on how you use the Services. Below are some examples to help you better understand the data we collect.</p>
                                <h3>3. How We Get Data About You</h3>
                                <p>We use tools like cookies, web beacons, analytics services, and advertising providers to gather the data listed above. Some of these tools offer you the ability to opt out of data collection.</p>
                                <h3>4. What We Use Your Data For</h3>
                                <ol>
                                    <li>Responding to your questions and concerns;</li>
                                    <li>Sending you administrative messages and information, including messages from instructors and teaching assistants, notifications about changes to our Service, and updates to our agreements;</li>
                                    <li>Sending push notifications to your wireless device to provide updates and other relevant messages (which you can manage from the “options” or “settings” page of the mobile app);</li>
                                </ol>
                                <h3>5. Your Choices About the Use of Your Data</h3>
                                <p>You can choose not to provide certain data to us, but you may not be able to use certain features of the Services.</p>
                                <ul>
                                    <li>To stop receiving promotional communications from us, you can opt out by using the unsubscribe mechanism in the promotional communication you receive or by changing the email preferences in your account. Note that regardless of your email preference settings, we will send you transactional and relationship messages regarding the Services, including administrative confirmations, order confirmations, important updates about the Services, and notices about our policies.</li>
                                    <li>The browser or device you use may allow you to control cookies and other types of local data storage. Your wireless device may also allow you to control whether location or other data is collected and shared. You can manage Adobe’s LSOs through their Website Storage Settings panel.</li>
                                    <li>To get information and control cookies used for tailored advertising from participating companies, see the consumer opt-out pages for the Network Advertising Initiative and Digital Advertising Alliance, or if you’re located in the European Union, visit the Your Online Choices site. To opt out of Google’s display advertising or customize Google Display Network ads, visit the Google Ads Settings page. To opt out of Taboola’s targeted ads, see the Opt-out Link in their Cookie Policy.</li>
                                    <li>To update data you provide directly, log into your account and update your account at any time.</li>
                                </ul>
                                <h3>6. Our Policy Concerning Children</h3>
                                <p>We recognize the privacy interests of children and encourage parents and guardians to take an active role in their children’s online activities and interests. Children under 13 (or under 16 in the European Economic Area) should not use the Services. If we learn that we’ve collected personal data from a child under those ages, we will take reasonable steps to delete it.</p> */}
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

export default TermsOfService;
