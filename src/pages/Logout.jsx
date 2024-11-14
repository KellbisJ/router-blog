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
				<div className="container logoutContainer">
					<h1>Logout</h1>
					<form className="logoutForm" onSubmit={logout}>
						<label>Are you leaving?</label>

						<button className="initialBtn logoutBtn" type="submit">
							Go out
						</button>
					</form>
				</div>
			) : (
				<Navigate to="/login" />
			)}
		</>
	);
}

export { Logout };
