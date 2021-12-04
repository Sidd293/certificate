import React, { useState, useEffect } from 'react'
// import Navbar from '../components/_App/Navbar';
import { Spinner, Alert } from 'reactstrap';
import PageBanner from '@/components/Common/PageBanner'
import cookie from "js-cookie";
import axios from "axios";
import catchErrors from '@/utils/catchErrors';
import { handleLogin, handlePasswordChange } from '@/utils/auth';
import baseUrl from "@/utils/baseUrl";
// import Footer from '../components/_App/Footer';

const INITIAL_USER = {
    currentPassword: "",
    newPassword: "",
    newConfirmPassword: ""
};

const EditPassword = () => {
    const [user, setUser] = useState(INITIAL_USER);
    const [disabled, setDisabled] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const onDismiss = () => setError(false);

    useEffect(() => {
        const isUser = Object.values(user).every(value => Boolean(value));
        isUser ? setDisabled(false) : setDisabled(true);
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({...prevState, [name]: value}));
    };

    const headers = { authorization: `${cookie.get("token")}` }

    const handleSubmit = async (e) => {
		e.preventDefault();
        try {
            setLoading(true);
            setError("");
            const url = `${baseUrl}/api/v1/auth/account`;
            const payload = {...user};
            const response = await axios.post(url, payload, {headers});
            handlePasswordChange();
        } catch (err) {
            catchErrors(err, setError);
        } finally {
            setLoading(false);
        }
    };

  return (
        <React.Fragment>
            {/* <Navbar /> */}
            <PageBanner
                pageTitle="Edit Password"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Edit Password"
            />

            <div className="ptb-100">
                <div className="container">
                    {/* <Alert color="danger" isOpen={!!error} toggle={onDismiss}>
                        {error}
                    </Alert> */}
                    <div className="border-box">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Current-Password</label>
                                <input name="currentPassword" onChange={handleChange} type="password" value={user.currentPassword} className="form-control" id="currentPassword" />
                            </div>

                            <div className="form-group">
                                <label>New-Password</label>
                                <input name="newPassword" onChange={handleChange} type="password" value={user.newPassword} className="form-control" id="newPassword" />
                            </div>

                            <div className="form-group">
                                <label>Confirm-New-Password</label>
                                <input name="newConfirmPassword" onChange={handleChange} type="password" value={user.newConfirmPassword} className="form-control" id="newConfirmPassword" />
                            </div>

                            <button type="submit" disabled={disabled} className="default-btn mt-10">
                                <i className='flaticon-right-chevron'></i> Update
                                {/* { loading ? <Spinner color="success" /> : "" } */}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </React.Fragment>
  )
}

export default EditPassword
