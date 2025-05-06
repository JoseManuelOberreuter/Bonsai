<template>
  <section class="contact-hero">
    <div class="hero-background">
      <img 
        src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2036&auto=format&fit=crop" 
        alt="Stylish salon reception desk" 
      />
      <div class="hero-overlay"></div>
    </div>
    <div class="container contact-hero-content">
      <h1 class="contact-hero-title">Contáctanos</h1>
      <p class="contact-hero-description">
        Estamos aquí para responder a tus preguntas y ayudarte a encontrar el servicio 
        perfecto para tu estilo único. Ponte en contacto con nosotros.
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
.contact-hero {
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
  background: linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(255,255,255,0.9));
}

.contact-hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
}

.contact-hero-title {
  font-size: 3.5rem;
  font-weight: 300;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  color: var(--color-green-900);
}

.contact-hero-description {
  font-size: 1.125rem;
  color: var(--color-gray-600);
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto 2.5rem;
  letter-spacing: 0.05em;
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
  .contact-hero-title {
    font-size: 5rem;
  }
}
</style> 