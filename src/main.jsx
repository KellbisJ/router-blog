import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Menu } from './components/Menu';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Profile } from './pages/Profile';
import { NotFound } from './pages/NotFound';

const router = createHashRouter([
	{
		path: '/',
		element: (
			<>
				<Menu />
				<Home />
			</>
		),
	},
	{
		path: '/blog',
		element: (
			<>
				<Menu />
				<Blog />
			</>
		),
	},
	{
		path: '/blog/:url',
		element: (
			<>
				<Menu />
				<BlogPost />
			</>
		),
	},
	{
		path: '/profile',
		element: (
			<>
				<Menu />
				<Profile />
			</>
		),
	},

	{
		path: '*',
		element: (
			<>
				<Menu />
				<NotFound />
			</>
		),
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);

// In short, what did I do? Because I forget start git and commits changes and what I learned.
// 1. I created a new project with vite and react using `npm create vite@latest react-router --template react`.
// 2. I installed react-router-dom with `npm install --save react-router-dom`.
// 3. I learned about routers types, Browser Router, Hash Router and Memory Router.
// 4. Using react router documentation I created a new router with createHashRouter in this file and I established some routes.
// 5. How to use Link and NavLink components to navigate between pages.
// 6. How to use useParams hook to get the url parameter.
