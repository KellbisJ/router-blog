import React from 'react';
import { useAuth } from '../auth/auth';
import { useNavigate } from 'react-router-dom';

function Profile() {
	const navigate = useNavigate();
	const { user } = useAuth();

	return (
		<>
			<h1>Profile Page</h1>
			<p>Welcome, {user.username}!</p>
		</>
	);
}

export { Profile };
