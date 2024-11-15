import { RxAvatar } from "react-icons/rx";

const Wrapper = () => {
  return (
    <div className="wrapper">
      <div className="search-section">
        <input type="search" placeholder="Search.." />
        <div className="alphabet-filter">
          <button>A</button><button>B</button><button>C</button><button>D</button><button>E</button>
          <button>F</button><button>G</button><button>H</button><button>I</button><button>J</button>
          <button>K</button><button>L</button><button>M</button><button>N</button><button>O</button>
          <button>P</button><button>Q</button><button>R</button><button>S</button><button>T</button>
          <button>U</button><button>V</button><button>W</button><button>X</button><button>Y</button>
          <button>Z</button>
        </div>
      </div>

      <div className="results">
        <div className="profile-card">
          <RxAvatar />
          {/* <img src="placeholder.jpg" alt="Profile picture" className="profile-picture" /> */}
          <div className="profile-info">
            <h3>Jane Doe <span className="badge">LOOKING FOR A TEAM</span></h3>
            <p>The Junior Academy • New York, United States</p>
            <div className="skills">
              <span className="skill-badge">Mathematics</span>
              <span className="skill-badge">Science</span>
            </div>
          </div>
        </div>

        <div className="profile-card">
          <RxAvatar />
          {/* 
          <img src="placeholder.jpg" alt="Profile picture" className="profile-picture" /> */}
          <div className="profile-info">
            <h3>John Smith</h3>
            <p>The Junior Academy • London, UK</p>
            <div className="skills">
              <span className="skill-badge">Physics</span>
              <span className="skill-badge">Chemistry</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wrapper