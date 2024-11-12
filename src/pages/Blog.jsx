import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useData } from '../data/blogData';
import { useAuth } from '../auth/auth';

function Blog() {
	const auth = useAuth();
	const navigate = useNavigate();
	const { data } = useData();

	const handleCreatePost = () => navigate('/blog/new');

	return (
		<>
			<h1>Blog Zone</h1>

			<Outlet />

			<ul>
				{data.map((post) => (
					<BlogPreview key={post.id} post={post} />
				))}
			</ul>
			{auth.isLoggedIn && <button onClick={handleCreatePost}>Create New Post</button>}
		</>
	);
}

function BlogPreview({ post }) {
	return (
		<li>
			<Link to={`/blog/${post.slug}`}>{post.title}</Link>
		</li>
	);
}

export { Blog };
