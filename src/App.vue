<template>
  <div class="app-container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f8f9fa !important; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333 !important;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f8f9fa;
  color: #333333;
}

* {
  box-sizing: border-box;
}
</style>