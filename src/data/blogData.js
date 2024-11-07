import React from 'react';

const blogData = [];

const blogReact = {
	title: 'What is React?',
	url: 'what-is-react',
	content: 'React is a JavaScript library for building user interfaces.',
	author: 'John Doe',
	id: 1,
};

const blogVue = {
	title: 'What is Vue?',
	url: 'what-is-vue',
	content: 'Vue is a JavaScript framework for building user interfaces. It is known for its simplicity and flexibility.',
	author: 'Jane Smith',
	id: 2,
};

const blogAngular = {
	title: 'What is Angular?',
	url: 'what-is-angular',
	content:
		'Angular is a JavaScript framework for building scalable web applications. It is maintained by Google and is known for its robust features and tools.',
	author: 'Mike Johnson',
	id: 3,
};

blogData.push(blogReact, blogVue, blogAngular);

export { blogData };
