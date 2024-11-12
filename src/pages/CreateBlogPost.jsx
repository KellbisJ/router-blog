import React, { useContext, useState } from 'react';
import { useData } from '../data/blogData';

const CreateBlogPost = () => {
	const { data, addData } = useData();
	const [author, setAuthor] = useState('');
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		addData({ author, title, content, id: data.length + 1, slug: title.toLowerCase().replace(/\s/g, '-') });

		console.log({ author, title, content });
	};

	return (
		<header>
			<h1>Create a New Blog Post</h1>
			<p>Let's create a new post for your blog. Fill out the form below to get started.</p>

			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
				<input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
				<textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />

				<button type="submit">Publish</button>
			</form>
		</header>
	);
};

export { CreateBlogPost };
