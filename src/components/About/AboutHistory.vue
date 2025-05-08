<template>
  <section class="about-section">
    <div class="container">
      <div class="section-grid">
        <div class="section-image">
          <div class="image-container">
            <img 
              src="https://images.unsplash.com/photo-1507988914355-bf49fdbc7368?q=80&w=2069&auto=format&fit=crop"
              alt="Historia de Bonsai - Jardín zen con bonsái tradicional" 
              class="history-image rounded-image"
            />
            <div class="image-decoration"></div>
          </div>
        </div>
        <div class="section-content">
          <h2 class="section-title">Nuestra Historia</h2>
          <div class="accent-line"></div>
          <p class="section-text">
            Fundada en 2018, Bonsai nació de la pasión por crear espacios que inspiren tranquilidad y armonía. Lo que comenzó como un pequeño proyecto personal, se ha convertido en una reconocida empresa dedicada al diseño y mantenimiento de jardines zen.
          </p>
          <p class="section-text">
            A lo largo de estos años, hemos ayudado a cientos de clientes a transformar sus espacios en verdaderos refugios de paz, combinando técnicas ancestrales con diseños contemporáneos.
          </p>
          <a href="/contacto" class="history-cta">
            Agenda una cita
            <svg xmlns="http://www.w3.org/2000/svg" class="icon-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 5rem 0;
  background-color: var(--color-white);
}

.section-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

.section-image {
  text-align: center;
}

.image-container {
  position: relative;
  display: inline-block;
  width: 100%;
}

.image-decoration {
  content: '';
  position: absolute;
  top: 15px;
  left: 15px;
  right: -15px;
  bottom: -15px;
  border: 1px solid var(--color-amber-400);
  border-radius: 0.5rem;
  z-index: -1;
  transition: all 0.3s ease;
}

.image-container:hover .image-decoration {
  top: 10px;
  left: 10px;
  right: -10px;
  bottom: -10px;
}

.rounded-image {
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  height: auto;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.history-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 16/10;
}

.image-container:hover .rounded-image {
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.15);
  transform: translateY(-5px);
}

.section-title {
  font-size: 2.5rem;
  font-family: var(--font-serif);
  color: var(--color-green-900);
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
}

.accent-line {
  width: 5rem;
  height: 2px;
  background-color: var(--color-amber-400);
  margin-bottom: 1.5rem;
}

.section-text {
  color: var(--color-gray-600);
  margin-bottom: 1.5rem;
  line-height: 1.8;
  font-size: 1.05rem;
}

.history-cta {
  display: inline-flex;
  align-items: center;
  color: var(--color-green-900);
  font-size: 0.925rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: color 0.3s ease;
  margin-top: 1rem;
}

.history-cta:hover {
  color: var(--color-amber-600);
}

.icon-arrow {
  width: 1.25rem;
  height: 1.25rem;
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
}

.history-cta:hover .icon-arrow {
  transform: translateX(0.25rem);
}

@media (min-width: 768px) {
  .section-grid {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
  
  .history-image {
    aspect-ratio: 4/3;
  }
}
</style> 