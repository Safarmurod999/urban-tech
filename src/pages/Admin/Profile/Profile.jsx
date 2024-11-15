import React from 'react'

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
                    <img src="profile-image.jpg" alt="Profile picture" />
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
                <div className="membership">
                    <img src="academy-shield.png" alt="Academy shield" className="shield-icon" />
                    <span>Member of</span>
                    <a href="#" className="academy-link">The Junior Academy</a>
                </div>

                <div className="location">
                    <i className="location-icon"></i>
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