import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Menu } from './components/Menu';
import { AuthProvider, PrivateRoute } from './auth/auth';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Login } from './pages/Login';
import { Logout } from './pages/Logout';
import { Profile } from './pages/Profile';
import { NotFound } from './pages/NotFound';
import { CreateBlogPost } from './pages/CreateBlogPost';
import { BlogProvider } from './data/blogData';

const router = createHashRouter([
	{
		element: <AuthProvider />,

		children: [
			{
				path: '/',
				element: <Menu />,
				errorElement: <NotFound />,
				children: [
					{
						index: true,
						path: '/',
						element: <Home className="container" />,
					},
					{
						path: '/login',
						element: <Login />,
					},
					{
						path: '/logout',
						element: <Logout />,
					},
					{
						path: '/profile',
						element: (
							<PrivateRoute>
								<Profile />
							</PrivateRoute>
						),
					},
					{
						path: '/blog',
						element: (
							<BlogProvider>
								<Blog />
							</BlogProvider>
						),
					},
					{
						path: '/blog/:slug',
						element: (
							<BlogProvider>
								<BlogPost />
							</BlogProvider>
						),
					},
					{
						path: '/blog/new',
						element: (
							<PrivateRoute>
								<BlogProvider>
									<CreateBlogPost />
								</BlogProvider>
							</PrivateRoute>
						),
					},
				],
			},
		],
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
