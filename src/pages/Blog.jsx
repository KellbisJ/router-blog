import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useData } from '../data/blogData';
import { useAuth } from '../auth/auth';
import '../styles/Pages.css';

function Blog() {
	const auth = useAuth();
	const navigate = useNavigate();
	const { data } = useData();
	// console.log(data);

	const handleCreatePost = () => navigate('/blog/new');

	return (
		<div className="blogPageContainer">
			<h1>Blog Zone</h1>
			<button className="initialBtn createPostBtn" onClick={handleCreatePost}>
				Create New Post
			</button>

			<Outlet />
			<ul className="container blogPreviewContainer">
				{data.map((post) => (
					<BlogPreview key={post.id} post={post} />
				))}
			</ul>
		</div>
	);
}

function BlogPreview({ post }) {
	const navigate = useNavigate();

	const handleBlogPreviewClick = () => {
		if (post.slug) {
			navigate(`/blog/${post.slug}`);
		} else {
			console.error('Slug is missing from the post object:', post);
		}
	};

	return (
		<li className="blogPreviewElements" onClick={handleBlogPreviewClick}>
			<Link to={`/blog/${post.slug || ''}`}>{post.title}</Link>
		</li>
	);
}

export { Blog };
