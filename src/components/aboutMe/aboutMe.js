const AboutMe = () => {
    
    return(
      
        <div className="aboutme_main-conteiner">
          
        <div className="about_main-wrapper">
          <h2 className="about_main-title" id="about_me">&#47;&#47;About me</h2>
          <h2 className="about_techy-title">All about Techy</h2>
          <p className="about_techy-description">
            Lorem ipsum dolor sit amet, <br /><br />
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
            <br /><br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
          <h2 className="about_interests-title">My interests</h2>
          <ul className="about_interests-list">
            <p>music</p>
            <p>kitesurfing</p>
            <p>cycling</p>
          </ul>
          <div className="about_btn-text">
            <p>Ukończyłem kurs Easy Code</p>
            <div className="easy_code-btn"></div>
          </div>
        </div>


<div className="skills_main-wrapper">
          <h2 className="skills_main-title" id="skills">&#47;&#47;Skills</h2>
          <p className="skills_description">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur
          </p>
          <div className="statistics_main-wrapper">
            <div><span className="statistics_100">PHP 100%</span></div>
            <div><span className="statistics_90">JS 90%</span></div>
            <div><span className="statistics_90">90%</span></div>
            <div><span className="statistics_60">NODEJS 60%</span></div>
            <div><span className="statistics_90">CSS 90%</span></div>
            <div><span className="statistics_60">GO 60%</span></div>
          </div>
        </div>
      </div>
    )
}

export default AboutMe