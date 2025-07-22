import React from 'react';

const Skills = () => {
    return (
        <div id="skills" className="skills-container">
            <div className="skills-wrapper">
                <div className="skills-text left">
                    <p className="skills-heading"><span>M</span>e and MyTech Stack</p>
                    <div className="skills-para">
                        <h3>Experience</h3>
                        <p>
                            <strong>MERN Stack Intern | Wormos Pvt. Ltd.</strong> (May 2025 - June 2025)<br />
                            During my internship, I contributed to sprint planning by outlining feature scope and technical feasibility. I helped implement a component-based design that improved scalability and achieved a 40% performance boost in key operations by resolving memory mismanagement issues.
                        </p>
                        <br />
                        <h3>Education</h3>
                        <p>
                            <strong>Bachelor of Technology in Information Technology</strong><br />
                            Medi-Caps University, Indore (2022-2026)
                        </p>
                    </div>
                </div>

                <div className="skills-skills-img">
                    <img className="blob-vector" src="/images/userAsset/blob vector.png" alt="" />
                    <div className="skills-languages-logo">
                        <img className="skills-language-logo" src="/images/stack/Java.png" alt="Java" />
                        <img className="skills-language-logo" src="/images/stack/Cpp.png" alt="C++" />
                        <img className="skills-language-logo" src="/images/stack/py.jpeg" alt="Python" />
                        <img className="skills-language-logo" src="/images/stack/SQL.png" alt="SQL" />
                        <img className="skills-language-logo" src="/images/stack/HTML.png" alt="HTML" />
                        <img className="skills-language-logo" src="/images/stack/CSS.png" alt="CSS" />
                        <img className="skills-language-logo" src="/images/stack/Javascript.svg" alt="JavaScript" />
                        <img className="skills-language-logo" src="/images/stack/NodeJs.svg" alt="Node.js" />
                        <img className="skills-language-logo" src="/images/stack/React.png" alt="React" />
                        <img className="skills-language-logo" src="/images/stack/MongoDB.svg" alt="MongoDB" />
                        <img className="skills-language-logo" src="/images/stack/Vercel.svg" alt="Vercel" />
                    </div>
                </div>
            </div>
            <div className="faded-text-container">
                <p className="faded-skill-text">skills</p>
            </div>
        </div>
    );
};

export default Skills;