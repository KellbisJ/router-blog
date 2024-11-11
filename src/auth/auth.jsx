import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const roles = {
	admin: {
		write: true,
		read: true,
		delete: true,
	},
	editor: {
		write: true,
		read: true,
		delete: false,
	},
	reader: {
		write: false,
		read: true,
		delete: false,
	},
};

const adminList = {
	yhwach: roles.admin,
	valentin: roles.admin,
	trouble: roles.admin,
};

const editorList = {
	kira: roles.editor,
	pepe: roles.editor,
	psycho: roles.editor,
};

const defaultUser = roles.reader;

const AuthContext = React.createContext();

function AuthProvider() {
	const navigate = useNavigate();
	const [user, setUser] = React.useState(null);

	const login = (username) => {
		// username = username.toLowerCase();
		setUser({ username });
		navigate('/profile');

		const isAdmin = adminList[username];
		const isEditor = editorList[username];

		if (isAdmin) {
			setUser({ username, isAdmin });
			return;
		}
		if (isEditor) {
			setUser({ username, isEditor });
			return;
		}
		if (!isAdmin && !isEditor) {
			setUser({ username, defaultUser });
			return;
		}
	};
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
