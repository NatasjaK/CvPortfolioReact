import "../App.css";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: "fa-html5" },
    { name: "CSS3", icon: "fa-css3-alt" },
    { name: "JavaScript", icon: "fa-js" },
    { name: "React", icon: "fa-react" },
    { name: "Git & GitHub", icon: "fa-github" },
  ];

  return (
    <section id="skills">
      <h2>🛠 Mina Kunskaper</h2>
      <p>Här är några av de teknologier och verktyg jag behärskar:</p>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <i className={`fa-brands ${skill.icon}`}></i>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
