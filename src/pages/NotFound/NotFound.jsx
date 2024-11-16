import React from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
    let route = useLocation();
    return (
        <div className="not-found-container">
            <div className="content">
                <div className="error-code">404</div>
                <div className="main-text">Bunday sahifa mavjud emas</div>
                <div className="sub-text">Siz qidirayotgan sahifa topilmadi.</div>
                {route.pathname.startsWith("/profile") ? (
                    <Link to={"/profile"} className="home-link">
                        Bosh sahifa
                    </Link>
                ) : (
                    <Link to={"/"} className="home-link">
                        Bosh sahifa
                    </Link>
                )}
            </div>
        </div>
    );
};

export default NotFound;
