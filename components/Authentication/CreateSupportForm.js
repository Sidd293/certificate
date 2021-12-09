import React from "react";
import { Alert, Spinner } from "reactstrap";
import Link from "next/link";
import axios from "axios";
import baseUrl from "@/utils/baseUrl";
import { parseCookies } from "nookies";
import { redirectUser } from "@/utils/auth";
import catchErrors from "../../utils/catchErrors";
import { useToasts } from "react-toast-notifications";
import { useRouter } from "next/router";

const generatePassword = () => {
  var length = 8,
    charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$*$^",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
};
const finalPassword = generatePassword();
const INITIAL_USER = {
  name: "",
  email: "",
  password: finalPassword,
  confirmPassword: finalPassword,
  role: "support",
};

const CreateSupportForm = ({ users }) => {
  const [user, setUser] = React.useState(INITIAL_USER);
  const [disabled, setDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const onDismiss = () => setError(false);
  const { addToast } = useToasts();
  const router = useRouter();
  // const { token } = parseCookies();

  console.log(users);
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
    // console.log(user);
    try {
      setLoading(true);
      setError("");
      const url = `${baseUrl}/api/v1/authSupport/supportSignup`;
      const payload = { ...user };
      const response = await axios.post(url, payload);
      // console.log(response);
      addToast("Congratulations,successfully added Support User", {
        appearance: "success",
      });
      setUser({ name: "", email: "" });
      // router.reload();
    } catch (error) {
      catchErrors(error, setError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-form">
      <h2>Add Support User</h2>
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
        <button type="submit" disabled={disabled}>
          Add
          {loading ? <Spinner color="success" /> : ""}
        </button>
      </form>
    </div>
  );
};

CreateSupportForm.getInitialProps = async (ctx) => {
  const { token } = parseCookies(ctx);
  if (!token) {
    redirectUser(ctx, "/");
  }
  // const { id } = ctx.query
  const payload = {
    headers: { Authorization: token },
  };
  const url = `${baseUrl}/api/v1/admin/users`;
  const response = await axios.get(url, payload);
  return response.data;
};

export default CreateSupportForm;
