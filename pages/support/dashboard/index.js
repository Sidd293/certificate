import React from "react";
import Link from "@/utils/ActiveLink";
import PageBanner from "@/components/Common/PageBanner";

const index = () => {
  return (
    <React.Fragment>
      <PageBanner
        pageTitle="Support Dashboard"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Support Dashboard"
      />

      <div className="ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-4">
              <div className="td-sidebar">
                <ul>
                  <li>
                    <Link href="/support/allusers" activeClassName="active">
                      <a>All Users</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/support/brainlox-cash"
                      activeClassName="active"
                    >
                      <a>Brainlox Cash</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/support/courses" activeClassName="active">
                      <a>All Courses</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/support/createCourse" activeClassName="active">
                      <a>Create a Course</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/support/curriculum" activeClassName="active">
                      <a>Course Curriculum</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/support/appsettings" activeClassName="active">
                      <a>App Settings</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-8 col-lg-8">
              <div className="td-text-area">
                <h4>Support Dashboard</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default index;
