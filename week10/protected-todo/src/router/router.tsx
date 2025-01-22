import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import TodoListPage from "../pages/TodoListPage";
import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../pages/LoginPage";

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
                element: <ProfilePage />
            },
            {
                path: '/login',
                element: <LoginPage />
            }
        ]
    }
]);

export default router;