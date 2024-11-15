import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import { Footer, Header } from '../components/index'

const Layout = ({ children }) => {
    const [dropdown, setDropdown] = useState(false);
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    return (
        <>
            <Header dropdown={dropdown} setDropdown={setDropdown} />
            <main className="main language-en" onClick={() => setDropdown(false)}>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout   