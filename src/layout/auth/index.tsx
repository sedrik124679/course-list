import { AuthProvider } from "@src/providers";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <AuthProvider>
            <Outlet />
        </AuthProvider>
    );
}
