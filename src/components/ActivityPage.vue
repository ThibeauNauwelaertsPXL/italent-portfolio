<template>
    <div class="activities-page">
      <Navbar />
  
      <div class="back-button" @click="goBack">
        <span>&lsaquo;</span> Terug
      </div>
  
      <div class="activities-container">
        <h1>Alle Activiteiten</h1>
        
        <div class="filter-container">
          <div class="filter-tabs">
            <button 
              v-for="category in categories" 
              :key="category.id"
              :class="['filter-tab', { active: activeCategory === category.id }]"
              @click="setActiveCategory(category.id)"
            >
              <span class="tab-icon">{{ category.icon }}</span>
              {{ category.name }}
            </button>
          </div>
        </div>
  
        <div class="activities-count">
          <span>{{ filteredActivities.length }} activiteiten</span>
        </div>
  
        <div class="activities-grid">
          <div 
            v-for="(activity, index) in filteredActivities" 
            :key="index"
            class="activity-card"
            :class="activity.category"
          >
            <div class="card-header" :class="activity.category">
              <div class="card-category">
                <span class="category-icon">{{ getCategoryIcon(activity.category) }}</span>
                <span>{{ getCategoryName(activity.category) }}</span>
              </div>
              <div class="card-hours" v-if="activity.hours">{{ activity.hours }}</div>
            </div>
            
            <div class="card-content">
              <h3>{{ activity.title }}</h3>
              <p class="card-subtitle">{{ activity.subtitle }}</p>
              <p class="card-description">{{ activity.description }}</p>
              
              <div class="card-details">
                <div class="detail-item">
                  <span class="detail-icon">📍</span>
                  <span>{{ activity.location }}</span>
                </div>
                <div class="detail-item">
                  <span class="detail-icon">🗓️</span>
                  <span>{{ activity.date }}</span>
                </div>
              </div>
            </div>
            
            <div class="card-badge" v-if="activity.extra">Extra</div>
          </div>
        </div>
        
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from './Navbar.vue';
  
  export default {
    name: 'AllActivitiesPage',
    components: {
      Navbar
    },
    data() {
      return {
        activeCategory: 'all',
        categories: [
          { id: 'all', name: 'Alle', icon: '🔍' },
          { id: 'seminaries', name: 'Seminaries', icon: '🎓' },
          { id: 'innovation', name: 'Innovatie', icon: '💡' },
          { id: 'personal', name: 'Persoonlijke Ontwikkeling', icon: '👤' },
          { id: 'international', name: 'Internationalisering', icon: '🌍' }
        ],
        activities: [
          // Seminaries (verplicht)
          {
            category: 'seminaries',
            title: 'Uncanny',
            subtitle: 'Inleiding tot visuele generatieve AI – Stable Diffusion XL / ComfyUI / Controlnet',
            description: '',
            location: 'PXL',
            date: '12/03/2024',
            hours: '3u',
            extra: false
          },
          {
            category: 'seminaries',
            title: 'Resillion',
            subtitle: 'Code Katas',
            description: '',
            location: 'PXL',
            date: '26/03/2024',
            hours: '3u',
            extra: false
          },
          {
            category: 'seminaries',
            title: 'Ordina',
            subtitle: 'Clean code, TDD en Solid',
            description: '',
            location: 'PXL',
            date: '16/04/2024',
            hours: '3u',
            extra: false
          },
          {
            category: 'seminaries',
            title: 'MbarQ',
            subtitle: 'ChatGPT implementaties voor bedrijven',
            description: '',
            location: 'PXL',
            date: '23/04/2024',
            hours: '3u',
            extra: false
          },
          {
            category: 'seminaries',
            title: 'Tobania',
            subtitle: 'Scrum – A new programming language',
            description: '',
            location: 'PXL',
            date: '30/04/2024',
            hours: '3u',
            extra: false
          },
          {
            category: 'seminaries',
            title: 'NoComputer',
            subtitle: 'Prompt Engineering',
            description: '',
            location: 'PXL',
            date: '23/10/2024',
            hours: '3u',
            extra: false
          },
          {
            category: 'seminaries',
            title: 'IBM',
            subtitle: 'Discover the meeting point of GenAI, Prompt Engineering and Quantum Computing',
            description: '',
            location: 'PXL',
            date: '06/11/2024',
            hours: '4u',
            extra: false
          },
          {
            category: 'seminaries',
            title: 'ACA',
            subtitle: 'Behavior Driven Development – Writing tests made fun!',
            description: '',
            location: 'PXL',
            date: '27/11/2024',
            hours: '4u',
            extra: false
          },
          // Innovatie (verplicht)
          {
            category: 'innovation',
            title: 'Domain Driven Design',
            subtitle: 'Innovatieroute',
            description: 'Innovatieroute rond Domain Driven Design, bestaande uit drie sessies. De focus lag op Event Storming, het definiëren van Bounded Contexts en Aggregates, en het vertalen van domeinlogica naar een implementatie met domain events, value objects en messaging. Ook de Onion Architecture en persistence werden besproken.',
            location: 'Corda Campus - Corda 7 - CC713',
            date: '24/09/2024, 01/10/2024, 08/10/2024',
            hours: '17u',
            extra: false
          },
          {
            category: 'innovation',
            title: 'PXL-Hackathon Healthcare en Zorginnovatie',
            subtitle: 'Hackathon',
            description: 'Hackathon rond het ontwikkelen van een videogame voor mensen met een beperking.',
            location: 'Corda Campus – Corda 7 – CC711',
            date: '10/02/2025 – 11/02/2025',
            hours: '16u',
            extra: false,
            link: '/hackathon'
          },
          // Persoonlijke ontwikkeling (verplicht)
          {
            category: 'personal',
            title: 'Projectweek 2TIN',
            subtitle: '',
            description: 'Projectweek die als voorbereiding diende voor het ontwikkelen van een paardenfokkerij-applicatie. Tijdens deze week werd er extra uitleg gegeven door bedrijven zoals Cegeka maar ook door gasten zoals Ann Beckers die meer info gaf over netwerken.',
            location: 'PXL',
            date: '12/02/2024 – 16/02/2024',
            hours: '40u',
            extra: false,
            link: '/projectweek'
          },
          {
            category: 'personal',
            title: 'Brein aan het werk! Niet storen!',
            subtitle: 'POP-sessie 2TIN',
            description: '',
            location: 'PXL',
            date: '05/03/2024',
            hours: '2u',
            extra: false
          },
          {
            category: 'personal',
            title: 'POPping',
            subtitle: 'POP-sessie 2TIN',
            description: '',
            location: 'PXL',
            date: '05/03/2024',
            hours: '2u',
            extra: false
          },
          {
            category: 'personal',
            title: 'My Team and I',
            subtitle: 'POP-sessie 3TIN',
            description: '',
            location: 'PXL',
            date: '09/10/2024',
            hours: '2u',
            extra: false
          },
          // Internationalisering (verplicht)
          {
            category: 'international',
            title: 'BusIT-week – Bridging robotics and computer vision',
            subtitle: '',
            description: 'BUSit-week die ging over een AI over een racetrack laten rijden zonder te botsen.',
            location: 'PXL',
            date: '17/03/2024 – 22/03/2024',
            hours: '30u',
            extra: false,
            link: '/busit'
          },
          // Extra seminaries
          {
            category: 'seminaries',
            title: 'Inetum',
            subtitle: 'CoPilot Studio – Build intelligent connected chatbots leveraging the power of genAI',
            description: '',
            location: 'PXL',
            date: '04/12/2024',
            hours: '3u',
            extra: true
          }
        ]
      };
    },
    computed: {
      filteredActivities() {
        if (this.activeCategory === 'all') {
          return this.activities;
        }
        return this.activities.filter(activity => activity.category === this.activeCategory);
      }
    },
    methods: {
      setActiveCategory(categoryId) {
        this.activeCategory = categoryId;
      },
      getCategoryIcon(categoryId) {
        const category = this.categories.find(cat => cat.id === categoryId);
        return category ? category.icon : '🔍';
      },
      getCategoryName(categoryId) {
        const category = this.categories.find(cat => cat.id === categoryId);
        return category ? category.name : 'Onbekend';
      },
      goBack() {
        this.$router.push('/');
      },
      goToDetail(activity) {
        if (activity.link) {
          this.$router.push(activity.link);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .activities-page {
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
  
  .activities-container {
    max-width: 1200px;
    margin: 2rem auto 4rem;
    padding: 0 1.5rem;
  }
  
  h1 {
    font-size: 2.5rem;
    color: #333;
    text-align: center;
    margin-bottom: 2rem;
    font-weight: 700;
  }
  
  .filter-container {
    margin-bottom: 2rem;
  }
  
  .filter-tabs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
  
  .filter-tab {
    padding: 0.6rem 1rem;
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    font-size: 0.9rem;
  }
  
  .filter-tab.active {
    background: #4a90e2;
    color: white;
    border-color: #4a90e2;
    box-shadow: 0 4px 8px rgba(74, 144, 226, 0.2);
  }
  
  .filter-tab:hover:not(.active) {
    background: #f5f5f5;
    transform: translateY(-2px);
  }
  
  .tab-icon {
    margin-right: 0.5rem;
    font-size: 1.1rem;
  }
  
  .activities-count {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 0.9rem;
    color: #777;
  }
  
  .activities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 1.5rem;
  }
  
  .activity-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: all 0.3s;
    position: relative;
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }
  
  .activity-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
  
  .card-header {
    padding: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .card-header.seminaries {
    background: linear-gradient(to right, #FF9966, #FF5E62);
    color: white;
  }
  
  .card-header.innovation {
    background: linear-gradient(to right, #56CCF2, #2F80ED);
    color: white;
  }
  
  .card-header.personal {
    background: linear-gradient(to right, #1A2980, #26D0CE);
    color: white;
  }
  
  .card-header.international {
    background: linear-gradient(to right, #834d9b, #d04ed6);
    color: white;
  }
  
  .card-category {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 0.9rem;
  }
  
  .category-icon {
    margin-right: 0.4rem;
    font-size: 1.1rem;
  }
  
  .card-hours {
    background: rgba(255, 255, 255, 0.2);
    padding: 0.3rem 0.6rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
  }
  
  .card-content {
    padding: 1.5rem;
    flex: 1;
  }
  
  .card-content h3 {
    margin: 0 0 0.6rem;
    font-size: 1.4rem;
    color: #333;
    line-height: 1.3;
  }
  
  .card-subtitle {
    color: #4a90e2;
    font-size: 1rem;
    margin-bottom: 0.8rem;
    font-weight: 500;
  }
  
  .card-description {
    color: #555;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    line-height: 1.5;
  }
  
  .card-details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .detail-item {
    display: flex;
    align-items: center;
    font-size: 0.85rem;
    color: #666;
  }
  
  .detail-icon {
    margin-right: 0.5rem;
    font-size: 1rem;
  }
  
  .card-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: #FFC107;
    color: #333;
    padding: 0.3rem 0.6rem;
    border-radius: 20px;
    font-size: 0.7rem;
    font-weight: 600;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    .activities-grid {
      grid-template-columns: 1fr;
    }
    
    .filter-tabs {
      flex-direction: column;
      align-items: center;
    }
    
    .filter-tab {
      width: 100%;
      justify-content: center;
    }
  }
  </style>