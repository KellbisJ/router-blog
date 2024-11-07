import React from 'react';
import { useAuth } from '../auth/auth';

function Login() {
	const auth = useAuth();
	const [username, setUsername] = React.useState('');

	const login = (e) => {
		e.preventDefault();
		username === '' ? window.alert('Username is required.') : auth.login(username);
		// if (username === '') {
		// 	window.alert('Username is required.');
		// } else {
		// 	auth.login(username);
		// }
	};

	return (
		<>
			<h1>Login</h1>
			<form onSubmit={login}>
				<label>Username</label>
				<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

				<button type="submit">Sign up</button>
			</form>
		</>
	);
}

export { Login };
