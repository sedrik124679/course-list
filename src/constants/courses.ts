import { Course } from "@src/types/course";
import { v4 as uuidv4 } from "uuid";

export const courses: Course[] = [
    {
        id: uuidv4(),
        title: "Introduction to Web Development",
        description: "Learn the fundamentals of web development including HTML, CSS, and JavaScript.",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        price: 49.99
    },
    {
        id: uuidv4(),
        title: "Advanced JavaScript Patterns",
        description: "Master advanced JavaScript concepts and design patterns for professional development.",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        price: 79.99
    },
    {
        id: uuidv4(),
        title: "React Masterclass",
        description: "Build modern web applications with React, hooks, and context API.",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        price: 89.99
    },
    {
        id: uuidv4(),
        title: "Node.js Backend Development",
        description: "Create scalable server-side applications with Node.js and Express.",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        price: 69.99
    },
    {
        id: uuidv4(),
        title: "Database Design Fundamentals",
        description: "Learn how to design and optimize databases for your applications.",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        price: 59.99
    },
    {
        id: uuidv4(),
        title: "UI/UX Design Principles",
        description: "Create beautiful and user-friendly interfaces with modern design principles.",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        price: 64.99
    },
    {
        id: uuidv4(),
        title: "Python for Data Science",
        description: "Analyze and visualize data using Python and popular data science libraries.",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        price: 74.99
    },
    {
        id: uuidv4(),
        title: "Mobile App Development with Flutter",
        description: "Build cross-platform mobile applications using Google's Flutter framework.",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        price: 84.99
    },
    {
        id: uuidv4(),
        title: "DevOps & CI/CD Pipelines",
        description: "Automate your development workflow with modern DevOps practices.",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        price: 89.99
    },
    {
        id: uuidv4(),
        title: "Cloud Computing with AWS",
        description: "Deploy and manage applications in the cloud using Amazon Web Services.",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        price: 94.99
    }
];
