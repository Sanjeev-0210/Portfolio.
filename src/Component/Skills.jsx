import '../Style/Skills.css'
const Skills = () => {
    return (
        <div id='skill'>
            <span>My Skills</span>
            <div className="skills">

                <div className="se-content">
                    <h3>Skills reflect our Knowledge</h3>
                    <p>As a recent graduate, I recognize the importance of strong communication skills in both academic and professional settings. I am eager to leverage these skills to contribute effectively to collaborative projects and team environments in entry-level roles.</p>

                </div>
                <div className="skill-score">
                    <div className="b1">
                        <h2>Java</h2>
                        <h1>70%</h1>
                    </div>
                    <div className="b1">
                        <h2>JavaScript</h2>
                        <h1>80%</h1>
                    </div>
                    <div className="b1">
                        <h2>ReactJS</h2>
                        <h1>80%</h1>
                    </div>
                    <div className="b1">
                        <h2>SQL</h2>
                        <h1>85%</h1>
                    </div>
                    {/* <div className="b1">
                <h2>Hibernate</h2>
                <h1>80%</h1>
                </div> */}
                </div>
            </div>
        </div>
    )
}

export default Skills;