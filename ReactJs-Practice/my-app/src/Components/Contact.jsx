import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Contact = () => {
	const [ inpval, setInterval ] = useState({
		name: '',
		email: '',
		date: '',
		password: ''
	});

	const [ data, setData ] = useState([]);
	console.log(inpval);

	const getdata = (e) => {
		// console.log(e.target.value);

		const { value, name } = e.target;
		// console.log(value,name);

		setInterval(() => {
			return {
				...inpval,
				[name]: value
			};
		});
	};

	const addData = (e) => {
		e.preventDefault();

		const { name, email, date, password } = inpval;

		if (name === '') {
			alert('name field is requred');
		} else if (email === '') {
			alert('email field is requred');
		} else if (!email.includes('@')) {
			alert('plz enter the valid email');
		} else if (date === '') {
			alert('date field is requred');
		} else if (password === '') {
			alert('password field is requred');
		} else if (password.length < 5) {
			alert('password length greater five');
		} else {
			console.log('data added successfully');

			localStorage.setItem('users', JSON.stringify(...data, inpval));
		}
	};

	return (
		<div className="form">
			<div className="contact">
				<Link to="/" style={{ color: 'red', textDecoration: 'none' }}>
					<h1>Home</h1>
				</Link>
				<Link to="/about" style={{ color: 'red', textDecoration: 'none' }}>
					<h1>About</h1>
				</Link>
			</div>
			<div className="login">
				<div className="input">
					<h2>Sign Up</h2>
					<form>
						<input
							className="w-100"
							type="text"
							name="name"
							onChange={getdata}
							placeholder="Enter Your Name"
						/>
						<br />
						<input
							className="w-100 mt-3"
							type="email"
							name="email"
							onChange={getdata}
							placeholder="Enter Your Email"
						/>
						<br />
						<input className="w-100 mt-3" type="date" name="date" onChange={getdata} />
						<br />
						<input
							className="w-100 mt-3"
							type="password"
							name="password"
							onChange={getdata}
							placeholder="Enter Your password"
						/>
						<br />
						<button className="w-100 mt-3" onClick={addData}>
							Submit
						</button>
					</form>
					<p>
						Already Have an Account{' '}
						<span>
							<NavLink to="/login">SignIn</NavLink>
						</span>
					</p>
				</div>
				<div className="img">
					<img src="img.png" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Contact;
