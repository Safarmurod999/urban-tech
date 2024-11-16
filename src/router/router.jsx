import { Route, Routes, useLocation } from "react-router-dom";
import { Home, Layout, Login, NotFound, People, Profile, Projects, Register, UserProjects } from "../pages/index";

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
    }
];
export const userRoutes = [
    {
        id: 0,
        path: "/profile",
        element: Profile
    },
    {
        id: 1,
        path: "/profile/projects",
        element: UserProjects
    }
]
const Router = () => {
    const route = useLocation();
    return (
        <>
            {route.pathname.startsWith("/profile") ? (
                <Routes>
                    <Route >
                        {userRoutes.map((route) => {
                            const RouteComponent = route.element;
                            console.log(route);

                            return (
                                <Route
                                    key={route.id}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            {" "}
                                            <RouteComponent />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            ) :
                <>
                    <Routes>
                        {
                            routesArr.map((route, index) => {
                                const RouteComponent = route.element;

                                return (
                                    <Route key={route.id} index={route.path == "/" && true} path={route.path}
                                        element={
                                            <Layout>
                                                <RouteComponent />
                                            </Layout>
                                        } />
                                )
                            })
                        }
                    </Routes>
                </>
            }
        </>
    )
}

export default Router