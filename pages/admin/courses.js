import React from 'react'
import { parseCookies } from 'nookies'
import axios from 'axios'
import { useToasts } from 'react-toast-notifications'
import { useRouter } from 'next/router'
import baseUrl from '@/utils/baseUrl'
import catchErrors from '@/utils/catchErrors'
import PageBanner from '@/components/Common/PageBanner'
import Link from '@/utils/ActiveLink'

const adminCourses = ({ courses }) => {
  const { addToast } = useToasts()
  const router = useRouter()

  return (
        <React.Fragment>
            <PageBanner
                pageTitle="Admin Dashboard"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Admin Dashboard"
            />

            <div className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-4">
                            <div className="td-sidebar">
                                <ul>
                                    <li>
                                        <Link href="/admin/pending-requests" activeClassName="active">
                                            <a>Pending Requests</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/admin/courses" activeClassName="active">
                                            <a>All Courses</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" activeClassName="active">
                                            <a>Dumy Text</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-8 col-lg-8">

                            <div className="table-responsive">
                                <table className="table vertical-align-top">
                                    <thead>
                                        <tr>
                                            {/* <th scope="col">#</th> */}
                                            <th scope="col">Course Title</th>
                                            <th scope="col" className="text-right">Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {courses.length
                                          ? (
                                            <>
                                                {courses.map((request) => {
                                                  return (
                                                        <tr key={request.id}>
                                                            {/* <th scope="row">1</th> */}
                                                            <td>
                                                                {request.title}
                                                            </td>
                                                            <td className="text-right">
                                                                <button
                                                                    onClick={ e => {
                                                                      window.confirm('Are you sure?')
                                                                    }}
                                                                    className="btn btn-success mr-05"
                                                                >
                                                                    <Link href="/teacher/course/[id]" as={`/teacher/course/${request.id}`}>
                                                                         <a className="btn btn-success">
                                                                               <i className='bx bxs-edit'></i> Edit
                                                                         </a>
                                                                    </Link>
                                                                </button>
                                                            

                                                                <button
                                                                    onClick={ e => {
                                                                      window.confirm('Are you sure?')
                                                                    }}
                                                                    className="btn btn-danger"
                                                                > 
                                                                    Delete
                                                                </button>

                                                                
                                                            </td>
                                                        </tr>
                                                  )
                                                })}
                                            </>
                                            )
                                          : (
                                            <tr className="text-center">
                                                <td colSpan="3">No Courses</td>
                                            </tr>
                                            )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
  )
}


adminCourses.getInitialProps = async () => {
    const url = `${baseUrl}/api/v1/courses`
    const response = await axios.get(url)
    // console.log(response)
    return response.data
  }

export default adminCourses;