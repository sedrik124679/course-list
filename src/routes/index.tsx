import LoginRoutes from "@src/routes/LoginRoutes";
import MainRoutes from "@src/routes/MainRoutes";
import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthLayout from "@src/layout/auth";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <AuthLayout />,
            children: [
                {
                    index: true,
                    element: <Navigate to="/login" replace />
                }
            ]
        },
        LoginRoutes,
        MainRoutes
    ],
    { basename: import.meta.env.VITE_APP_BASE_NAME }
);

export default router;
