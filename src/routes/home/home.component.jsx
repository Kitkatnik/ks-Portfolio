import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import './home.styles.scss';
import KatyaHeadshot from '../../assets/KatyaHeadshot.jpg';

const Home = () => {
    const codes = {
        leftBrace: 123,
        rightBrace: 125,
        greaterThan: 62,
        lessThan: 60,
        forwardSlash: 47,
        leftBracket: 91,
        rightBracket: 93,
    }
    const charCode = (code) => { return String.fromCharCode(code) }

    return (
        <SimpleBar className="about-container">
            {/* eslint-disable-next-line */}
            <p className="comment intro">// HI, I'M KATYA SARMIENTO</p><br />
            <p>
                <span className="code">import</span> <span className="style">'./professional.styles.scss'</span>;
            </p>
            <p>
                <span className="code">import</span> pronouns <span className="code">from</span> <span className="style">'../../she/they'</span>;
            </p>
            <p className="active-line">
                <span className="code">import</span> <mark className="highlight">myPortrait</mark><span className="blinking-cursor">|</span><span className="code">from</span> <span className="style">'../../assets/myPortrait.jpg'</span>;
            </p>
            <div className="position-container">

                <div className="code-popup">
                    {/* <p className="portrait-message">
                        (alias) <span className="code">const</span> myPortrait<span className="code">:</span> <const className="type">string</const>
                    </p> */}
                    <p className="portrait-message">
                        <span className="code">import</span> myPortrait
                    </p>
                    <img src={KatyaHeadshot} alt="Headshot" className="img-popup" />
                </div>
                <div className="background-container">
                    <div className="background-text-container">
                        <div className="background-text left">
                            <div className="back-symbols dots">. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</div>
                            <div className="back-symbols dots">. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</div>
                        </div>
                        <div className="background-text">
                            <p className="code-message">
                                <span className="code">
                                    const
                                </span> <span className="variable">
                                    current
                                </span> = (<span className="variable">
                                    job
                                </span>) ={charCode(codes.greaterThan)} {charCode(codes.leftBrace)} return <span className="style">
                                    'Searching for Software Engineer / Full-Stack Developer roles'
                                </span> {charCode(codes.rightBrace)};
                            </p>
                            <p className="code-message">
                                <span className="code">
                                    const
                                </span> <span className="variable">
                                    location
                                </span> = {charCode(codes.leftBracket)} <span className="style">'Atlanta, GA'</span>, <span className="style">'Willing to work remotely'</span> {charCode(codes.rightBracket)};
                            </p>
                        </div>
                    </div>
                    <div className="back-symbols">
                        ==========================================================================================================================================================================================================
                    </div>
                </div>
            </div>

            <p>
                <span className="code">
                    const
                </span> <span className="identifier">
                    Professional
                </span> = (<span className="variable">
                    skills
                </span>) ={charCode(codes.greaterThan)} {charCode(codes.leftBrace)}
            </p>

            <br />

            <div className="nested">
                <p>
                    <span className="code">return (</span>
                </p>

                <br/>

                <div className="nested">
                    <div className="about-activities-container">
                        <div className="about-activities-left">
                            <h1 className="comment">{charCode(codes.leftBrace)}{charCode(codes.forwardSlash)}* ABOUT *{charCode(codes.forwardSlash)}{charCode(codes.rightBrace)}</h1>
                            <br/>
                            <p>
                                Driven Full-Stack Engineer with a strong bias for impact, proficient in using Javascript for frontend and backend programming, React, HTML, CSS, API implementing, Node.JS, Express, SQL, PostgreSQL, and frameworks like Bootstrap and Material UI. Experience as a Founder and Director of Operations provides an advantage in driving key initiatives, maximizing impact, innovating and iterating, working autonomously, acting fast, and being flexible in facilitating critical change for high-growth, multi-million-dollar B2B companies. 
                            </p>
                        </div>
                        <div className="about-activities">
                            <h1 className="comment">{charCode(codes.leftBrace)}{charCode(codes.forwardSlash)}* ACTIVITIES *{charCode(codes.forwardSlash)}{charCode(codes.rightBrace)}</h1><br/>
                            <p><span className="background dots">. . .</span> <span className="link"><a href="https://github.com/Kitkatnik/ks-adventofcode-2022" target="_blank" rel="noreferrer">Advent of Code 2022</a></span></p>
                            <p><span className="background dots">. . .</span> <span className="link"><a href="https://passport.zerotomastery.io/user/902912ad9c2793d791403d1f9e482f22" target="_blank" rel="noreferrer">Zero to Mastery Passport</a></span></p>
                            <p><span className="background dots">. . .</span> <span className="link"><a href="https://www.holopin.io/@kitkatnik" target="_blank" rel="noreferrer">Hacktoberfest 2022</a></span></p>
                            <p><span className="background dots">. . .</span> <span className="link"><a href="http://www.eventbrite.com/e/att-aspire-mobile-app-hackathon-miami-education-tickets-8736279447" target="_blank" rel="noreferrer">AT&T Aspire Mobile App Hackathon</a></span></p>
                        </div>

                    </div>

                    <br/><br/>

                    <h1 className="comment">{charCode(codes.leftBrace)}{charCode(codes.forwardSlash)}* SKILLS *{charCode(codes.forwardSlash)}{charCode(codes.rightBrace)}</h1><br/>
                    <p>{charCode(codes.leftBrace)}</p>
                    <br/>
                    <div className="nested skills">
                        <p>
                            <span className="code">frontend</span>: {charCode(codes.leftBracket)} 
                            <br/>
                            <div className="nested">
                                HTML, CSS, Sass, Styled Components, Javascript, React, Redux, jQuery
                            </div>
                            {charCode(codes.rightBracket)};<br/>
                        </p>

                        <br/>

                        <p>
                            <span className="code">backend</span>: {charCode(codes.leftBracket)} 
                            <br/>
                            <div className="nested">
                                Node.js, Express, RESTful APIs, SQL, PostgreSQL</div>
                            {charCode(codes.rightBracket)};<br/>
                        </p>

                        <br/>

                        <p>
                            <span className="code">tools</span>: {charCode(codes.leftBracket)} 
                            <br/>
                            <div className="nested">Mocha, Chai, Jest, Knex, Git, GitHub, Heroku, Vercel, Netlify, Firebase, Node Package Manager, Yarn, Visual Studio Code, Figma, Photoshop, Miro, Atlassian (Confluence, Jira, Trello), Asana, ClickUp, Teamwork, Basecamp, 15Five, Lattice, Gusto, Slack</div>
                            {charCode(codes.rightBracket)};<br/>
                        </p>

                        <br/>

                        <p>
                            <span className="code">additionalSkills</span>: {charCode(codes.leftBracket)} 
                            <br/>
                            <div className="nested">Project and Product Management, Process Documentation, System Conversions and Integrations, Cross-functional Collaboration, Product-led Growth, Product Analytics, User Feedback Collection and Analysis, Design Systems, UI and UX Design, Roadmap Planning, Customer and Community Support, and Open Source Contributions.</div>
                            {charCode(codes.rightBracket)};<br/>
                        </p>

                        <br/>

                    </div>
                    <p>{charCode(codes.rightBrace)}</p><br/>

                </div>

                <p>
                    <span className="code">)</span>
                </p><br/>

            </div>
            
            <p>{charCode(codes.rightBrace)}</p>
            <br/>
            <p>
                <span className="code">export default</span> <span className="identifier">Professional;</span>
            </p>
        </SimpleBar>
    )
}

export default Home;

