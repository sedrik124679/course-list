import AuthLayout from "@src/layout/auth";
import Login from "@src/pages/auth/Login";

const LoginRoutes = {
    path: "/",
    children: [
        {
            path: "/",
            element: <AuthLayout />,
            children: [
                {
                    path: "login",
                    element: <Login />
                }
            ]
        }
    ]
};

export default LoginRoutes;
