import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [token, setToken] = useState('');
    const [userData, setUserData] = useState({})

    return (
        <LoginContext.Provider value={{ token, setToken, userData, setUserData }}>
            {children}
        </LoginContext.Provider>
    );
};