import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export const roles = {
	admin: 'admin',
	editor: 'editor',
	reader: 'reader',
};

export const usersList = {
	Yhwach: roles.admin,
	Badguy: roles.admin,
	Valentin: roles.admin,
	Kira: roles.editor,
	Pepe: roles.editor,
	Kurapika: roles.reader,
	Pedro: roles.reader,
	Juan: roles.reader,
};

const AuthContext = React.createContext();

function AuthProvider() {
	const navigate = useNavigate();
	const [user, setUser] = React.useState(null);

	const login = (username) => {
		// username = username.toLowerCase();
		const user = usersList[username];
		if (user) {
			setUser({ username, role: user });
			navigate('/profile');
		}
	};

	React.useEffect(() => {
		if (user != null) {
			console.log(user.role);
		}
	}, [user]);
	const logout = () => {
		setUser(null);
		navigate('/');
	};

	const isAuthenticated = !!user;
	const isLoggedIn = user !== null;

	const auth = { user, isAuthenticated, isLoggedIn, login, logout };

	return (
		<AuthContext.Provider value={auth}>
			<Outlet />
		</AuthContext.Provider>
	);
}

function useAuth() {
	const context = React.useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
}

function PrivateRoute({ children }) {
	const { isAuthenticated } = useAuth();
	if (!isAuthenticated) {
		return <Navigate to="/login" />;
	} else {
		return children;
	}
}

export { AuthProvider, useAuth, PrivateRoute };
