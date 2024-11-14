import React from 'react';
import { useAuth } from '../auth/auth';

function Profile() {
	const { user } = useAuth();

	return (
		<div className="profilePageContainer">
			<div className="profilePicture">
				<img src="https://cdn2.iconfinder.com/data/icons/random-outline-3/48/random_14-512.png" alt="Profile Picture" />
			</div>

			<p>Welcome, {user.username}!</p>
		</div>
	);
}

export { Profile };
