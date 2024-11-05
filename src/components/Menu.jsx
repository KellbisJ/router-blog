import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
	return (
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
			</ul>
		</nav>
	);
}

export { Menu };
