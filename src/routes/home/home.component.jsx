import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';


import './home.styles.scss';
import KatyaHeadshot from '../../assets/KatyaHeadshot.jpg';

const Home = (test) => {
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
            <p className="comment">// HI, I'M KATYA SARMIENTO</p><br />
            <p>
                <span className="code">import</span> <span className="style">'./professional.styles.scss'</span>;
            </p>
            <p className="active-line">
                <span className="code">import</span> pronouns <span className="code">from</span> <span className="style">'../../she/they'</span>;
            </p>
            <p className="active-line">
                <span className="code">import</span> <mark className="highlight">myPortrait</mark><span className="blinking-cursor">|</span><span className="code">from</span> <span className="style">'../../assets/myPortrait.jpg'</span>;
            </p>
            <div className="position-container">

                <div className="code-popup">
                    <p>
                        (alias) <span className="code">const</span> myPortrait<span className="code">:</span> <const className="type">string</const>
                    </p>
                    <p>
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
                        <p>
                            <span className="code">
                                const
                            </span> <span className="variable">
                                currently
                            </span> = (<span className="variable">
                                job
                            </span>) ={charCode(codes.greaterThan)} {charCode(codes.leftBrace)} return <span className="style">
                                'Searching for Software Engineer / Full-Stack Developer roles'
                            </span> {charCode(codes.rightBrace)};
                        </p>
                        <p>
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
                            <h1 className="comment">{charCode(codes.forwardSlash)}* ABOUT *{charCode(codes.forwardSlash)}</h1>
                            <br/>
                            <p>
                                Driven Full-Stack Engineer with a strong bias for impact, proficient in using Javascript for frontend and backend programming, React, HTML, CSS, API implementing, Node.JS, Express, SQL, PostgreSQL, and frameworks like Bootstrap and Material UI. Experience as a Founder and Director of Operations provides an advantage in driving key initiatives, maximizing impact, innovating and iterating, working autonomously, acting fast, and being flexible in facilitating critical change for high-growth, multi-million-dollar B2B companies. 
                            </p>
                        </div>
                        <div className="about-activities">
                            <h1 className="comment">{charCode(codes.forwardSlash)}* ACTIVITIES *{charCode(codes.forwardSlash)}</h1><br/>
                            <p><span className="background dots">. . . .</span> List awards and hackathons here</p>
                        </div>

                    </div>

                    <br/><br/>

                    <h1 className="comment">{charCode(codes.forwardSlash)}* SKILLS *{charCode(codes.forwardSlash)}</h1><br/>
                    <p>{charCode(codes.leftBrace)}</p>
                    <br/>
                    <div className="nested">
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
                            <div className="nested">Project and product management, process documentation, system conversions and integrations, cross-functional collaboration, product-led growth, product analytics, user feedback collection and analysis, design systems, UI and UX design, roadmap planning, customer and community support, and open source contributions.</div>
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

