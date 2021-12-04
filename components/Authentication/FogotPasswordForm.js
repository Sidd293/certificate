import React from 'react';
import { Alert, Spinner } from 'reactstrap';
import axios from 'axios';
import catchErrors from '../../utils/catchErrors';
import baseUrl from '../../utils/baseUrl';
import { handleLogin } from '../../utils/auth';
import swal from 'sweetalert';
import Swal from 'sweetalert2';

const INITIAL_USER = {
	email: '',
};

const ForgotPasswordForm = () => {
	const [user, setUser] = React.useState(INITIAL_USER);
	const [disabled, setDisabled] = React.useState(false);
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState('');
	const onDismiss = () => setError(false);

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
		try {
			setLoading(true);
			setError('');
			const url = `${baseUrl}/api/v1/auth/forgot-password`;
			const payload = { ...user };
            console.log(payload);
			const response = await axios.post(url, payload);
			swal("Info!", "New Password Has been Sent to Your Registered Mail-Id!", "success");
			handleLogin(response.data);
		} catch (error) {
			catchErrors(error, setError);
		} finally {
			setLoading(false);
		}
	};
	return (
		<div className='login-form'>
			<h2>Forget Your Password?</h2>

			<Alert color='danger' isOpen={!!error} toggle={onDismiss}>
				{error}
			</Alert>

			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label>Email</label>
					<input
						className='form-control'
						placeholder='Enter Your Registered Email-Id'
						name='email'
						type='email'
						value={user.password}
						onChange={handleChange}
					/>
				</div>

				<button type='submit' disabled={disabled}>
					Send Email
					{loading ? <Spinner color='success' /> : ''}
				</button>
			</form>
		</div>
	);
};

export default ForgotPasswordForm;
