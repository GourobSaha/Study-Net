import { createBrowserRouter } from "react-router-dom";
import CourseMain from "../../Layout/CourseMain";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Components/Blog";
import Courses from "../../Pages/Components/Courses";
import Home from "../../Pages/Components/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
            {
                path: '/courses',
                element: <CourseMain></CourseMain>,
                children: [
                    {
                        path: '/courses',
                        element: <Courses></Courses>,
                        loader: () => fetch('http://localhost:5000/courses')
                    }
                ]
            }
        ]
    }
])