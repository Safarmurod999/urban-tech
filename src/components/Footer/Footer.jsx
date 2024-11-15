import React from 'react'
import logo from "../../assets/icons/logo.svg";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content-container">
                <div className="footer-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="footer-body">
                    <div className="footer-links">
                        <a href="/resources/privacy-policy">Privacy Policy</a>
                        <a href="/resources/terms-of-use">Terms of Service</a>
                        <a href="/resources/code-of-conduct">Code of Conduct</a>
                        <a href="/resources/contact-us">Contact</a>
                    </div>
                    <span className="footer-copyright">© 2024 GlobalLab. ALL RIGHTS RESERVED</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer