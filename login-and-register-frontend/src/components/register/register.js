/** @format */

import React, { useState } from 'react';
import './register.css';
import axios from 'axios';
import { NavLink, useHistory } from 'react-router-dom';

const Register = () => {
	const history = useHistory();

	const [user, setUser] = useState({
		name: '',
		number: '',
		dob: '',
	});

	const handleChange = (e) => {
		const { name,dob,number, value } = e.target;
		setUser({
			...user,
			[name]: value,
			[number]: value,
			[dob]: value,
		});
	};

	const register = () => {
		const { name, number, dob } = user;
		if (name && number && dob) {
			axios.post('http://localhost:3000/register', user).then((res) => {
				alert(res.data.message);
				history.push('/login');
			});
		} else {
			alert('invlid input');
		}
	};

	return (
		<div>
			<div className='header'></div>

			<div className='register'>
				{console.log('User', user)}
				<h1>Register</h1>
				<input
					type='text'
					name='name'
					value={user.name}
					placeholder='Your Name'
					onChange={handleChange}></input>
				<input
					type='number'
					name='number'
					value={user.number}
					
					placeholder='Your Phone Number'
					onChange={handleChange}></input>
				<input
					type='date'
					name='Date of Birth'
					value={user.dob}
					placeholder='Your Date of Birth'
					onChange={handleChange}></input>

				<div
					className='button'
					onClick={register}>
					Register{' '}
				</div>
				<div className='banner'>We Welcome to our family</div>
				<div>or</div>
				<div
					className='button'
					onClick={() => history.push('/login')}>
					Leave
				</div>
				<div className='redirect'>
					<button>
						<NavLink to='/Homepage'></NavLink>
						HomePage
					</button>
				</div>
			</div>
		</div>
	);
};

export default Register;
