import React, { useState, useEffect } from 'react';
// import Navbar from '../components/_App/Navbar';
import PageBanner from '@/components/Common/PageBanner'
import catchErrors from "@/utils/catchErrors";
import baseUrl from "@/utils/baseUrl";
import axios from "axios";
import cookie from "js-cookie";
import { Spinner, Alert } from "reactstrap"; 
import { handlePasswordChange } from "@/utils/auth";

// import Footer from '../components/_App/Footer';

const INITIAL_USER = {
    name: "",
    location: "",
    about: ""
}

const EditProfile = ({ name, phone, about, location }) => {
    const [user, setUser] = useState(INITIAL_USER);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [response, setResponse] = useState("");
    const onDismiss = () => setError(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            setError("");
            const url = `${baseUrl}/api/v1/auth/account`;
            const payload = {...user};
            const headers = { authorization: `${cookie.get("token")}` }
            const response = await axios.put(url, payload, {headers});
            handlePasswordChange(response);
            setResponse(response.status);
        } catch (err) {
            catchErrors(err, setError);
        } finally {
            setLoading(false);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({...prevState, [name]: value}));
    }

    useEffect(() => {
        const isUser = Object.values(user).every(value => Boolean(value));
        isUser ? setDisabled(false) : setDisabled(true);
    }, [user]);

  return (
        <React.Fragment>
            {/* <Navbar /> */}
            <PageBanner
                pageTitle="Edit Profile"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Edit Profile"
            />

            <div className="ptb-100">
                <div className="container">
                    <Alert color="danger" isOpen={!!error} toggle={onDismiss}>
                        {error}
                    </Alert>
                    <div className="border-box">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" name="name" value={user.name} placeholder="Name" onChange={handleChange} className="form-control" id="email" />
                            </div>

                            <div className="form-group">
                                <label>Location</label>
                                <input type="text" name="location" value={user.location} placeholder="Location" onChange={handleChange} className="form-control" id="email" />
                            </div>

                            <div className="form-group">
                                <label>Something About You</label>
                                <textarea type="text" name="about" value={user.about} placeholder="Something about you" onChange={handleChange} className="form-control" id="email" />
                            </div>

                            <button type="submit" disabled={disabled} className="default-btn mt-10">
                                <i className='flaticon-right-chevron'></i> Update
                                <span>{ loading ? <Spinner color='success' /> : "" }</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </React.Fragment>
  )
}

EditProfile.getInitialProps = async () => {
    const url = `${baseUrl}/api/v1/auth/account`;
    const headers = { authorization: `${cookie.get('token')}` };
    const response = await axios.get(url, { headers });

    INITIAL_USER.name = response.data.name;
    INITIAL_USER.location = response.data.location;
    INITIAL_USER.about = response.data.about;

    return response.data;
}

export default EditProfile
