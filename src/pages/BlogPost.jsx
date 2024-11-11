import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { blogData } from '../data/blogData';
import { useAuth } from '../auth/auth';

function BlogPost() {
	const navigate = useNavigate();
	const { slug } = useParams();

	const auth = useAuth();

	const post = blogData.find((post) => post.slug === slug);

	if (!post) {
		console.log(post);
		return <div>Blog post not found</div>;
	}

	const adminPowers = post.author && (auth.user?.isAdmin || post.author === auth.user?.username);
	const editorUser = post.author && auth.user?.isEditor;

	const returnToBlog = () => {
		navigate('/blog');
	};

	return (
		<>
			<h2>{post.title}</h2>
			<button onClick={returnToBlog}>Return To Blog</button>
			<p>{post.content}</p>
			<p>{post.author}</p>

			{adminPowers && (
				<>
					<button>Delete</button>
					<button>Edit</button>
				</>
			)}
			{editorUser && (
				<>
					<button>Edit</button>
				</>
			)}
		</>
	);
}

export { BlogPost };
