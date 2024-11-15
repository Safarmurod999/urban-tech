import { Navigate, Route, Routes } from "react-router-dom";
import { Home, Layout } from "../pages/index";

export const routesArr = [
    {
        id: 0,
        path: "/",
        element: Home,
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
            <Route path='*' element={<Navigate to={'/'} replace />} />
        </Routes>
    )
}

export default Router