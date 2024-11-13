import React from 'react';
import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const dataContext = createContext();

const initialData = [
	{
		title: 'What is React?',
		slug: 'what-is-react',
		content: 'React is a JavaScript library for building user interfaces.',
		author: 'John Doe',
		id: 1,
	},
	{
		title: 'What is Vue?',
		slug: 'what-is-vue',
		content: 'Vue is a JavaScript framework for building user interfaces. It is known for its simplicity and flexibility.',
		author: 'Jane Smith',
		id: 2,
	},
	{
		title: 'What is Angular?',
		slug: 'what-is-angular',
		content:
			'Angular is a JavaScript framework for building scalable web applications. It is maintained by Google and is known for its robust features and tools.',
		author: 'Mike Johnson',
		id: 3,
	},
	{
		title: 'What is Next.js?',
		slug: 'what-is-nextjs',
		content:
			'Next.js is a React framework that enables server-side rendering and generates static websites for React based web applications. It is known for its performance and SEO benefits.',
		author: 'Emily Davis',
		id: 4,
	},
];

function BlogProvider({ children }) {
	const [data, setData] = useState(() => {
		const savedData = localStorage.getItem('blogData');
		return savedData ? JSON.parse(savedData) : initialData;
	});
	const [isSaved, setIsSaved] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		localStorage.setItem('blogData', JSON.stringify(data));
		if (isSaved) {
			navigate('/blog');
			setIsSaved(false);
		}
	}, [data, isSaved, navigate]);

	const addData = (post) => {
		setData((prevData) => [...prevData, post]);
		setIsSaved(true);
	};

	return <dataContext.Provider value={{ data, addData }}>{children}</dataContext.Provider>;
}

function useData() {
	const context = React.useContext(dataContext);
	if (!context) {
		throw new Error('useData must be used within a BlogProvider');
	}
	console.log(context);

	return context;
}

export { BlogProvider, useData };