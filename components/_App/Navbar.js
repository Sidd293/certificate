import React from "react";
import Link from "@/utils/ActiveLink";
import { handleLogout } from "@/utils/auth";
import SearchForm from "./SearchForm";

const Navbar = ({ user }) => {
  // console.log(user)
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    const elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  });

  const isAdmin = user && user.role === "admin";
  const isTeacher = user && user.role === "teacher";

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <React.Fragment>
      <div id="navbar" className="navbar-area">
        <div className="edemy-nav">
          <div className="container-fluid">
            <div className="navbar navbar-expand-lg navbar-light">
              <Link href="/">
                <a onClick={toggleNavbar} className="navbar-brand">
                  <img
                    src="/images/brainLox_white.jpeg"
                    style={{ width: "5vw" }}
                    alt="brainlox_logo"
                  />
                </a>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                {/* <SearchForm /> */}

                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="/" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Home
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item megamenu">
                    <Link href="/courses">
                      <a onClick={toggleNavbar} className="nav-link">
                        Courses
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/gift-a-course" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Gift a Course
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Contact Us
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/faq" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        FAQ
                      </a>
                    </Link>
                  </li>

                  {((user && isTeacher) || (user && isAdmin)) && (
                    <li className="nav-item">
                      <Link href="/teacher/dashboard">
                        <a className="nav-link">Teacher Dashboard</a>
                      </Link>
                    </li>
                  )}
                  {user && isAdmin && (
                    <li className="nav-item">
                      <Link href="/admin/dashboard">
                        <a className="nav-link">Dashboard</a>
                      </Link>
                    </li>
                  )}
                </ul>

                <div className="others-option d-flex align-items-center">
                  <a href="https://www.picktime.com/brainlox" target="_blank">
                    <a className="BookDemo-btn" id="BookDemo-btn">
                      <i className="flaticon-webinar"></i>Book a Free Demo
                      <span></span>
                    </a>
                  </a>
                </div>
                <div className="others-option d-flex align-items-center">
                  <a href="https://www.picktime.com/brainlox">
                    <a href="/authentication">
                      <a className="default-btn">
                        <i className="flaticon-user"></i>Login/Registration
                        <span></span>
                      </a>
                    </a>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
