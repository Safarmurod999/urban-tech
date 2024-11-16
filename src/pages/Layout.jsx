import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import { Footer, Header } from '../components/index'
import ProtectedRoute from './ProtectedRoute';

const Layout = ({ children }) => {
    const [dropdown, setDropdown] = useState(false);
    const route = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [route]);


    return (
        <>
            <Header dropdown={dropdown} setDropdown={setDropdown} />
            <main className="main language-en" onClick={() => setDropdown(false)}>
                {
                    route.pathname.startsWith("/profile") ? (
                        <ProtectedRoute>
                            {children}
                        </ProtectedRoute>
                    ) :
                        <>
                            {children}
                        </>
                }
            </main>
            <Footer />
        </>
    )
}

export default Layout   