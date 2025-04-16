<template>
    <div class="reflection-page">
      <Navbar />
  
      <div class="back-button" @click="goBack">
        <span>&lsaquo;</span> Terug
      </div>
  
      <div class="reflection-content">
        <h1>Eindreflectie</h1>
        
        <div class="reflection-image">
          <img src="../assets/xfactor.jpg" alt="x factor">
        </div>
  
        <div class="intro-quote">
          <blockquote>
            "De reis door informatica heeft me niet alleen technische kennis gebracht, maar ook persoonlijke groei."
          </blockquote>
        </div>
        
        <section class="content-section">
          <h2>Doelen & Persoonlijke Groei</h2>
          <p>
            In het algemeen vind ik dat mijn doelen tijdens mijn schoolcarrière zijn behaald. Aan het begin van deze opleiding twijfelde 
            ik toch even of ik dit wel zou aankunnen aangezien informatica toch geen eenvoudige sector is maar uiteindelijk ben ik er 
            toch geraakt niet alleen door de vakken zelf te volgen maar ook al de nuttige sessies die daarbuiten vallen.
          </p>
          <p>
            Zo heb ik niet alleen op vlak van informatica mijn vaardigheden verbeterd door de basis in het eerste jaar en het keuzetraject 
            vanaf het tweede jaar, maar ben ik ook sociaal een stuk sterker geworden. Iets wat tijdens verschillende sessies werd aangehaald 
            is dat hard skills niet alles is, soft skills zijn zelfs nog belangrijker in sommige situaties ook al is dat niet meteen duidelijk.
          </p>
        </section>
  
        <section class="content-section">
          <h2>Technische Vaardigheden</h2>
          <div class="skills-grid">
            <div class="skill-category">
              <h3>Hard Skills</h3>
              <ul class="skill-list">
                <li>
                  <div class="skill-icon">💻</div>
                  <div class="skill-details">
                    <strong>Programmeren</strong>
                    <p>Ontwikkelen van dynamische websites, applicaties en games</p>
                  </div>
                </li>
                <li>
                  <div class="skill-icon">🔧</div>
                  <div class="skill-details">
                    <strong>Technische Basis</strong>
                    <p>Sterke basis in verschillende sectoren binnen de IT-wereld</p>
                  </div>
                </li>
                <li>
                  <div class="skill-icon">📱</div>
                  <div class="skill-details">
                    <strong>Ontwikkeling</strong>
                    <p>Ervaring met verschillende programmeerparadigma's</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="skill-category">
              <h3>Soft Skills</h3>
              <ul class="skill-list">
                <li>
                  <div class="skill-icon">🤝</div>
                  <div class="skill-details">
                    <strong>Teamwerk</strong>
                    <p>Samenwerken in diverse projectgroepen</p>
                  </div>
                </li>
                <li>
                  <div class="skill-icon">⏰</div>
                  <div class="skill-details">
                    <strong>Tijdsmanagement</strong>
                    <p>Deadlines respecteren en plannen</p>
                  </div>
                </li>
                <li>
                  <div class="skill-icon">🔄</div>
                  <div class="skill-details">
                    <strong>Aanpassingsvermogen</strong>
                    <p>Flexibel omgaan met nieuwe technologieën</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <p>
            Ik vind dan ook dat na deze drie jaar ik een zeer sterke basis heb op vlak van informatica, dit heb ik vooral te danken aan de eerste 
            helft van dit traject waarbij er vakken worden gegeven die gaan over de verschillende sectoren binnen de IT-wereld. Toch ben ik in 
            bepaalde onderdelen sterker geworden dan andere, dankzij de tweede helft van dit traject heb ik meer ervaring op gebied van programmeren 
            opgedaan en kan ik nu dingen ontwikkelen waarvan ik dacht dat ik dit nooit ging kunnen zoals dynamische websites, applicaties en games 
            wat iets is wat ik altijd al interessant vond.
          </p>
        </section>
  
        <section class="content-section">
          <h2>Continu Leren & Ontwikkelen</h2>
          <p>
            Toen ik begon aan deze opleiding wist ik ook al dat binnen deze sector het leren nooit stopt, de IT-wereld staat nooit stil en er komen 
            altijd nieuwe dingen bij zoals de evolutie van AI tijdens mijn traject. Daarom is het voor mij ook belangrijk dat ik op mijn toekomstige 
            werkplek de mogelijkheid kan krijgen om verder te ontwikkelen in de zaken die ik interessant vind en feedback te krijgen op wat ik doe. 
            Dit is namelijk de beste manier voor mij om mijn vaardigheden te blijven ontwikkelen zeker in de eerstkomende jaren.
          </p>
          <div class="development-plans">
            <div class="plan">
              <div class="plan-icon">📚</div>
              <h4>Bijscholing</h4>
              <p>Regelmatig sessies volgen over de nieuwste technologieën</p>
            </div>
            <div class="plan">
              <div class="plan-icon">🔍</div>
              <h4>Persoonlijke Projecten</h4>
              <p>Kleine projecten maken buiten het werk om vaardigheden te blijven ontwikkelen</p>
            </div>
            <div class="plan">
              <div class="plan-icon">🔄</div>
              <h4>Feedback Loop</h4>
              <p>Actief feedback vragen en implementeren om te blijven groeien</p>
            </div>
          </div>
        </section>
  
        <section class="content-section">
          <h2>De X-Factor</h2>
          <div class="x-factor">
            <div class="x-factor-item">
              <div class="x-factor-icon">(em)Passie</div>
              <p>Door mijn passie voor IT ben ik gemotiveerd om mezelf constant te verbeteren en nieuwe uitdagingen aan te gaan.</p>
            </div>
            <div class="x-factor-item">
              <div class="x-factor-icon">Ondernemend Denken</div>
              <p>Ik zoek actief naar oplossingen en benader problemen creatief.</p>
            </div>
            <div class="x-factor-item">
              <div class="x-factor-icon">Innovatief Denken</div>
              <p>Ik sta open voor nieuwe ideeën en technologieën, en ben bereid om te experimenteren.</p>
            </div>
            <div class="x-factor-item">
              <div class="x-factor-icon">Discipline</div>
              <p>Het respecteren van deadlines en het methodisch aanpakken van projecten heeft me geholpen om succesvol te zijn.</p>
            </div>
          </div>
          <p>
            De X-factor speelt bij dit alles dan ook een belangrijke rol. Zo heb ik tijdens dit traject geleerd over hoe belangrijk het is om constant 
            te groeien als persoon. Binnen deze X-factor herken ik mezelf dan ook vooral in het deel (em)passie en ondernemend en innovatief denken. 
            Tijdens deze drie jaar heb ik geleerd hoe het is om aan verschillende projecten te werken die gaan van kleine websites maken tot grote 
            groepsprojecten. Hierdoor is mijn passie voor IT alleen maar gegroeid en na elk project kreeg ik telkens weer het gevoel dat ik gegroeid 
            ben als persoon. Om deze projecten allemaal tot een goed einde te brengen was het tenslotte ook nodig om discipline te hebben en de deadlines 
            telkens te respecteren, dit is ook iets wat voorkomt in het werkleven dus het is zeker mooi om dit al mee te hebben.
          </p>
        </section>
  
        <section class="content-section conclusion">
          <h2>Toekomstvisie</h2>
          <p>
            Dankzij de lectoren die hun vak met passie gaven, mijn ouders die altijd achter me stonden en mezelf zie ik ook een positieve toekomst voor mezelf. 
            Ik heb namelijk een sterke basis opgedaan over de jaren maar ben zeker nog bereid om nieuwe dingen bij te leren en mezelf verder te blijven ontwikkelen.
          </p>
          <div class="thank-you">
            <p>Met dank aan iedereen die me op deze reis heeft begeleid!</p>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from './Navbar.vue';
  
  export default {
    name: 'ReflectionPage',
    components: {
      Navbar
    },
    methods: {
      goBack() {
        this.$router.push('/');
      }
    }
  }
  </script>
  
  <style scoped>
  .reflection-page {
    min-height: 100vh;
    padding-top: 60px;
    background: linear-gradient(145deg, #f6f6f6, #ffffff);
  }
  
  .back-button {
    display: inline-flex;
    align-items: center;
    margin: 2rem 0 0 2rem;
    padding: 0.5rem 1rem;
    background-color: #4a90e2;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: 500;
  }
  
  .back-button:hover {
    background-color: #357abd;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .back-button span {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
  
  .reflection-content {
    max-width: 1000px;
    margin: 2rem auto 4rem;
    padding: 2rem;
    background: white;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  }
  
  .reflection-content h1 {
    font-size: 2.5rem;
    color: #333;
    text-align: center;
    margin-bottom: 2rem;
    font-weight: 700;
  }
  
  .reflection-image {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 3rem;
  }
  
  .reflection-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }
  
  .reflection-image:hover img {
    transform: scale(1.03);
  }
  
  .intro-quote {
    background: #f8f9fa;
    padding: 1.5rem;
    border-left: 4px solid #4a90e2;
    margin-bottom: 2rem;
    font-style: italic;
    color: #555;
    font-size: 1.2rem;
    text-align: center;
  }
  
  .intro-quote blockquote {
    margin: 0;
  }
  
  .content-section {
    margin-bottom: 3.5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #eaeaea;
  }
  
  .content-section:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  
  .content-section h2 {
    color: #4a90e2;
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;
  }
  
  .content-section h2:after {
    content: '';
    position: absolute;
    width: 60%;
    height: 3px;
    background-color: #4a90e2;
    bottom: -8px;
    left: 0;
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin: 2rem 0;
  }
  
  .skill-category h3 {
    color: #333;
    margin-bottom: 1rem;
    font-size: 1.4rem;
    text-align: center;
  }
  
  .skill-list {
    list-style: none;
    padding: 0;
  }
  
  .skill-list li {
    display: flex;
    margin-bottom: 1rem;
    padding: 1rem;
    background: #f9f9f9;
    border-radius: 8px;
    transition: transform 0.3s;
  }
  
  .skill-list li:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }
  
  .skill-icon {
    font-size: 1.8rem;
    margin-right: 1rem;
  }
  
  .skill-details strong {
    display: block;
    margin-bottom: 0.2rem;
    color: #4a90e2;
  }
  
  .development-plans {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-top: 2rem;
  }
  
  .plan {
    background: #f9f9f9;
    padding: 1.5rem;
    border-radius: 8px;
    text-align: center;
    transition: transform 0.3s;
  }
  
  .plan:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }
  
  .plan-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .plan h4 {
    color: #4a90e2;
    margin-bottom: 0.5rem;
  }
  
  .x-factor {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin: 2rem 0;
  }
  
  .x-factor-item {
    background: #f0f7ff;
    padding: 1.5rem;
    border-radius: 8px;
    transition: transform 0.3s;
  }
  
  .x-factor-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }
  
  .x-factor-icon {
    font-weight: bold;
    color: #4a90e2;
    margin-bottom: 0.8rem;
    font-size: 1.2rem;
  }
  
  .conclusion {
    background: #f9f9f9;
    padding: 2rem;
    border-radius: 8px;
  }
  
  .thank-you {
    text-align: center;
    margin-top: 2rem;
    font-style: italic;
    color: #777;
  }
  
  @media (max-width: 768px) {
    .reflection-content {
      padding: 1.5rem;
      margin: 1.5rem 1rem 3rem;
    }
    
    .reflection-image {
      height: 250px;
      margin-bottom: 2rem;
    }
    
    .skills-grid,
    .x-factor {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
    .development-plans {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
    .content-section h2 {
      font-size: 1.6rem;
    }
  }
  </style>