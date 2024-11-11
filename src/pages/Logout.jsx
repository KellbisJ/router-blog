import React from 'react';
import { useAuth } from '../auth/auth';
import { Navigate } from 'react-router-dom';

function Logout() {
	const auth = useAuth();
	const logout = (e) => {
		e.preventDefault();
		auth.logout();
	};

	return (
		<>
			{auth.isLoggedIn ? (
				<>
					<h1>Logout</h1>
					<form onSubmit={logout}>
						<label>Are you leaving?</label>

						<button type="submit">Go out</button>
					</form>
				</>
			) : (
				<Navigate to="/login" />
			)}
		</>
	);
}

export { Logout };
