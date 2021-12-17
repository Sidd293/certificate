import React from "react";
import { Alert, Spinner } from "reactstrap";
import Link from "next/link";
import axios from "axios";
import catchErrors from "../../utils/catchErrors";
import baseUrl from "../../utils/baseUrl";
import { handleLogin, redirectUser } from "../../utils/auth";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { parseCookies } from "nookies";
import * as ga from "../../lib/gtag";
import { useToasts } from "react-toast-notifications";

const MySwal = withReactContent(Swal);

const INITIAL_USER = {
  email: "",
  password: "",
};

// const mailingModel = {
// 	email,
// 	subject: "Email Verification",
// 	html: `
// 		Dear ${name}!
// 		Thank you for registering at Brainlox, The World's Leading Distance-Learning Provider.
// 		This is ur Email verification link ${baseUrl}/api/v1/auth/confirm-email?confirmToken=${confirmToken}
// 	`
// }

const LoginForm = () => {
  const [user, setUser] = React.useState(INITIAL_USER);
  const [disabled, setDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const onDismiss = () => setError(false);
  const { token } = parseCookies();
  const { addToast } = useToasts();

  React.useEffect(() => {
    const isUser = Object.values(user).every((el) => Boolean(el));
    isUser ? setDisabled(false) : setDisabled(true);
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const reSendEmail = async (ctx) => {
    ctx.preventDefault();
    try {
      setLoading(true);
      setError("");
      const { token } = parseCookies(ctx);
      // if (!token) {
      //   // redirectUser(ctx, "/");
      // }
      // const { id } = ctx.query
      const url = `${baseUrl}/api/v1/admin/users/re-send-email`;
      const payload = { ...user };
      const response = await axios.post(url, payload);
      if (response.status === 200) {
        Swal.fire(
          "Email Send Successfully",
          "Check your email for verification link",
          "success"
        );
      }
    } catch (error) {
      catchErrors(error, setError);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    const url = `${baseUrl}/api/v1/auth/signin`;
    const payload = { ...user };
    const response = await axios.post(url, payload);
    console.log(response);
    if (response.status === 200) {
      handleLogin(response.data);
      setLoading(false);
      // dataLayer.push({'login': 'loggedin'});
      ga.event({
        action: "login",
        params: {
          loggedin: "user_loggedin",
        },
      });
    } else if (response.status === 203) {
      console.log(response);
      MySwal.fire({
        title: "Email not Verified",
        text: "Please verify your email to Login",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Resend Email",
        timer: 10000,
      }).then((result) => {
        if (result.isConfirmed) {
          reSendEmail(e);
        }
      });
      setLoading(false);
    } else {
      addToast(response.data, {
        appearance: "error",
      });
      setLoading(false);
    }

    // try {
    //   setLoading(true);
    //   setError("");
    //   const url = `${baseUrl}/api/v1/auth/signin`;
    //   const payload = { ...user };
    //   const response = await axios.post(url, payload);
    //   handleLogin(response.data);
    // // dataLayer.push({'login': 'loggedin'});
    // ga.event({
    // action: "login",
    // params : {
    //   loggedin: 'user_loggedin'
    // }
    // })
    // } catch (error) {
    //   if (error.response.status === 401) {
    //     MySwal.fire({
    //       title: "Email not Verified",
    //       text: "Please verify your email to Login",
    //       icon: "warning",
    //       showCancelButton: true,
    //       confirmButtonColor: "#3085d6",
    //       cancelButtonColor: "#d33",
    //       confirmButtonText: "Resend Email",
    //       timer: 10000,
    //     }).then((result) => {
    //       if (result.isConfirmed) {
    //         reSendEmail;
    //       }
    //     });
    //   } else {
    //     // console.log(e);
    //     catchErrors(error, setError);
    //   }
    // } finally {
    //   setLoading(false);
    // }
  };
  return (
    <div className="login-form">
      <h2>Login</h2>

      <Alert color="danger" isOpen={!!error} toggle={onDismiss}>
        {error}
      </Alert>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            className="form-control"
            placeholder="Email"
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            className="form-control"
            placeholder="Password"
            name="password"
            type="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-6 remember-me-wrap">
            <p>
              <input type="checkbox" id="test2" />
              <label htmlFor="test2">Remember me</label>
            </p>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap">
            <Link href="/forgotpassword">
              <a className="lost-your-password">Lost your password?</a>
            </Link>
          </div>
        </div>

        <button type="submit" disabled={disabled}>
          Log In
          {loading ? <Spinner color="success" /> : ""}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
