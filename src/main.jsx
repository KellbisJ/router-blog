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
		children: [
			{
				path: '/blog/:url',
				element: <BlogPost />,
			},
		],
	},
	// {
	// 	path: '/blog/:url',
	// 	element: (
	// 		<>
	// 			<Menu />
	// 			<BlogPost />
	// 		</>
	// 	),
	// },
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
