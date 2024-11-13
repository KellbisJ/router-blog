import React, { useContext, useState } from 'react';
import { useData } from '../data/blogData';
import { useAuth } from '../auth/auth';

const CreateBlogPost = () => {
	const { data, addData } = useData();
	const { user } = useAuth();

	const [post, setPost] = useState({
		title: '',
		slug: '',
		content: '',
		author: user.username,
	});
	// const [author, setAuthor] = useState('');
	// const [title, setTitle] = useState('');
	// const [content, setContent] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!post.title || !post.content) {
			alert('Please fill out all fields before submitting.');
		} else {
			addData(post);
			console.log(data);
		}
	};

	return (
		<header>
			<h1>Create a New Blog Post</h1>
			<p>Let's create a new post for your blog. Fill out the form below to get started.</p>

			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Title"
					value={post.title}
					onChange={(e) =>
						setPost({
							...post,
							title: e.target.value,
							slug: e.target.value.toLowerCase().replace(/ /g, '-'),
							id: data.length + 1,
						})
					}
				/>
				<textarea
					placeholder="Content"
					value={post.content}
					onChange={(e) =>
						setPost({
							...post,
							content: e.target.value,
						})
					}
				/>

				<button type="submit">Publish</button>
			</form>
		</header>
	);
};

export { CreateBlogPost };
