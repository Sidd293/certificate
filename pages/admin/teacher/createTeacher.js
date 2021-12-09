import React from "react";
import Link from "@/utils/ActiveLink";
import PageBanner from "@/components/Common/PageBanner";
import CreateTeacherForm from "@/components/Authentication/CreateTeacherForm";

const index = () => {
  return (
    <React.Fragment>
      <PageBanner
        pageTitle="Create Teacher"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Create Teacher"
      />

      <div className="ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-4">
              <div className="td-sidebar">
                <ul>
                  <li>
                    <Link href="/admin/teacher/createTeacher" activeClassName="active">
                      <a>Create Teacher</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/dashboard" activeClassName="active">
                      <a>Back to Dashboard</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-8 col-lg-7">
              <CreateTeacherForm/>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default index;