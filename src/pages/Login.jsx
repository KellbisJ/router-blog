import React from 'react';
import { useAuth } from '../auth/auth';
import { Navigate } from 'react-router-dom';

function Login() {
	const auth = useAuth();

	const [username, setUsername] = React.useState('');

	const login = (e) => {
		e.preventDefault();
		username === '' ? window.alert('Username is required.') : auth.login(username);
	};

	return (
		<>
			{!auth.isLoggedIn ? (
				<>
					<h1>Login</h1>
					<form onSubmit={login}>
						<label>Username</label>
						<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

						<button type="submit">Sign up</button>
					</form>
				</>
			) : (
				<>
					<Navigate to="/"></Navigate>
				</>
			)}
		</>
	);
}

export { Login };
