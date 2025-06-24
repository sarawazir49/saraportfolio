import '../styles/cvstyle.css';
let CV = () => {
  return (
    <>
      <div className="cv-container">
        <div className="ae">
          <h1>Curriculum Vitae</h1>
          <h2>Arbetslivserfarenhet</h2>

          <h3>Studiehandledare/Elevassistent, Ungdomscentrum-Jacobsskolan, Hässleholm</h3>
          <h4>FEBRUARI 2016 — OKTOBER 2017</h4>
          <p>Studiehandledning, hjälpa eleverna med engelska, matematik, historia och svenska samt vid användning av IT-utrustning. Översättning av enklare undervisningsmaterial. Planering och implementering av förslag för trygghet i skolan.</p>
          <br />

          <h3>Boendestödjare/vårdare, Vinslövshemmet</h3>
          <h4>JANUARI 2015 — OKTOBER 2015</h4>
          <p>Tillsyn och allmän omvårdnad.</p>
          <br />

          <h3>Ekonomi och leverantörsutveckling, Mahmoud Saleh Trading, Libanon</h3>
          <h4>OKTOBER 2007 — MARS 2013</h4>
          <p>Kontakt med leverantörer samt ekonomiansvarig för företaget.</p>
          <br />

          <h3>Arkivassistent, Al Jubaily Hospital, Libanon</h3>
          <h4>JULI 2005 — JULI 2006</h4>
          <p>Dataregistrerare</p>

          <br />
          <h2>Utbildning</h2>
          <br />

          <h3>Praktik – IT-Avdelningen, Hässleholms kommun</h3>
          <h4>FEBRUARI 2025 — MAJ 2025</h4>
          <p>
            Praktisk erfarenhet av hårdvara och digitalisering. Medverkade i e-tjänsteprojekt och skapade guider.
          </p>

          <h3>IT Programming – Sundsgården Folkhögskola</h3>
          <h4>JANUARI 2023 – JUNI 2023</h4>
          <p>
            Webbutveckling med HTML, CSS, JavaScript. Projektbaserad distansutbildning med teamarbete och föreläsningar.
          </p>

          <h3>SFI D-nivå, T4 Skolan Hässleholm</h3>
          <h4>OKTOBER 2020 — MARS 2021</h4>

          <h3>Studiehandledarkurs, Hässleholms kommun</h3>
          <h4>MARS 2016 — APRIL 2016</h4>
          <p>
            Fördjupning i handledarrollen, värdegrund, planering och kvalitet.
          </p>

          <h3>Bachelor of Science, The Open University, Beirut</h3>
          <h4>2007 — 2012</h4>
          <p>Information and communication technologies</p>

          <h3>Redovisning & Databehandling, Lebanese Technical School</h3>
          <h4>2004 — 2007</h4>
        </div>

        <div className="rightside">
          <section>
            <h2>Skills</h2>
            <ul className="skills">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>Figma</li>
              <li>Designbibliotek</li>
              <li>Ramverk</li>
              <li>Git/GitHub</li>
              <li>VS Code</li>
              <li>Programmeringsteknik</li>
              <li>Agilt arbete</li>
            </ul>

            <h2>Kompetens</h2>
            <ul className="kompetens">
              <li>Flexibel</li>
              <li>Social</li>
              <li>Stresstålig</li>
              <li>Kundservice</li>
              <li>Multitasking</li>
              <li>Problemlösning</li>
              <li>Läraktig</li>
              <li>Kommunikativ</li>
              <li>Teamarbete</li>
              <li>Jobba under press</li>
            </ul>

            <h2>Språk</h2>
            <ul className="sprak">
              <li>Arabiska: modersmål</li>
              <li>Engelska: 70%</li>
              <li>Svenska: 50%</li>
            </ul>

            <h2>Övrigt</h2>
            <p className="korkort">B-körkort</p>

            <h2>Referenser</h2>
            <div className="referens">
              <p>Camilla Jönsson</p>
              <p>Jacobsskolan Hässleholm</p>
              <p>0703-092 046</p>
            </div>
          </section>
        </div>
      </div>

    </>
  );
};

export default CV;
