<template>
    <div class="project-page">
        <Navbar />

  
      <div class="back-button" @click="goBack">
        <span>&lsaquo;</span> Terug
      </div>
  
      <div class="project-content">
        <h1>BusIT-week – Bridging Robotics and Computer Vision</h1>
        
        <div class="project-image">
          <img :src="busitImage" alt="BUSit project">
        </div>
        
        <div class="project-details">
          <section class="content-section">
            <h2>Omschrijving</h2>
            <p>
              De BusIT-week op PXL met als onderwerp het samenbrengen van robotics en computer vision vond plaats van 
              17 tot en met 22 maart. De grote uitdaging die ons als groep te wachten stond was ervoor zorgen dat een 
              robot succesvol een ronde over een racebaan kon maken zonder dat deze tegen iets botste. Mijn eigen 
              doelstelling tijdens deze week was dan ook voornamelijk deze opdracht tot een goed einde te brengen, 
              aangezien ik nog nooit eerder iets met robotics had gedaan. Daarnaast wou ik zoveel mogelijk kennis 
              over dit veld opdoen tijdens deze week omdat dit niet echt iets was wat terug zou komen tijdens mijn opleiding.
            </p>
          </section>
          
          <section class="content-section">
            <h2>Kern</h2>
            <div class="timeline">
              <div class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h3>Zondag 17 maart</h3>
                  <p>
                    Op zondag 17 maart werden de gasten van andere scholen ontvangen aan het Youth Hostel in Hasselt, 
                    hierna hebben zij een korte rondleiding door de stad ontvangen van enkele medestudenten en werd hun 
                    uitgelegd hoe ze op verschillende plaatsen kunnen geraken.
                  </p>
                </div>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h3>Maandag 18 maart</h3>
                  <p>
                    De volgende dag was het dan aan mij en een medestudent om hun te gaan ophalen aan het Youth Hostel en 
                    hun te brengen naar PXL waar we de introductiedag volgden. In de voormiddag werd uitgelegd wat precies 
                    de opdracht van de week zou zijn en hoe de rest van de planning eruit zou zien. In de namiddag zijn we 
                    dan een teambuilding activiteit gaan volgen bij Brewery TAP in Hasselt waarbij ik mijn groepsgenoten beter 
                    leerde kennen. Hierna werd de dag afgesloten met een welkomstdiner aan PXL.
                  </p>
                </div>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h3>Dinsdag 19 maart</h3>
                  <p>
                    Op dinsdag was het dan tijd om te programmeren, hier werd een kleine Python cursus gegeven met alle functies 
                    die nodig zouden zijn om dit project tot een goed einde te stellen. Daarnaast had je een virtuele machine nodig 
                    met Linux zodat je dit ook kon opstarten. Na de lunch werd er dan nagedacht in groepjes over hoe we dit project 
                    zouden aanpakken, wie wat precies zou doen en wat ons einddoel zou zijn voor dit project. Hiernaast kregen we nog 
                    een andere opdracht, er werd gevraagd voor wat we robotics in de realiteit zouden kunnen gebruiken. Hierover hebben 
                    we dan ook in onze groepjes nagedacht en dan hebben we uiteindelijk het werk verdeeld. Op het einde van de dag hadden 
                    we al een aantal ideeën om te pitchen maar we wisten nog niet zeker welke de beste was dus hebben we dit een nacht laten rusten.
                  </p>
                </div>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h3>Woensdag 20 maart</h3>
                  <p>
                    Woensdagochtend hebben we dan gekozen voor een robot huisdier als concept omdat er veel mensen zijn die geen tijd hebben 
                    om voor een huisdier te zorgen of die zich alleen voelen vonden we dit een goed idee en hebben we dit ook gepitcht aan de 
                    rest van de groepen. In de namiddag stond een interessante workshop te wachten die ging over Internet of Things. Hier kregen 
                    we als groep apparaatjes die met elkaar zouden kunnen communiceren na wat programmeerwerk. Helaas is het me niet gelukt om dit 
                    werkende te krijgen omdat een onderdeel van het apparaatje blijkbaar defect was, toch was het een interessante workshop waarbij 
                    ik veel heb bijgeleerd over IoT waar ik voordien nog niet van had gehoord.
                  </p>
                </div>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h3>Donderdag 21 maart</h3>
                  <p>
                    De volgende dag diende dan om verder te werken aan de robot met zijn racebaan, deze dag was zeker nodig om dit project af te 
                    krijgen aangezien de vorige dagen vooral dienden als workshops en infosessies en er niet zoveel tijd werd besteed aan het ontwikkelen 
                    van het project. Deze dag werd dan afgesloten met een afscheidsdiner georganiseerd op PXL.
                  </p>
                </div>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h3>Vrijdag 22 maart</h3>
                  <p>
                    Op vrijdag mochten we de laatste wijzigingen aan het project doen en dan was het tijd om ons resultaat voor te stellen. Onze robot 
                    maakte succesvol een rondje rond de racebaan en we kregen enkel als commentaar dat dit iets sneller kon gaan. Nadat alle groepen hun 
                    project hadden gepitcht was dit ook meteen het einde van een prachtige week waarbij ik heel wat interessante kennis heb opgedaan over 
                    verschillende onderdelen zoals robotics, IoT en computer vision.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <section class="content-section">
            <h2>Reflectieopdracht</h2>
            <div class="reflection-grid">
              <div class="reflection-item">
                <h3>Uitdagingen</h3>
                <p>
                  Tijdens deze opdracht heb ik niet alleen gewerkt aan de robotracebaan maar ook aan het pitchen van een nieuw product wat te maken 
                  heeft met robotics. We hebben dit werk over alle teamleden verdeeld en iedereen heeft aan elk onderdeel wat bijgedragen. Een grote 
                  uitdaging die ik ben tegengekomen tijdens deze week was het nadenken over een nieuw product, hoewel dit gemakkelijk klinkt, kwamen 
                  we er als groep niet meteen uit wat het beste product zou zijn aangezien iedereen een andere mening of voorkeur had. Na wat overleg 
                  hebben we dit probleem opgelost door twee ideeën voor te stellen aan de organisator en zijn we er uiteindelijk uitgekomen dat het 
                  robot huisdier het beste zou zijn.
                </p>
              </div>
              
              <div class="reflection-item">
                <h3>Ervaring</h3>
                <p>
                  Ik vond de opdracht over het algemeen zeer uitdagend maar toch informatief omdat dit me de kans gaf om eens te werken met technologieën 
                  waar ik normaal niet echt mee in aanraking kom binnen mijn studierichting. Hoewel ik het een aangename ervaring vond, is dit niet echt 
                  iets waar ik mezelf in de toekomst zie werken en vind ik dat het bouwen van games, applicaties en websites meer mijn ding is dan IoT en robotics.
                </p>
              </div>
              
              <div class="reflection-item">
                <h3>Wat ik heb geleerd</h3>
                <p>
                  Toch heb ik heel wat bijgeleerd over deze onderdelen wat dit zoals ik al zei een zeer informatieve week maakte en mezelf extra duidelijkheid 
                  gaf in wat ik precies wil gaan doen na de afloop van mijn schoolcarrière.
                </p>
              </div>
              
              <div class="reflection-item">
                <h3>Mijn rol in het team</h3>
                <p>
                  Binnen mijn groep vond ik dat ik het meeste wist over het gebruik van Linux en Docker dankzij de opleidingsonderdelen die PXL aanbiedt. 
                  Hierdoor had ik al een grote voorsprong in het opzetten van het project en een basis werkende te krijgen. Mijn voornaamste zwakke punt was 
                  dan ook dat ik niet zoveel voorkennis over robotics had in vergelijking tot mijn groepsgenoten maar zij hielpen mij hierbij op weg dus dit 
                  was niet zo een groot probleem.
                </p>
              </div>
            </div>
            
            <div class="conclusion">
              <p>
                Ik heb ervoor gekozen om deze opdracht te bespreken omdat deze week voor mij een belangrijke leerervaring is. Aangezien dit niet heel veel te maken 
                had met applicatieontwikkeling gaf dit mij een uitstekende kans om eens een ander veld te ontdekken en om uiteindelijk tot de conclusie te 
                komen dat mijn keuze om applicatieontwikkeling te studeren de juiste was.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import busitImage from '../assets/busit.jpg';
import Navbar from './Navbar.vue';
  
  export default {
    name: 'BusitPage',
    components: {Navbar},
    data() {
      return {
        busitImage
      }
    },
    methods: {
      goBack() {
        this.$router.push('/');
      }
    }
  }
  </script>
  
  <style scoped>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 100;
  }
  
  .navbar-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0.5rem 2rem;
    max-width: 1400px;
    margin: 0 auto;
  }
  
  .logo img {
    height: 40px;
    width: auto;
    transition: transform 0.3s ease;
  }
  
  .logo img:hover {
    transform: scale(1.05);
  }
  
  .project-page {
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
  
  .project-content {
    max-width: 1000px;
    margin: 2rem auto 4rem;
    padding: 2rem;
    background: white;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  }
  
  .project-content h1 {
    font-size: 2.5rem;
    color: #333;
    text-align: center;
    margin-bottom: 2rem;
    font-weight: 700;
  }
  
  .project-image {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 3rem;
  }
  
  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }
  
  .project-image:hover img {
    transform: scale(1.03);
  }
  
  .project-details {
    line-height: 1.7;
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
  
  /* Timeline styling */
  .timeline {
    position: relative;
    padding-left: 2rem;
  }
  
  .timeline:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 2px;
    background: #e0e0e0;
  }
  
  .timeline-item {
    position: relative;
    padding-bottom: 2rem;
  }
  
  .timeline-item:last-child {
    padding-bottom: 0;
  }
  
  .timeline-marker {
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #4a90e2;
    left: -31px;
    top: 6px;
    border: 3px solid white;
    box-shadow: 0 0 0 2px #4a90e2;
  }
  
  .timeline-content {
    padding-left: 1rem;
  }
  
  .timeline-content h3 {
    color: #333;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
  
  /* Reflection grid */
  .reflection-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
  }
  
  .reflection-item {
    background-color: #f9f9f9;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.03);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .reflection-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.08);
  }
  
  .reflection-item h3 {
    color: #4a90e2;
    margin-bottom: 0.8rem;
    font-size: 1.3rem;
  }
  
  .conclusion {
    background-color: #f0f7ff;
    padding: 1.5rem;
    border-radius: 8px;
    border-left: 4px solid #4a90e2;
    margin-top: 2rem;
  }
  
  @media (max-width: 768px) {
    .project-content {
      padding: 1.5rem;
      margin: 1.5rem 1rem 3rem;
    }
    
    .project-image {
      height: 250px;
      margin-bottom: 2rem;
    }
    
    .reflection-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
    .content-section h2 {
      font-size: 1.6rem;
    }
    
    .timeline {
      padding-left: 1.5rem;
    }
    
    .timeline-marker {
      left: -26px;
    }
  }
  </style>