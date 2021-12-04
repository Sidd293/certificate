import React from 'react'
import Link from 'next/link'
import CourseCard from '@/components/Courses/CourseCard'

const TopCourses = ({ courses }) => {
  return (
        <div className="courses-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">GO AT YOUR OWN PACE</span>
                    <h2>Top Selling Courses</h2>
                    <p>Explore all of our courses and pick your suitable ones to enroll and start learning with us! We ensure that you will never regret it!</p>
                </div>

                <div className="row">

                    {courses
                      ? courses.map(course => (
                        <div className="col-lg-4 col-md-6" key={course.id}>
                            <div className="single-courses-box">
                                <div className="courses-image">
                                    <Link href="/courses/[id]" as={`/courses/${course.id}`}>
                                        <a className="d-block image">
                                            <img src={course.profilePhoto} alt={course.title} />
                                        </a>
                                    </Link>

                                    <div className="price shadow">${course.price}</div>
                                </div>

                                <div className="courses-content">
                                    <h3 title={course.title}>
                                        <Link href="/courses/[id]" as={`/courses/${course.id}`}>
                                            <a>{course.title.slice(0, 20)}...</a>
                                        </Link>
                                    </h3>

                                    <p dangerouslySetInnerHTML={{__html:course.overview.slice(0, 100)}}></p>

                                    <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                        <li>
                                            <i className='flaticon-agenda'></i> {parseInt(course.lessons)} Lessons
                                        </li>
                                        <li>
                                            <i className='flaticon-web'></i> ${course.price / parseInt(course.lessons)} per session
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                      ))
                      : (
                        <h2>Empty</h2>
                        )}

                    <div className="col-lg-12 col-md-12">
                        <div className="courses-info">
                            <p>Enjoy the top notch learning methods and achieve next level skills! You are the creator of your own career &amp; we will guide you through that. <a href="https://www.picktime.com/brainlox" target="_blank">Book a Free Demo now</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default TopCourses
