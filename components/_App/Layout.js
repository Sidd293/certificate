import React from "react";
import Head from "next/head";
import { ToastProvider } from "react-toast-notifications";
import { Toaster } from "react-hot-toast";
import Router from "next/router";
import GoTop from "./GoTop";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StudentNavbar from "./StudentNavbar";
import AdminNavbar from "./AdminNavbar";
import Preloader from "./Preloader";
import SupportNavbar from "./SupportNavbar";

const Layout = ({ children, user }) => {
  const [loader, setLoader] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  Router.events.on("routeChangeStart", () => {
    setLoader(true);
  });
  Router.events.on("routeChangeComplete", () => {
    setLoader(false);
  });
  Router.events.on("routeChangeError", () => {
    setLoader(false);
  });

  const isStudent = user && user.role === "student";
  const isAdmin = user && user.role === "admin";
  const isTeacher = user && user.role === "teacher";
  const isSupport = user && user.role === "support";

  return (
    <React.Fragment>
      <Head>
        <title>Brainlox - Your one stop education destination!</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Brainlox - Your one stop education destination!"
        />
        <meta
          name="og:title"
          property="og:title"
          content="Brainlox - Your one stop education destination!"
        ></meta>
        <meta
          name="twitter:card"
          content="Brainlox - Your one stop education destination!"
        ></meta>
      </Head>

      {loader && <Preloader />}

      <Toaster position="top-left" reverseOrder={false} />

      <ToastProvider
        placement="bottom-left"
        autoDismissTimeout={10000}
        autoDismiss
      >
        {isStudent ? (
          <StudentNavbar user={user} />
        ) : isAdmin || isTeacher ? (
          <AdminNavbar user={user} />
        ) : isSupport ? (
          <SupportNavbar user={user} />
        ) : (
          <Navbar user={user} />
        )}

        {children}

        <GoTop scrollStepInPx="100" delayInMs="10.50" />

        <Footer />
      </ToastProvider>
    </React.Fragment>
  );
};

export default Layout;
