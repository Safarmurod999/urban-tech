import React from 'react'

const Profile = () => {
    return (
        <div class="profile-container">
            <header class="profile-header">
                <h1>My Profile</h1>
                <button class="edit-button">
                    <i class="edit-icon"></i>
                    EDIT
                </button>
            </header>

            <div class="profile-banner">
                <div class="profile-picture">
                    <img src="profile-image.jpg" alt="Profile picture" />
                </div>
                <div class="profile-title">
                    <h2>Oyshabonu N.</h2>
                    <div class="student-badge">
                        <span>Student ID</span>
                        <span class="id-number">24808</span>
                    </div>
                </div>
            </div>

            <div class="profile-content">
                <div class="membership">
                    <img src="academy-shield.png" alt="Academy shield" class="shield-icon" />
                    <span>Member of</span>
                    <a href="#" class="academy-link">The Junior Academy</a>
                </div>

                <div class="location">
                    <i class="location-icon"></i>
                    <span>Yuqorichirchiq</span>
                    <span>Uzbekistan</span>
                </div>

                <section class="about-section">
                    <h3>About Me</h3>
                    <p>Hi! I'm Oisha very social and active student in virtual and real life. I have lots of hobbies and I'm passionate about exploring new things and gaining knowledge from that.</p>
                </section>

                <div class="availability">
                    <h4>AVAILABILITY</h4>
                    <p>I am pretty good at generating original and unique ideas, researching, and working with the team. I also have good knowledge in many spheres including Medicine, Food Sciences, Science, and many more. Feel free to contact me anytime!</p>
                </div>

                <div class="info-columns">
                    <section class="skills">
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

                    <section class="languages">
                        <h3>LANGUAGES</h3>
                        <ul>
                            <li>English</li>
                            <li>Russian</li>
                            <li>Uzbek</li>
                        </ul>
                    </section>

                    <section class="hobbies">
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