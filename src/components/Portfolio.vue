<template>
  <div>
    <Navbar />

    <section class="portfolio-container">
      <h1 class="portfolio-title">Mijn portfolio</h1>
      
      <div class="carousel">
        <button class="carousel-btn prev" @click="prevSlide">
          <span>&lsaquo;</span>
        </button>
        
        <div class="carousel-content">
          <div 
            v-for="(project, index) in projects" 
            :key="index"
            class="carousel-item"
            :class="{ active: index === currentIndex }"
            @click="goToProject(project.link)"
          >
            <img :src="project.image" :alt="project.title">
            <div class="project-info">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
            </div>
          </div>
        </div>
        
        <button class="carousel-btn next" @click="nextSlide">
          <span>&rsaquo;</span>
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import busitImage from '../assets/busit.jpg';
import hackathonImage from '../assets/hackathon.jpg';
import Navbar from './Navbar.vue';

export default {
  name: 'Portfolio',
  components: {
    Navbar
  },
  data() {
    return {
      currentIndex: 1,
      projects: [
        {
          title: "BUSit-week",
          description: "BUSit-week die ging over een AI over een racetrack laten rijden zonder te botsen",
          image: busitImage,
          link: "#project1"
        },
        {
          title: "PXL-Hackathon Healthcare en Zorginnovatie",
          description: "Hackathon rond het ontwikkelen van een videogame voor mensen met een beperking",
          image: hackathonImage,
          link: "#project2"
        },
        {
          title: "Projectweek 2TIN",
          description: "Projectweek die als voorbereiding diende voor het ontwikkelen van een paardenfokkerij-applicatie. ",
          image: "https://via.placeholder.com/400x300/ff6b6b/ffffff?text=Project+3",
          link: "#project3"
        }
      ]
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    },
    goToProject(link) {
      if (link === "#project1") {
        this.$router.push('/busit');
      } else if (link === "#project2") {
        this.$router.push('/hackathon');
      } else if (link === "#project3") {
        this.$router.push('/projectweek');
      } else {
        console.log(`Navigation to ${link} not yet implemented`);
      }
    }
  }
};
</script>

<style scoped>
.portfolio-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 4rem 2rem 2rem;
  animation: fadeIn 1s ease-in-out;
  background: linear-gradient(145deg, #f6f6f6, #ffffff);
  margin-top: 60px; /* Add space for the navbar */
}

.portfolio-title {
  font-size: 3rem;
  color: #333;
  font-weight: 700;
  margin-bottom: 3rem;
  transition: transform 0.3s;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.portfolio-title:hover {
  transform: scale(1.05);
  color: #4a90e2;
}

.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  position: relative;
}

.carousel-content {
  display: flex;
  overflow: hidden;
  width: 80%;
  height: 400px;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.carousel-item {
  min-width: 100%;
  height: 100%;
  transition: transform 0.5s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  position: absolute;
  transform: scale(0.8);
  z-index: 1;
}

.carousel-item.active {
  opacity: 1;
  position: relative;
  transform: scale(1);
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  display: block;
}

.carousel-item:hover img {
  transform: scale(1.05);
}

.project-info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3), transparent);
  color: white;
  padding: 1.5rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  z-index: 5;
}

.carousel-item:hover .project-info {
  transform: translateY(0);
}

.project-info h3 {
  margin: 0 0 0.5rem;
  font-size: 1.5rem;
}

.project-info p {
  margin: 0;
  font-size: 1rem;
}

.carousel-btn {
  background: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  z-index: 10;
  margin: 0 1rem;
}

.carousel-btn span {
  font-size: 2rem;
  line-height: 1;
  color: #333;
}

.carousel-btn:hover {
  background: #4a90e2;
  transform: scale(1.1);
}

.carousel-btn:hover span {
  color: white;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .portfolio-container {
    padding-top: 6rem;
  }
  
  .carousel-content {
    width: 100%;
    height: 300px;
  }
  
  .carousel-btn {
    width: 40px;
    height: 40px;
  }
}
</style>