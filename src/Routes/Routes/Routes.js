import { createBrowserRouter } from "react-router-dom";
import CourseMain from "../../Layout/CourseMain";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Components/Blog";
import CourseDetail from "../../Pages/Components/CourseDetail";
import Courses from "../../Pages/Components/Courses";
import Home from "../../Pages/Components/Home";
import Login from "../../Pages/Components/Login";
import NotFound from "../../Pages/Components/NotFound";
import Register from "../../Pages/Components/Register";

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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
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