import React from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useData } from '../data/blogData';
import { useAuth } from '../auth/auth';

function BlogPost() {
	const navigate = useNavigate();
	const { slug } = useParams();
	const { data } = useData();

	const auth = useAuth();

	const post = data.find((post) => post.slug === slug);

	if (!post) {
		console.log(post);
		return <div>Blog post not found</div>;
	}

	const adminUser = post.author && (auth.user?.role === 'admin' || post.author === auth.user?.username);
	const editorUser = post.author && auth.user?.role === 'editor';

	const returnToBlog = () => {
		navigate('/blog');
	};

	const [editing, setEditing] = useState(false);
	const [clear, setClear] = useState(false);
	const [title, setTitle] = useState(post.title);
	const [content, setContent] = useState(post.content);

	const [author, setAuthor] = useState(post.author);

	const saveChanges = () => {
		// Logic to save changes to the post
		if (title === '' || content === '' || author === '') {
			window.alert('Fields cannot be empty.');
		} else {
			post.title = title;
			post.content = content;
			post.author = author;
			setEditing(false);
		}
	};
	const deletePost = () => {
		const index = data.findIndex((post) => post.slug === slug);
		if (index !== -1) {
			data.splice(index, 1);
			setClear(true);
			navigate('/blog');
		}
	};

	return (
		<div>
			{editing ? (
				<>
					<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
					<textarea value={content} onChange={(e) => setContent(e.target.value)} />
					<input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
					<button onClick={saveChanges}>Save</button>
				</>
			) : (
				<>
					<h2>{title}</h2>
					<p>{content}</p>
					<p>Author: {author}</p>
				</>
			)}

			<button onClick={returnToBlog}>Return To Blog</button>

			{adminUser && (
				<>
					<button onClick={deletePost}>Delete</button>
					<button onClick={() => setEditing(true)}>Edit</button>
				</>
			)}
			{editorUser && !adminUser && <button onClick={() => setEditing(true)}>Edit</button>}
		</div>
	);
}

export { BlogPost };
