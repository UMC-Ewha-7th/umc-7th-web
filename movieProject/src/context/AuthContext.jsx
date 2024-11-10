import { createContext, useContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export function AuthContextPRovider({children}){
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token){
            setIsAuthenticated(true);
        }
    }, []);

    const login = (token) => {
        localStorage.setItem("token", token);
        localStorage.setItem("nickname", nickname);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("nickname");
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );    
}

export const useAuth = () => useContext(AuthContext);