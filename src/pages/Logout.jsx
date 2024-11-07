import React from 'react';
import { useAuth } from '../auth/auth';

function Logout() {
	const auth = useAuth();
	const logout = (e) => {
		e.preventDefault();
		auth.logout();
	};

	return (
		<>
			<h1>Logout</h1>
			<form onSubmit={logout}>
				<label>Are you leaving?</label>

				<button type="submit">Go out</button>
			</form>
		</>
	);
}

export { Logout };
