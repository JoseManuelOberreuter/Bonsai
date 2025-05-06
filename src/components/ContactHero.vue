<template>
  <section class="contact-hero">
    <div class="container">
      <div class="contact-hero-content">
        <h1 class="contact-hero-title">Contáctanos</h1>
        <div class="accent-line"></div>
        <p class="contact-hero-description">
          Estamos aquí para responder a tus preguntas y ayudarte a encontrar el servicio 
          perfecto para tu estilo único. Ponte en contacto con nosotros.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-hero {
  padding: 8rem 0 5rem;
  background-color: var(--color-gray-50);
  background-image: url('https://images.unsplash.com/photo-1612450622847-ee8ac4f4ac95?q=80&w=2236&auto=format&fit=crop');
  background-position: center;
  background-size: cover;
  position: relative;
}

.contact-hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.9));
}

.contact-hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.contact-hero-title {
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

.contact-hero-description {
  font-size: 1.25rem;
  color: var(--color-gray-600);
  line-height: 1.6;
}

@media (min-width: 768px) {
  .contact-hero-title {
    font-size: 4rem;
  }
}
</style> 