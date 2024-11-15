import { Navigate, Route, Routes } from "react-router-dom";
import { Home, Layout, Login, NotFound, People, Profile, Projects, Register } from "../pages/index";

export const routesArr = [
    {
        id: 0,
        path: "/",
        element: Home,
    },
    {
        id: 1,
        path: "/people",
        element: People
    },
    {
        id: 2,
        path: "/projects",
        element: Projects
    },
    {
        id: 3,
        path: "/login",
        element: Login
    },
    {
        id: 4,
        path: "/register",
        element: Register,
    },
    {
        id: 5,
        path: "*",
        element: NotFound
    },
    {
        id: 6,
        path: "/profile/:id",
        element: Profile
    }
];
const Router = () => {
    return (
        <Routes>
            {
                routesArr.map((route, index) => {
                    const RouteComponent = route.element;

                    return (
                        <Route key={index} index={route.path == "/" && true} path={route.path}
                            element={
                                <Layout>
                                    <RouteComponent />
                                </Layout>
                            } />
                    )
                })
            }
        </Routes>
    )
}

export default Router