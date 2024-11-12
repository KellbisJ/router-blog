import React from 'react';
import { createContext, useState } from 'react';
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
];

function BlogProvider({ children }) {
	const [data, setData] = useState(initialData);
	const navigate = useNavigate();

	const addData = (newData) => {
		setData([...data, newData]);
		navigate('/blog');
	};
	const blogData = { data, addData };

	return <dataContext.Provider value={blogData}>{children}</dataContext.Provider>;
}

function useData() {
	const data = React.useContext(dataContext);
	return { ...data };
}

export { BlogProvider, useData };
