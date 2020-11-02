import React, { useReducer } from 'react';
import { AuthReducer, initialState } from './reducer';


const AuthState = React.createContext();
const AuthDispatch = React.createContext();

export function useAuthState() {
    const context = React.useContext(AuthState);
    if (context === undefined) {
        throw new Error('useAuthState must be used within a AuthProvider');
    }

    return context;
}

export function useAuthDispatch() {
    const context = React.useContext(AuthDispatch);
    if (context === undefined) {
        throw new Error('useAuthDispatch must be used within a AuthProvider');
    }

    return context;
}

export const AuthProvider = ({ children }) => {
    const [user, dispatch] = useReducer(AuthReducer, initialState);

    return (
        <AuthState.Provider value={user}>
            <AuthDispatch.Provider value={dispatch}>
                {children}
            </AuthDispatch.Provider>
        </AuthState.Provider>
    );
};