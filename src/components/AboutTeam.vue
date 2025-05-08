<template>
  <section class="team-section">
    <div class="container">
      <h2 class="center-title">Nuestro Equipo</h2>
      <p class="center-subtitle">Profesionales apasionados por crear espacios que inspiran</p>
      <div class="team-grid">
        <div class="team-member">
          <div class="member-image">
            <div class="placeholder-image rounded-image">
              <span>Carlos Méndez</span>
            </div>
          </div>
          <h3 class="member-name">Carlos Méndez</h3>
          <p class="member-role">Director Creativo</p>
          <p class="member-bio">Con más de 15 años de experiencia en diseño de jardines zen y estudios en paisajismo tradicional japonés.</p>
        </div>
        <div class="team-member">
          <div class="member-image">
            <div class="placeholder-image rounded-image">
              <span>Laura Castillo</span>
            </div>
          </div>
          <h3 class="member-name">Laura Castillo</h3>
          <p class="member-role">Especialista en Bonsái</p>
          <p class="member-bio">Maestra en el arte del bonsái, ha perfeccionado sus técnicas estudiando con maestros tradicionales en Japón.</p>
        </div>
        <div class="team-member">
          <div class="member-image">
            <div class="placeholder-image rounded-image">
              <span>Miguel Soto</span>
            </div>
          </div>
          <h3 class="member-name">Miguel Soto</h3>
          <p class="member-role">Arquitecto Paisajista</p>
          <p class="member-bio">Combina su formación en arquitectura moderna con un profundo respeto por las tradiciones de diseño oriental.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.team-section {
  padding: 5rem 0;
}

.center-title {
  font-size: 2.5rem;
  color: var(--color-green-900);
  text-align: center;
  margin-bottom: 1rem;
}

.center-subtitle {
  text-align: center;
  color: var(--color-gray-600);
  max-width: 700px;
  margin: 0 auto 3rem;
}

.team-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

.team-member {
  text-align: center;
}

.member-image {
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
}

.member-image::after {
  content: '';
  position: absolute;
  top: 10px;
  left: 10px;
  right: -10px;
  bottom: -10px;
  border: 1px solid var(--color-amber-400);
  border-radius: 0.5rem;
  z-index: -1;
}

.placeholder-image {
  background-color: var(--color-green-300);
  height: 180px;
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-green-900);
  font-weight: 500;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
}

.rounded-image {
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  height: auto;
}

.member-name {
  font-size: 1.5rem;
  color: var(--color-green-900);
  margin-bottom: 0.25rem;
}

.member-role {
  color: var(--color-amber-600);
  font-weight: 500;
  margin-bottom: 1rem;
}

.member-bio {
  color: var(--color-gray-600);
  max-width: 300px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .team-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style> 