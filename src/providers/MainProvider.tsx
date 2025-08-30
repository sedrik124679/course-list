import { AuthProvider } from "@src/providers/index";
import React from "react";
import { Outlet } from "react-router-dom";

const MainProvider = () => {
    return (
        <AuthProvider requireAuth>
            <div>abobus</div>
            <Outlet />
        </AuthProvider>
    );
};

export default MainProvider;
