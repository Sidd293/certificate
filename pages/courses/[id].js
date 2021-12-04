import React from 'react'
import PageBanner from '@/components/SingleCourses/PageBanner'
import CoursesDetailsSidebar from '@/components/SingleCourses/CoursesDetailsSidebar'
// import YouMightLikeTheCourses from '@/components/Courses/YouMightLikeTheCourses'
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import axios from 'axios'
import baseUrl from '@/utils/baseUrl'
import CoursesCurriculum from '@/components/Courses/CoursesCurriculum';
resetIdCounter()

const Details = ({ course, user }) => {
//   console.log(course)
  return (
        <React.Fragment>
            <PageBanner
                pageTitle={course.title}
                homePageUrl="/"
                homePageText="Home"
                innerPageUrl="/courses-1"
                innerPageText="Courses"
                activePageText={course.title}
            />

            <div className="courses-details-area pb-100">
                <div className="courses-details-image">
                    {/* <img src={course.coverPhoto} alt={course.title} /> */}
                    <br/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="courses-details-desc">
                                <Tabs>
                                    <TabList>
                                        <Tab>Overview</Tab>
                                        <Tab>Curriculum</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="courses-overview">
                                            <h3>Course Description</h3>
                                            <p dangerouslySetInnerHTML={
                                                 {__html:course.overview}
                                             }></p>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        {/* Coming Soon ... */}
                                        <CoursesCurriculum videos={course.videos} />
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <CoursesDetailsSidebar {...course} loggedInUser={user} />
                        </div>
                    </div>
                </div>
            </div>

            {/* <YouMightLikeTheCourses /> */}
        </React.Fragment>
  )
}

Details.getInitialProps = async (ctx) => {
  const { id } = ctx.query
  const url = `${baseUrl}/api/v1/courses/course/${id}`
  const response = await axios.get(url)
  // console.log(response)
  return response.data
}

export default Details
