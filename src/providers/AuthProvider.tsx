import useLocalStorage from "@src/hooks/useLocalStorage";
import { PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";

type AuthProviderProps = PropsWithChildren & {
    requireAuth?: boolean;
};

export default function AuthProvider({ children, requireAuth }: AuthProviderProps) {
    const location = useLocation();

    const [user, onUserChange] = useLocalStorage("auth", {});

    if (!user?.auth && requireAuth) {
        return <Navigate to="/login" replace />;
    }

    console.log(user);

    if (user?.auth && location.pathname === "/login") {
        return <Navigate to="/courses" replace />;
    }

    return children;
}
