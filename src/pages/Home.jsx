import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Pages.css';

function Home() {
	return (
		<div className="homePageContainer">
			<h1>Welcome to the Home Page!</h1>
			<h4>This is a simple BlogPost page React application.</h4>
			<p>
				Let's watch some <Link to="/blog">Blogs.</Link>
			</p>
		</div>
	);
}

export { Home };
