import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

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

	const auth = { user, login, logout };

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

export { AuthProvider, useAuth };
