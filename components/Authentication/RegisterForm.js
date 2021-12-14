import React from "react";
import { Alert, Spinner } from "reactstrap";
import Link from "next/link";
import axios from "axios";
import catchErrors from "../../utils/catchErrors";
import baseUrl from "../../utils/baseUrl";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useToasts } from "react-toast-notifications";
import { parseCookies } from "nookies";
import { redirectUser } from "../../utils/auth";

const MySwal = withReactContent(Swal);

const INITIAL_USER = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegisterForm = () => {
  const [user, setUser] = React.useState(INITIAL_USER);
  const [disabled, setDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const onDismiss = () => setError(false);
  const { addToast } = useToasts();

  React.useEffect(() => {
    const isUser = Object.values(user).every((el) => Boolean(el));
    isUser ? setDisabled(false) : setDisabled(true);
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user)
    try {
      setLoading(true);
      setError("");
      const url = `${baseUrl}/api/v1/auth/signup`;
      const payload = { ...user };
      const response = await axios.post(url, payload);
      // console.log(response.data)
      addToast("Email Send Successfully", {
        appearance: "success",
        autoDismissTimeout: 2500,
      });
      MySwal.fire({
        // position: 'center',
        icon: "success",
        title: "Registration Successful",
        text: "Check your Email for Verification",
        showConfirmButton: false,
        timer: 2500,
      });

      setUser(INITIAL_USER);
    } catch (error) {
      catchErrors(error, setError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-form">
      <h2>Register</h2>
      <Alert color="danger" isOpen={!!error} toggle={onDismiss}>
        {error}
      </Alert>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>

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
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <p className="description">
          The password should be at least eight characters long. To make it
          stronger, use upper and lower case letters, numbers, and symbols like
          ! " ? $ % ^ & )
        </p>

        <button type="submit" disabled={disabled}>
          Register
          {loading ? <Spinner color="success" /> : ""}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
