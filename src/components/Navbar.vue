<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="container">
      <div class="navbar-content">
        <div class="navbar-logo">
          <router-link to="/" class="logo">BONSAI</router-link>
        </div>
        <div class="navbar-links desktop-nav">
          <router-link 
            v-for="link in navLinks" 
            :key="link.path" 
            :to="link.path" 
            class="nav-link"
            :class="{ active: $route.path === link.path }"
          >
            {{ link.name }}
          </router-link>
        </div>
        <div class="mobile-toggle">
          <button @click="isOpen = !isOpen" type="button" aria-label="Menú">
            <svg v-if="!isOpen" class="icon" viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-if="isOpen" class="icon" viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Menú móvil -->
    <div v-if="isOpen" class="mobile-nav">
      <div class="container">
        <router-link 
          v-for="link in navLinks" 
          :key="link.path" 
          :to="link.path" 
          class="mobile-nav-link"
          :class="{ active: $route.path === link.path }"
          @click="isOpen = false"
        >
          {{ link.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const isOpen = ref(false)
const isScrolled = ref(false)
const route = useRoute()

const navLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Servicios', path: '/servicios' },
  { name: 'Galería', path: '/galeria' },
  { name: 'Contacto', path: '/contacto' }
]

const checkScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
  checkScroll() // Verificar la posición inicial
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: transparent;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  padding: 1rem 0;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-logo {
  flex-shrink: 0;
}

.logo {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 300;
  color: var(--color-green-900);
  text-decoration: none;
  letter-spacing: 0.2em;
}

.navbar-links {
  display: none;
}

.mobile-toggle {
  display: flex;
  align-items: center;
}

.mobile-toggle button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: var(--color-green-900);
}

.icon {
  width: 1.5rem;
  height: 1.5rem;
}

.mobile-nav {
  background-color: var(--color-white);
  padding: 1rem 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.mobile-nav-link {
  display: block;
  padding: 0.75rem 0;
  color: var(--color-gray-600);
  text-decoration: none;
  font-size: 1rem;
  border-bottom: 1px solid var(--color-gray-100);
  transition: color 0.3s ease;
}

.mobile-nav-link:last-child {
  border-bottom: none;
}

.mobile-nav-link.active {
  color: var(--color-green-900);
  font-weight: 500;
}

.mobile-nav-link:hover {
  color: var(--color-amber-600);
}

@media (min-width: 768px) {
  .navbar {
    padding: 1.5rem 0;
  }
  
  .navbar-links {
    display: flex;
    gap: 2.5rem;
  }
  
  .mobile-toggle {
    display: none;
  }
  
  .nav-link {
    position: relative;
    color: var(--color-green-900);
    text-decoration: none;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding-bottom: 0.25rem;
    transition: color 0.3s ease;
  }
  
  .nav-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: var(--color-amber-400);
    transition: width 0.3s ease;
  }
  
  .nav-link:hover {
    color: var(--color-amber-600);
  }
  
  .nav-link:hover::after {
    width: 100%;
  }
  
  .nav-link.active::after {
    width: 100%;
    background-color: var(--color-amber-500);
    height: 2px;
  }
}

/* Estilo cuando se hace scroll */
.navbar.scrolled {
  background-color: var(--color-white);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style> 