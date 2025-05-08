<template>
  <section class="about-section">
    <div class="container">
      <div class="section-grid">
        <div class="section-image">
          <div class="placeholder-image rounded-image">
            <span>Imagen de nuestra historia</span>
          </div>
        </div>
        <div class="section-content">
          <h2 class="section-title">Nuestra Historia</h2>
          <p class="section-text">
            Fundada en 2018, Bonsai nació de la pasión por crear espacios que inspiren tranquilidad y armonía. Lo que comenzó como un pequeño proyecto personal, se ha convertido en una reconocida empresa dedicada al diseño y mantenimiento de jardines zen.
          </p>
          <p class="section-text">
            A lo largo de estos años, hemos ayudado a cientos de clientes a transformar sus espacios en verdaderos refugios de paz, combinando técnicas ancestrales con diseños contemporáneos.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 5rem 0;
}

.section-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
}

.section-image {
  text-align: center;
}

.rounded-image {
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  height: auto;
}

.placeholder-image {
  background-color: var(--color-green-300);
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-green-900);
  font-weight: 500;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.section-title {
  font-size: 2.5rem;
  color: var(--color-green-900);
  margin-bottom: 1.5rem;
}

.section-text {
  color: var(--color-gray-600);
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

@media (min-width: 768px) {
  .section-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style> 