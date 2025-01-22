import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../layout/Layout";
import TodoListPage from "../pages/TodoListPage";
import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../pages/LoginPage";
import { useAuthContext } from "../context/AuthContext";
import { PropsWithChildren } from "react";

const ProtectedRoute = ({ children }:PropsWithChildren) => {
    const { username } = useAuthContext();

    if (username==null) {
        return <Navigate to='/login' replace />
    };

    return children;
}

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <TodoListPage />
            },
            {
                path: '/profile',
                element: <ProtectedRoute><ProfilePage /></ProtectedRoute>
            },
            {
                path: '/login',
                element: <LoginPage />
            }
        ]
    }
]);

export default router;