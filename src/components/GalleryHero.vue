<template>
  <section class="gallery-hero">
    <div class="container">
      <div class="gallery-hero-content">
        <h1 class="gallery-hero-title">Nuestra Galería</h1>
        <div class="accent-line"></div>
        <p class="gallery-hero-description">
          Explora nuestra colección de estilos y transformaciones. Cada imagen refleja nuestra pasión 
          por crear experiencias únicas y personalizadas para nuestros clientes.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery-hero {
  padding: 8rem 0 5rem;
  background-color: var(--color-gray-50);
  background-image: url('https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?q=80&w=2300&auto=format&fit=crop');
  background-position: center;
  background-size: cover;
  position: relative;
}

.gallery-hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.9));
}

.gallery-hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.gallery-hero-title {
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

.gallery-hero-description {
  font-size: 1.25rem;
  color: var(--color-gray-600);
  line-height: 1.6;
}

@media (min-width: 768px) {
  .gallery-hero-title {
    font-size: 4rem;
  }
}
</style> 