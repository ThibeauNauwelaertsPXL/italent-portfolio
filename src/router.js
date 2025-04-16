import { createRouter, createWebHistory } from 'vue-router'
import Portfolio from './components/Portfolio.vue'
import BusitPage from './components/BusitPage.vue'
import HackathonPage from './components/HackathonPage.vue'
import ProjectweekPage from './components/ProjectweekPage.vue'
import ReflectionPage from './components/ReflectionPage.vue'
import AllActivitiesPage from './components/ActivityPage.vue'

const routes = [
  {
    path: '/',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/busit',
    name: 'BusitPage',
    component: BusitPage
  },
  {
    path: '/hackathon',
    name: 'HackathonPage',
    component: HackathonPage
  },
  {
    path: '/projectweek',
    name: 'ProjectweekPage',
    component: ProjectweekPage
  },
  {
    path: '/reflection',
    name: 'ReflectionPage',
    component: ReflectionPage
  },
  {
    path: '/activities',
    name: 'AllActivitiesPage',
    component: AllActivitiesPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router