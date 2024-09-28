import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const mockUser = {
    uid: '123456',
    displayName: 'John Doe',
    email: 'johndoe@example.com',
    token: 'mocked_jwt_token',
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setUser(mockUser);
            setLoading(false);
        }, 1000);
    }, []);

    const login = (email, password) => {
        console.log('Logging in:', email, password);
        setUser(mockUser);
    };

    const logout = () => {
        console.log('Logging out');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {!loading ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
};

