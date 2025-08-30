import MainLayout from "@src/layout/courses";
import { Courses } from "@src/pages/courses";

const MainRoutes = {
    path: "/",
    children: [
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    path: "courses",
                    element: <Courses />
                }
            ]
        }
    ]
};

export default MainRoutes;
