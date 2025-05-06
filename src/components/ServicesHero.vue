<template>
  <section class="services-hero">
    <div class="container">
      <div class="services-hero-content">
        <h1 class="services-hero-title">Nuestros Servicios</h1>
        <div class="accent-line"></div>
        <p class="services-hero-description">
          En Bonsai, cultivamos un enfoque personalizado para cada cliente. Descubre nuestros servicios exclusivos 
          diseñados para ayudarte a expresar tu estilo único.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-hero {
  padding: 8rem 0 5rem;
  background-color: var(--color-gray-50);
  background-image: url('https://images.unsplash.com/photo-1596702874230-b5706dfb5bc7?q=80&w=2148&auto=format&fit=crop');
  background-position: center;
  background-size: cover;
  position: relative;
}

.services-hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.9));
}

.services-hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.services-hero-title {
  font-size: 3rem;
  color: var(--color-green-900);
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
}

.accent-line {
  width: 5rem;
  height: 2px;
  background-color: var(--color-amber-400);
  margin: 0 auto 2rem;
}

.services-hero-description {
  font-size: 1.25rem;
  color: var(--color-gray-600);
  line-height: 1.6;
}

@media (min-width: 768px) {
  .services-hero-title {
    font-size: 4rem;
  }
}
</style> 