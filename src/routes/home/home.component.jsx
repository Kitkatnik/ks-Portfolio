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
            <p>
                <span className="code">import</span> <span className="style">'./professional.styles.scss'</span>;
            </p>
            <p className="active-line">
                <span className="code">import</span> <mark className="highlight">myPortrait</mark> <span className="code">from</span> <span className="style">'../../assets/myPortrait.jpg'</span>;<span className="blinking-cursor">|</span>
            </p>
            
            <br/>

            <div>
                (alias) const myPortrait: string<br/>import myPortrait
            </div>
            <img src="" alt="Headshot" />

            <p>
                <span className="code">
                    const
                </span> <span className="identifier">
                    Professional
                </span> = (<span className="variable">
                    skills
                </span>) ={charCode(codes.greaterThan)} {charCode(codes.leftBrace)}
            </p>
            <div className="back-symbols dots">. . . . . . . . . . . . . .</div>
            <div className="back-symbols dots">. . . . . . . . . . . . . .</div>
            <div className="back-symbols dots">. . . . . . . . . . . . . .</div>
            <div className="back-symbols dots">. . . . . . . . . . . . . .</div> 

            <br/>

            <div className="nested">
                <p>
                    <span className="code">
                        const
                    </span> <span className="variable">
                        pronouns
                    </span> = <span className="style">
                        'she/they'
                    </span>;
                </p>
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
                    </span> = <span className="style">
                        'Atlanta, GA (willing to work remotely)'
                    </span>;
                </p>
                    <div className="back-symbols">
                        =====================================================================================================
                    </div>
                
                <p>
                    <span className="code">return (</span>
                </p>

                <br/>

                <div className="nested">

                    <h1 className="comment">{charCode(codes.forwardSlash)}* ABOUT *{charCode(codes.forwardSlash)}</h1><br/>
                    <p>
                        Driven Full-Stack Engineer with a strong bias for impact, proficient in using Javascript for frontend and backend programming, React, HTML, CSS, API implementing, Node.JS, Express, SQL, PostgreSQL, and frameworks like Bootstrap and Material UI. Experience as a Founder and Director of Operations provides an advantage in driving key initiatives, maximizing impact, innovating and iterating, working autonomously, acting fast, and being flexible in facilitating critical change for high-growth, multi-million-dollar B2B companies. 
                    </p>

                    <h1 className="comment">{charCode(codes.forwardSlash)}* ACTIVITIES *{charCode(codes.forwardSlash)}</h1>
                    <p><span className="background dots">. . . .</span> List awards and hackathons here</p>
                    <br/><br/>

                    <h1 className="comment">{charCode(codes.forwardSlash)}* SKILLS *{charCode(codes.forwardSlash)}</h1><br/>
                    <p><span className="code">const</span> <span className="variable">skills</span> = {charCode(codes.leftBrace)}</p>
                    <br/>
                    <div className="nested">
                        <p>
                            frontend: {charCode(codes.leftBracket)} 
                            <br/>
                            <div className="nested">array here</div>
                            {charCode(codes.rightBracket)};<br/>
                        </p>

                        <br/>

                        <p>
                            backend: {charCode(codes.leftBracket)} 
                            <br/>
                            <div className="nested">array here</div>
                            {charCode(codes.rightBracket)};<br/>
                        </p>

                        <br/>

                        <p>
                            additionalSkills: {charCode(codes.leftBracket)} 
                            <br/>
                            <div className="nested">array here</div>
                            {charCode(codes.rightBracket)};<br/>
                        </p>

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

