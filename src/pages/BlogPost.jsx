import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { blogData } from '../data/blogData';

function BlogPost() {
	const navigate = useNavigate();
	const { url } = useParams();

	const post = blogData.find((post) => post.url === url);

	// console.log(post);

	if (!post) {
		console.log(post);
		return <div>Blog post not found</div>;
	}

	const returnToBlog = () => {
		navigate('/blog');
	};

	return (
		<>
			<h2>{post.title}</h2>
			<button onClick={returnToBlog}>Return To Blog</button>
			<p>{post.content}</p>
			<p>{post.author}</p>
		</>
	);
}

export { BlogPost };
