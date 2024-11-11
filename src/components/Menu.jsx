import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../auth/auth';

function Menu() {
	const auth = useAuth();
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/blog">Blog</Link>
					</li>
					<li>
						<Link to="/profile">Profile</Link>
					</li>
					{auth.isLoggedIn ? (
						<li>
							<Link to="/logout">Logout</Link>
						</li>
					) : (
						<li>
							<Link to="/login">Login</Link>
						</li>
					)}
				</ul>
			</nav>
			<Outlet />
		</>
	);
}

export { Menu };
