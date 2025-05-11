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
            :class="[
              link.isButton ? 'nav-button' : 'nav-link',
              { active: $route.path === link.path }
            ]"
          >
            {{ link.name }}
          </router-link>
        </div>
        <div class="mobile-toggle">
          <button @click="handleHamburgerClick" :class="{ bump: isBumping }" type="button" aria-label="Menú">
            <svg class="icon" viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Menú móvil -->
    <transition name="slide-down">
      <div v-if="isOpen" class="mobile-nav">
        <div class="mobile-nav-content">
          <div class="mobile-nav-header">
            <button @click="isOpen = false" class="close-button" aria-label="Cerrar menú">
              <svg class="icon" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="mobile-nav-links">
            <router-link 
              v-for="link in navLinks" 
              :key="link.path" 
              :to="link.path" 
              :class="[
                'mobile-nav-link',
                { 'mobile-nav-button': link.isButton },
                { active: $route.path === link.path }
              ]"
              @click="isOpen = false"
            >
              {{ link.name }}
            </router-link>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const isOpen = ref(false)
const isScrolled = ref(false)
const route = useRoute()

// Animación bump para el botón hamburguesa
const isBumping = ref(false)
function handleHamburgerClick() {
  isOpen.value = !isOpen.value
  isBumping.value = true
  setTimeout(() => {
    isBumping.value = false
  }, 300)
}

const navLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'Servicios', path: '/servicios' },
  { name: 'Portafolio', path: '/portafolio' },
  { name: 'Contacto', path: '/contacto', isButton: true }
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
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
}

.logo:hover {
  transform: translateY(-2px);
  color: var(--color-amber-600);
}

.logo:active {
  transform: translateY(1px);
  color: var(--color-amber-700);
}

.logo::after {
  content: '';
  position: absolute;
  width: 0;
  height: 1px;
  bottom: -2px;
  left: 0;
  background-color: var(--color-amber-400);
  transition: width 0.3s ease;
}

.logo:hover::after {
  width: 100%;
}

.navbar-links {
  display: none;
  height: 40px;
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--color-white);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  opacity: 0;
  animation: fadeIn 0.3s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.mobile-nav-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.98));
}

.mobile-nav-header {
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
}

.close-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: var(--color-green-900);
  transition: transform 0.3s ease;
}

.close-button:hover {
  transform: rotate(90deg);
}

.mobile-nav-links {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}

.mobile-nav-link {
  display: block;
  color: var(--color-green-900);
  text-decoration: none;
  font-family: var(--font-serif);
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;
}

.mobile-nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: var(--color-amber-400);
  transition: width 0.3s ease;
}

.mobile-nav-link:hover::after {
  width: 100%;
}

.mobile-nav-link.active {
  color: var(--color-green-900);
  font-weight: 400;
}

.mobile-nav-link.active::after {
  width: 100%;
  background-color: var(--color-amber-500);
  height: 2px;
}

.mobile-nav-button {
  display: inline-block;
  background-color: transparent;
  color: var(--color-green-900) !important;
  border: 1px solid var(--color-green-900);
  border-radius: 30px;
  padding: 1rem 2.5rem;
  margin-top: 1rem;
  text-align: center;
  font-family: var(--font-sans);
  font-weight: 400;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: all 0.3s ease;
}

.mobile-nav-button.active,
.mobile-nav-button:hover {
  background-color: var(--color-green-900);
  color: var(--color-white) !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

@media (min-width: 768px) {
  .navbar {
    padding: 1.5rem 0;
  }
  
  .navbar-links {
    display: flex;
    align-items: center;
    gap: 2rem;
    height: 40px;
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
    display: inline-flex;
    align-items: center;
    height: 100%;
    margin-bottom: 0;
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

.nav-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: var(--color-green-900);
  text-decoration: none;
  font-size: 0.9rem;
  text-transform: none;
  letter-spacing: normal;
  padding: 8px 1.4rem;
  border: 1px solid var(--color-green-900);
  border-radius: 30px;
  transition: all 0.3s ease;
  font-weight: 500;
  margin-left: 0.5rem;
  box-sizing: border-box;
  vertical-align: middle;
}

.nav-button:hover {
  background-color: var(--color-green-900);
  color: var(--color-white);
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.nav-button.active {
  background-color: var(--color-green-900);
  color: var(--color-white);
}

/* Animación slide-down para el menú móvil */
.slide-down-enter-active, .slide-down-leave-active {
  transition: all 0.7s cubic-bezier(0.86, 0, 0.07, 1);
}
.slide-down-enter-from, .slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
.slide-down-enter-to, .slide-down-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.mobile-toggle button.bump {
  animation: fade-scale 0.3s cubic-bezier(0.77, 0, 0.175, 1);
}

@keyframes fade-scale {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.08);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style> 