import { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
    const [open, setOpen] = useState(false);
    const handleToggleMenu = () => {
        setOpen(!open);
    };
    return (
        <header className="header-bar">
            <div className="header-container">
                <a aria-current="page" className="" href="#/">
                    <img src={logo} alt="Logo" className="logo" />
                </a>
                <div className="header-buttons">
                    <nav className={`nav-links ${open ? 'open' : ''}`}>
                        <a className="nav-link" href="#/events">Events</a>
                        <a className="nav-link" href="#/challenges">Challenges</a>
                        <a className="nav-link" href="#/discussions">Discussions</a>
                        <a className="nav-link" href="#/people">People</a>
                        <a className="nav-link" href="#/projects">Projects</a>
                        <a className="nav-link" href="#/resources">Resources</a>
                    </nav>
                    <div className="notifications-bell-container">
                        <svg className="notifications-bell" fill="#000000" height="40" viewBox="0 0 24 24" width="35" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
                        </svg>
                    </div>
                    <div className="avatar-container user-menu-avatar" role="presentation">
                        <img className="avatar-image"
                            src="https://d29c9sc0dwanpn.cloudfront.net/user-images/oishabonu28%40gmail.com/iBOE8H/photo_2024-09-04_22-29-02.png?Expires=1797790614&amp;Signature=II9XA57qLlSdOiTjwPWpmWbTaZbq~dkURbpKO49Md0gVm5scBhuafcaAoPJbXE-Wgaw-eolQA0j58NJigH-wDx5MOC7szZ1NNBG7Igqxjx~GghvUSL8KJjkQ7vie86tkGHoTYwGw-iRNorUT4nfS6Q-Vxx0vawAdBictS14ElvPxrybKi5LuJHPJodTaKTccDEErdfXrlTAK5SvYqwvPcuL-cb~smCfmtgmmjSFkOoZxdDPg-r2o6Pq-xJP23RzJ0a1~6vmGTKekSYXT0JqNaBQ43q7peC98B8ncefy5TgBDBv-7-HdmS7yvjsX-UMrqjW6aHzcj91Uk6upXC~vlcw__&amp;Key-Pair-Id=APKAICK47SWNPVETHNRA" alt="Oyshabonu N." />
                    </div>
                    <div className="mobile-menu-icon" role="presentation" onClick={handleToggleMenu}>
                        <IoMdMenu />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header