import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { blogData } from '../data/blogData';

function BlogPost() {
	const { url } = useParams();

	const post = blogData.find((post) => post.url === url);

	console.log(post);

	if (!post) {
		console.log(post);
		return <div>Blog post not found</div>;
	}

	return (
		<>
			<h2>{post.title}</h2>
			<p>{post.content}</p>
			<p>{post.author}</p>
		</>
	);
}

export { BlogPost };
