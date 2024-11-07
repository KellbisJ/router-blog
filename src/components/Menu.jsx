import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function Menu() {
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
					<li>
						<Link to="/Login">Login</Link>
					</li>
					<li>
						<Link to="/Logout">Logout</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
}

export { Menu };
