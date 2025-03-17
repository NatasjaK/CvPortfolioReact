import "../App.css";

const References = () => {
  return (
    <section id="references">
      <h2>📜 Mina (100% pålitliga) Referenser</h2>
      <p>Vill du ha bevis på mina färdigheter? Här är några <strong>totalt objektiva</strong> referenser från min närmsta krets. 😂</p>

      <div className="references-container">
        <div className="reference">
          <i className="fa-solid fa-user"></i>
          <h3>Mamma ❤️</h3>
          <p>"Jag förstår inte riktigt vad hon gör, men jag vet att hon är <strong>jätteduktig</strong> och jobbar mycket vid datorn!"</p>
        </div>

        <div className="reference">
          <i className="fa-solid fa-user-tie"></i>
          <h3>Pappa 🛠️</h3>
          <p>"Hon kan fixa alla datorproblem... <strong>utom varför Wi-Fi slutar funka när det regnar.</strong>"</p>
        </div>

        <div className="reference">
          <i className="fa-solid fa-chalkboard-teacher"></i>
          <h3>Gammal lärare ✏️</h3>
          <p>"En av de bästa eleverna jag har haft! <strong>Om vi ignorerar alla sena inlämningar.</strong>"</p>
        </div>

        <div className="reference">
          <i className="fa-solid fa-user-nurse"></i>
          <h3>Farmor 👵</h3>
          <p>"Jag är så stolt över mitt barnbarn! Hon är <strong>bäst i världen</strong> på att trycka på dator-knappar!"</p>
        </div>

        <div className="reference">
          <i className="fa-solid fa-users"></i>
          <h3>Kusin 🎮</h3>
          <p>"Jag lärde hon allt om gaming, men nu kodar hon istället... <strong>förvirrande men coolt!</strong>"</p>
        </div>

        <div className="reference">
          <i className="fa-solid fa-dog"></i>
          <h3>Hunden 🐶</h3>
          <p>"Hon är okej... men ger inte godis tillräckligt ofta. <strong>2/10, skulle bo hos en annan utvecklare.</strong>"</p>
        </div>
      </div>
    </section>
  );
};

export default References;
