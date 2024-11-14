import React from 'react';
import { useAuth } from '../auth/auth';
import { Navigate } from 'react-router-dom';
import { usersList } from '../auth/auth';

function Login() {
	const auth = useAuth();

	// const userRol = Object.values(usersList[user]);

	const [selectedUser, setSelectedUser] = React.useState('');

	const login = (e) => {
		e.preventDefault();
		selectedUser === '' ? window.alert('Please select a user.') : auth.login(selectedUser);
	};

	return (
		<>
			{!auth.isLoggedIn ? (
				<div className="container loginContainer">
					<h1>Login</h1>
					<form className="container loginForm" onSubmit={login}>
						<label>Select a user</label>
						<select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
							<option value="">--Select--</option>
							{Object.keys(usersList).map((user) => (
								<option key={user} value={user}>
									{`${user} (${Object.values(usersList[user]).join('')})`}
								</option>
							))}
						</select>
						<button className="initialBtn loginBtn" type="submit">
							Sign in
						</button>
					</form>
				</div>
			) : (
				<>
					<Navigate to="/"></Navigate>
				</>
			)}
		</>
	);
}

export { Login };
