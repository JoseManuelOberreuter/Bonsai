<template>
  <section class="hero-section">
    <div class="hero-background">
      <img 
        src="https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=2787&auto=format&fit=crop" 
        alt="Luxury bonsai background" 
      />
      <div class="hero-overlay"></div>
    </div>
    <div class="container hero-content">
      <h1 class="hero-title">BONSAI</h1>
      <p class="hero-tagline">
        Cultivando elegancia a través del arte del estilo del pico
      </p>
      <div class="hero-buttons">
        <router-link to="/contacto" class="btn btn-primary">
          ¡Reserva Ya!
        </router-link>
      </div>
    </div>
    <div class="scroll-indicator">
      <ChevronDown class="icon-bounce" />
    </div>
  </section>
</template>

<script setup>
import { ChevronDown } from 'lucide-vue-next'
</script>

<style scoped>
.hero-section {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--color-white);
  overflow: hidden;
  --color-green-900-rgb: 34, 139, 34;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.hero-background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(255,255,255,0.9));
}

.hero-content {
  z-index: 1;
  max-width: 800px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 300;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  color: var(--color-green-900);
}

.hero-tagline {
  font-size: 1.125rem;
  max-width: 600px;
  margin: 0 auto 2.5rem;
  letter-spacing: 0.05em;
  color: var(--color-gray-600);
}

.hero-buttons {
  margin-bottom: 2rem;
}

.hero-buttons a {
  text-decoration: none;
  display: inline-block;
  padding: 1rem 2.5rem;
  font-size: 1.125rem;
  letter-spacing: 0.05em;
  border: 2px solid var(--color-green-900);
  background-color: transparent;
  color: var(--color-green-900);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border-radius: 50px;
}

.hero-buttons a::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  animation: shine 4s infinite;
}

@keyframes shine {
  0% {
    left: -100%;
  }
  20% {
    left: 100%;
  }
  100% {
    left: 100%;
  }
}

.hero-buttons a:hover {
  background-color: var(--color-green-900);
  color: var(--color-white);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.hero-buttons a:active {
  transform: translateY(0);
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  animation: bounce 2s infinite;
}

.icon-bounce {
  width: 2rem;
  height: 2rem;
  color: var(--color-green-900);
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 5rem;
  }
}
</style> 