import { FaLocationDot } from "react-icons/fa6";

const Profile = () => {
    
    return (
        <div className="profile-container">
            <header className="profile-header">
                <h1>My Profile</h1>
                <button className="edit-button">
                    <i className="edit-icon"></i>
                    EDIT
                </button>
            </header>

            <div className="profile-banner">
                <div className="profile-picture">
                    <img src="https://d29c9sc0dwanpn.cloudfront.net/user-images/oishabonu28%40gmail.com/iBOE8H/photo_2024-09-04_22-29-02.png?Expires=1797790614&Signature=II9XA57qLlSdOiTjwPWpmWbTaZbq~dkURbpKO49Md0gVm5scBhuafcaAoPJbXE-Wgaw-eolQA0j58NJigH-wDx5MOC7szZ1NNBG7Igqxjx~GghvUSL8KJjkQ7vie86tkGHoTYwGw-iRNorUT4nfS6Q-Vxx0vawAdBictS14ElvPxrybKi5LuJHPJodTaKTccDEErdfXrlTAK5SvYqwvPcuL-cb~smCfmtgmmjSFkOoZxdDPg-r2o6Pq-xJP23RzJ0a1~6vmGTKekSYXT0JqNaBQ43q7peC98B8ncefy5TgBDBv-7-HdmS7yvjsX-UMrqjW6aHzcj91Uk6upXC~vlcw__&Key-Pair-Id=APKAICK47SWNPVETHNRA" alt="Profile picture" />
                </div>
                <div className="profile-title">
                    <h2>Oyshabonu N.</h2>
                    <div className="student-badge">
                        <span>Student ID</span>
                        <span className="id-number">24808</span>
                    </div>
                </div>
            </div>

            <div className="profile-content">
                {/* <div className="membership">
                    <img src="academy-shield.png" alt="Academy shield" className="shield-icon" />
                    <span>Member of</span>
                    <a href="#" className="academy-link">The Junior Academy</a>
                </div> */}

                <div className="location">
                    <FaLocationDot />
                    <span>Yuqorichirchiq</span>
                    <span>Uzbekistan</span>
                </div>

                <section className="about-section">
                    <h3>About Me</h3>
                    <p>Hi! I'm Oisha very social and active student in virtual and real life. I have lots of hobbies and I'm passionate about exploring new things and gaining knowledge from that.</p>
                </section>

                <div className="availability">
                    <h4>AVAILABILITY</h4>
                    <p>I am pretty good at generating original and unique ideas, researching, and working with the team. I also have good knowledge in many spheres including Medicine, Food Sciences, Science, and many more. Feel free to contact me anytime!</p>
                </div>

                <div className="info-columns">
                    <section className="skills">
                        <h3>SKILLS & INTERESTS</h3>
                        <ul>
                            <li>Agriculture</li>
                            <li>Biology</li>
                            <li>Computer Science</li>
                            <li>Ecology</li>
                            <li>Food Sciences</li>
                            <li>Health Sciences</li>
                            <li>Mathematics</li>
                            <li>Medicine</li>
                            <li>Science</li>
                        </ul>
                    </section>

                    <section className="languages">
                        <h3>LANGUAGES</h3>
                        <ul>
                            <li>English</li>
                            <li>Russian</li>
                            <li>Uzbek</li>
                        </ul>
                    </section>

                    <section className="hobbies">
                        <h3>HOBBIES</h3>
                        <ul>
                            <li>Reading novels&magazines</li>
                            <li>Watching historical movies& k-dramas</li>
                            <li>Cooking</li>
                            <li>Playing volleyball</li>
                            <li>Volunteering</li>
                            <li>Making friends</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Profile