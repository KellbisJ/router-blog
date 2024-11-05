import React from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';

function Blog() {
	return (
		<>
			<h1>Blog Zone</h1>
			<ul>
				{blogData.map((post) => (
					<BlogPreview key={post.id} post={post} />
				))}
			</ul>
		</>
	);
}

function BlogPreview({ post }) {
	return (
		<li>
			<Link to={`/blog/${post.url}`}>{post.title}</Link>
		</li>
	);
}

export { Blog };
