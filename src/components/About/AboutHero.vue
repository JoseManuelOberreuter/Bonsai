<template>
  <section class="about-hero">
    <div class="hero-background">
      <img 
        src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop"
        alt="Jardín zen con bonsai" 
      />
      <div class="hero-overlay"></div>
    </div>
    <div class="container about-hero-content">
      <h1 class="about-hero-title">Nosotros</h1>
      <p class="about-hero-description">
        Somos un equipo de apasionados por el arte del bonsái y los jardines zen, 
        dedicados a crear espacios de armonía y tranquilidad que reflejen la belleza 
        de la naturaleza en su forma más pura.
      </p>
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
.about-hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
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
  background: linear-gradient(to bottom, 
    rgba(255, 255, 255, 0.4), 
    rgba(255, 255, 255, 0.85)
  );
}

.about-hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
  padding: 0 1.5rem;
}

.about-hero-title {
  font-family: var(--font-serif);
  font-size: 3.5rem;
  font-weight: 300;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  color: var(--color-green-900);
}

.about-hero-description {
  font-family: var(--font-sans);
  font-size: 1.125rem;
  color: var(--color-gray-700);
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto 2.5rem;
  letter-spacing: 0.025em;
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
  color: var(--color-amber-500);
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
  .about-hero-title {
    font-size: 5rem;
  }
}
</style> 