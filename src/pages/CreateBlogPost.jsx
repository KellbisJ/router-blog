import React, { useContext, useState } from 'react';
import { useData } from '../data/blogData';
import { useAuth } from '../auth/auth';
import { generateUniqueId } from '../data/idCreatorVerificator';
import { useNavigate } from 'react-router-dom';

const CreateBlogPost = () => {
	const { data, addData } = useData();
	const { user } = useAuth();
	const navigate = useNavigate();

	const returnToBlog = () => {
		navigate('/blog');
	};

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
			const existingIds = data.map((item) => item.id);
			const uniqueId = generateUniqueId(existingIds);

			const newPost = { ...post, id: uniqueId };

			addData(newPost);
			console.log(data);
		}
	};

	return (
		<div className="container createBlogPostContainer">
			<div className="returnToBlogContainer">
				<button className="initialBtn returnBlogBtn" onClick={returnToBlog}>
					X
				</button>
			</div>
			<h1>Create a New Blog Post</h1>
			<p>Let's create a new post for your blog. Fill out the form below to get started.</p>

			<form className="createBlogPostForm" onSubmit={handleSubmit}>
				<input
					className="createBlogPostTitleInput"
					type="text"
					placeholder="Title"
					value={post.title}
					onChange={(e) =>
						setPost({
							...post,
							title: e.target.value,
							slug: e.target.value.toLowerCase().replace(/ /g, '-'),
							// id: data.length + 1,
						})
					}
				/>
				<textarea
					className="createBlogPostContentTexarea"
					placeholder="Content"
					value={post.content}
					onChange={(e) =>
						setPost({
							...post,
							content: e.target.value,
						})
					}
				/>

				<button className="initialBtn publishPostBtn" type="submit">
					Publish
				</button>
			</form>
		</div>
	);
};

export { CreateBlogPost };
