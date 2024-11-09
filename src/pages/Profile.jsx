import React from 'react';
import { useAuth } from '../auth/auth';

function Profile() {
	const { user } = useAuth();

	return (
		<>
			<h1>Profile Page</h1>
			<p>Welcome, {user.username}!</p>
		</>
	);
}

export { Profile };
