import { createBrowserRouter } from "react-router-dom";
import CourseMain from "../../Layout/CourseMain";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Components/Blog";
import CourseDetail from "../../Pages/Components/CourseDetail";
import Courses from "../../Pages/Components/Courses";
import Home from "../../Pages/Components/Home";
import NotFound from "../../Pages/Components/NotFound";

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
                    },
                    {
                        path: '/courses/:id',
                        element: <CourseDetail></CourseDetail>,
                        loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
                    }
                ]
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])