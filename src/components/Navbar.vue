<template>
    <nav class="navbar">
      <div class="navbar-container">
        <div class="nav-links">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/activities" class="nav-link">Alle activiteiten</router-link>
          <router-link to="/reflection" class="nav-link">Eindreflectie</router-link>
        </div>
        <div class="logo">
          <img src="../assets/PXL.png" alt="PXL Logo">
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
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
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 2rem;
    max-width: 1400px;
    margin: 0 auto;
  }
  
  .nav-links {
    display: flex;
    gap: 1.5rem;
  }
  
  .nav-link {
    color: #333;
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 0;
    position: relative;
    transition: color 0.3s;
  }
  
  .nav-link::after {
    content: '';
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #4a90e2;
    transition: width 0.3s;
  }
  
  .nav-link:hover {
    color: #4a90e2;
  }
  
  .nav-link:hover::after {
    width: 100%;
  }
  
  .logo img {
    height: 40px;
    width: auto;
    transition: transform 0.3s ease;
  }
  
  .logo img:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    .navbar-container {
      padding: 0.5rem 1rem;
      flex-direction: column-reverse;
      gap: 0.5rem;
    }
    
    .nav-links {
      width: 100%;
      justify-content: center;
      margin-top: 0.5rem;
    }
  }
  </style>