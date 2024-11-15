import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import {  Footer, Header } from '../components/index'

const Layout = ({ children }) => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <Header />
            <main className="main language-en">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout   