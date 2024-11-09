import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const AuthContext = React.createContext();

function AuthProvider() {
	const navigate = useNavigate();
	const [user, setUser] = React.useState(null);

	const login = (username) => {
		setUser({ username });
		navigate('/profile');
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
