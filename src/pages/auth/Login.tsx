import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";

import "../../styles/login.css";

const loginSchema = z.object({
    email: z.string().email("Invalid email format"),
    password: z
        .string()
        .min(6, "Password must contain at least 6 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character")
});

const Login = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = (data) => {
        const userData = {
            ...data,
            auth: true
        };

        localStorage.setItem("auth", JSON.stringify(userData));
        reset();

        navigate("/courses");
    };

    return (
        <div className="login-container">
            <div className="login-form-wrapper">
                <h2>Login</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            {...register("email")}
                            className={errors.email ? "error" : ""}
                            placeholder="Enter your email"
                        />
                        {errors.email && <span className="error-message">{errors.email.message}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            {...register("password")}
                            className={errors.password ? "error" : ""}
                            placeholder="Enter your password"
                        />
                        {errors.password && <span className="error-message">{errors.password.message}</span>}
                    </div>

                    <button type="submit" disabled={isSubmitting} className="submit-btn">
                        {isSubmitting ? "Processing..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
