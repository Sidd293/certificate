import React from 'react'
// import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner'
// import Footer from '../components/_App/Footer';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from 'react-accessible-accordion'
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs'
// import SubscribeForm from '../components/Common/SubscribeForm'

resetIdCounter()

const Faq = () => {
  return (
        <React.Fragment>
            {/* <Navbar /> */}
            <PageBanner
                pageTitle="Frequently Asked Questions"
                homePageUrl="/"
                homePageText="Home"
                activePageText="FAQ's"
            />

            <div className="faq-area ptb-100">
                <div className="container">
                    <div className="tab faq-accordion-tab">
                        <Tabs>
                            <TabList>
                                <Tab><i className='bx bx-flag'></i> <span>Getting Started</span></Tab>
                                {/* <Tab><i className='bx bxs-badge-dollar'></i> <span>Pricing & Planes</span></Tab>
                                <Tab><i className='bx bx-shopping-bag'></i> <span>Sales Question</span></Tab>
                                <Tab><i className='bx bx-book-open'></i> <span>Usage Guides</span></Tab>
                                <Tab><i className='bx bx-info-circle'></i> <span>General Guide</span></Tab> */}
                            </TabList>

                            <TabPanel>
                                <div className="faq-accordion">
                                    <Accordion allowZeroExpanded preExpanded={['a']}>
                                        <AccordionItem uuid="a">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What is a free demo class and how do I register for a demo class?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>Your child can attend a free demo class by our top instructors to experience Brainlox Classes first-hand. This is a great way to understand the BRAINLOX S way of teaching and know how instant doubt solving works. You can register with the BRAINLOX site.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Can we choose the timing of the classes?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can choose between a weekend or a weekday batch as per your convenience and the classes will be scheduled accordingly.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How did you develop your curriculum?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>Our curriculum has been created by experts from various industries.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="d">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Do I need to have a laptop or desktop for learning these courses or can I do it on mobile too?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can watch the videos and take quizzes & tests on any device including mobile. But for courses like python the Laptop or Desktop is required</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="e">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How can my child clear his/her doubts instantly during the online class?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>While attending an online class, you can ask his/her questions in real-time via a live chat box. Our talented teachers will instantly assist and solve your child’s doubts</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="f">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Are the demo classes free?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>Yes, the demo classes are free. For More details, please visit Brainlox.com</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="g">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Do I need to have any basic knowledge to learn these courses?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>There are no prerequisites for this course and all of them start with the scratch.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="h">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Do you give lesson notes and assignments?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>Yes, depending on the course the study materials and assignments will be provided by the faculty</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="i">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Will I be getting a hard copy of the certificate?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                    <p>No, you will be only getting a soft copy of the certificate</p>
                                                    <p>For More Further queries and questions., Please contact us at contact@brainlox.com</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </TabPanel>

                            {/* <TabPanel>
                                <div className="faq-accordion">
                                    <Accordion allowZeroExpanded preExpanded={['a']}>
                                        <AccordionItem uuid="a">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Can we choose the timing of the classes?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can choose between a weekend or a weekday batch as per your convenience and the classes will be scheduled accordingly.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Do I need to have a laptop or desktop for learning these courses or can I do it on mobile too?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can watch the videos and take quizzes & tests on any device including mobile. But for courses like python the Laptop or Desktop is required</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Will I be getting a hard copy of the certificate?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>No, you will be only getting a soft copy of the certificate

For More Further queries and questions., Please contact us at contact@triluxo.com</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="d">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How do I find a school where I want to study?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="e">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Am I eligible for admission?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="faq-accordion">
                                    <Accordion allowZeroExpanded preExpanded={['a']}>
                                        <AccordionItem uuid="a">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How can my child clear his/her doubts instantly during the online class?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>While attending an online class, you can ask his/her questions in real-time via a live chat box. Our talented teachers will instantly assist and solve your child’s doubts</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How can I contact a school directly?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Will I be getting a hard copy of the certificate?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>No, you will be only getting a soft copy of the certificate

For More Further queries and questions., Please contact us at contact@triluxo.com</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="d">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How do I find a school where I want to study?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="e">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Am I eligible for admission?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="faq-accordion">
                                    <Accordion allowZeroExpanded preExpanded={['a']}>
                                        <AccordionItem uuid="a">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What is a free demo class and how do I register for a demo class?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>Your child can attend a free demo class by our top instructors to experience TRILUXO Classes first-hand. This is a great way to understand the TRILUXO S way of teaching and know how instant doubt solving works. You can register with the TRILUXO site.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How can I contact a school directly?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Do you give lesson notes and assignments?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>Yes, depending on the course the study materials and assignments will be provided by the faculty</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="d">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How do I find a study abroad program on Brainlox.com?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="e">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How do I find a school where I want to study?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="faq-accordion">
                                    <Accordion allowZeroExpanded preExpanded={['a']}>
                                        <AccordionItem uuid="a">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Are the demo classes free?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>Yes, the demo classes are free. For More details, please visit Triluxo.com</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Where should I study abroad?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How do I find a study abroad program on Brainlox.com?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="d">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How do I find a school where I want to study?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="e">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Am I eligible for admission?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </TabPanel> */}
                        </Tabs>
                    </div>
                </div>
            </div>

            {/* <SubscribeForm /> */}

            {/* <Footer /> */}
        </React.Fragment>
  )
}

export default Faq
