import { BsFillBuildingsFill } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { FaMountainSun } from "react-icons/fa6";
import { GiRocket } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdBiotech } from "react-icons/md";
import { IoWater } from "react-icons/io5";
import { FaCloudSunRain } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { FaBalanceScale } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa6";
import { FaHeartbeat } from "react-icons/fa";
import { MdAgriculture } from "react-icons/md";
import { MdRocketLaunch } from "react-icons/md";
import { GiThreeLeaves } from "react-icons/gi";


// Import Swiper styles
import 'swiper/css';

const Home = () => {
  return (
    <>
      <div className="main-page">
        <div className="home">
          <section className="banner home" id="banner-home">
            <div className="left">
              <div className="content">
                <h1>Welcome to Our Collaborative Learning Platform</h1>
                <p>
                  Our platform connects students, mentors, and startups
                  in a dynamic ecosystem focused on real-world projects,
                  skills development, and collaboration. Whether you
                  are a student eager to learn, a mentor looking to
                  guide the next generation, or an entrepreneur seeking
                  talented collaborators, our platform offers the tools
                  and resources to help you thrive.
                </p>
              </div>
            </div>
            <div className="right" id="banner-home-right">
            </div>
          </section>
          <section className="call-to-action">
            <div className="container">
              <div className="inner">
                <div className="card first">
                  {/* <BsFillQuestionDiamondFill /> */}
                  <PiStudent />
                  <h2>Students</h2>
                  <h3>Discover, Learn, and Grow</h3>
                  <ul>
                    <li>Collaborate on Real-World Projects.</li>
                    <li>Connect with Mentors and Experts.</li>

                    <li>Build Your Network.</li>
                    <li>Personalized Learning</li>
                  </ul>
                  <div className="cta">Request an Invite
                    <span>&gt;&gt;</span>
                  </div>
                </div>
                <div className="card second">
                  <FaChalkboardTeacher />
                  <h2>Mentors</h2>
                  <h3>Inspire the Next Generation</h3>
                  <ul>
                    <li>Share Your Knowledge.</li>
                    <li>Grow Your Influence.</li>
                    <li>Give Back to the Community.</li>
                    <li>Impact the Future.</li>
                  </ul>
                  <div className="cta">
                    Get in Touch <span>&gt;&gt;</span>
                  </div>
                </div>
                <div className="card third">

                  <BsFillBuildingsFill />
                  <h2>Startups</h2>
                  <h3>Collaborate, Innovate, Succeed</h3>
                  <ul>
                    <li>Find Talented Collaborators.</li>
                    <li>Collaborate on Innovative Projects.</li>
                    <li>Access Mentorship.</li>
                    <li>Grow Your Network.</li>
                  </ul>
                  <div className="cta">
                    Request an Invite <span>&gt;&gt;</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container pilot-results">
              <div className="inner">
                <div className="pilot-results-wrapper">
                  <div className="pilot-results-1">
                    <FaQuoteLeft className="left" />
                    <p>It was an amazing experience, collaborating with other learners from different countries. I can't wait to do it again!</p>
                    <FaQuoteRight className="right" />
                  </div>
                  <div className="pilot-results-2">
                    <div>
                      <p>
                        <span>
                          85%
                        </span>
                        <FaMountainSun />
                      </p>
                      of problem solvers report an increase in leadership skills.
                    </div>
                  </div>
                  <div className="pilot-results-3">
                    <GiRocket />
                    <div className="content">
                      <span>9/10</span>
                      <p>mentors recommend joining Global Lab</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div>
            <section className="areas-of-impact-heading">
              <div className="container">
                <h1>Areas of Impact</h1>
              </div>
            </section>
            <section className="areas-of-impact">
              <div className="container">
                <div className="inner">
                  <p>Global Lab projects focus on addressing society’s greatest challenges.</p>
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      640: {
                        slidesPerView: 2,
                      },
                      768: {
                        slidesPerView: 3,
                      },
                      1024: {
                        slidesPerView: 4,
                      },
                    }}
                  >
                    <SwiperSlide>
                      <div className="area-card">
                        <div className="image">
                          <MdBiotech />
                        </div>
                        <div className="label">Biodiversity</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="area-card">
                        <div className="image">
                          <IoWater />
                        </div>
                        <div className="label">Clean Water &amp; Sanitation</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="area-card">
                        <div className="image">
                          <FaCloudSunRain />
                        </div>
                        <div className="label">Climate Change</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="area-card">
                        <div className="image">
                          <MdCastForEducation />
                        </div>
                        <div className="label">Education</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="area-card">
                        <div className="image">
                          <FaBalanceScale />
                        </div>
                        <div className="label">Equality</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="area-card">

                        <div className="image">
                          <FaMicrochip />
                        </div>
                        <div className="label">Emerging Technologies</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="area-card">
                        <div className="image">
                          <MdAgriculture />

                        </div>
                        <div className="label">Nutrition, Agriculture &amp; Food Systems</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="area-card">
                        <div className="image">
                          <FaHeartbeat />
                        </div>
                        <div className="label">Public Health &amp; Wellbeing</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="area-card">
                        <div className="image">
                          <MdRocketLaunch />
                        </div>
                        <div className="label">Space</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="area-card">
                        <div className="image">
                          <GiThreeLeaves />
                        </div>
                        <div className="label">Sustainability &amp; Resilience</div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </section>
          </div>
        </div>

      </div>
      <div className="Toastify">
      </div>
    </>
  )
}

export default Home