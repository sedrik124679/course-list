import useLocalStorage from "@src/hooks/useLocalStorage";
import { AuthProvider } from "@src/providers/index";
import React from "react";
import { useNavigate } from "react-router";
import { Outlet } from "react-router-dom";

import "../../styles/mainLayout.css";

const MainLayout = () => {
    const [user, onChangeUser] = useLocalStorage("auth", {});

    const navigate = useNavigate();

    const handleLogout = () => {
        onChangeUser({});

        navigate("/login");
    };

    const isAuthenticated = user.auth === true;

    return (
        <AuthProvider requireAuth>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-brand">
                        <h2>Course Platform</h2>
                    </div>

                    <div className="navbar-user">
                        {isAuthenticated ? (
                            <div className="user-menu">
                                <span className="user-email">{user?.email || "User"}</span>
                                <button onClick={handleLogout} className="logout-btn">
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                        <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.59L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
                                    </svg>
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <span className="not-authenticated">Not authenticated</span>
                        )}
                    </div>
                </div>
            </nav>
            <Outlet />
        </AuthProvider>
    );
};

export default MainLayout;
