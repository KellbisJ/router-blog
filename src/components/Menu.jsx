import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../auth/auth';
import '../styles/Menu.css';

function Menu() {
	const auth = useAuth();
	return (
		<>
			<nav className="navBar">
				<ul className="navList">
					<li className="navItem">
						<Link className="navLink" to="/">
							Home
						</Link>
					</li>
					<li className="navItem">
						<Link className="navLink" to="/blog">
							Blog
						</Link>
					</li>
					<li className="navItem">
						<Link className="navLink" to="/profile">
							Profile
						</Link>
					</li>
					{auth.isLoggedIn ? (
						<li className="navItem">
							<Link className="navLink" to="/logout">
								Logout
							</Link>
						</li>
					) : (
						<li className="navItem">
							<Link className="navLink" to="/login">
								Login
							</Link>
						</li>
					)}
				</ul>
			</nav>
			<Outlet />
		</>
	);
}

export { Menu };
