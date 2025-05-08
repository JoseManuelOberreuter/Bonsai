<template>
  <section class="team-section">
    <div class="container">
      <div class="team-header">
        <h2 class="center-title">Nuestro Equipo</h2>
        <div class="accent-line"></div>
        <p class="center-subtitle">Profesionales apasionados por crear estilos únicos que reflejan tu personalidad</p>
      </div>
      <div class="team-grid">
        <div class="team-member">
          <div class="member-image">
            <img 
              src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=774&auto=format&fit=crop"
              alt="Carlos Méndez - Estilista Principal" 
              class="rounded-image"
            />
            <div class="image-decoration"></div>
          </div>
          <h3 class="member-name">Carlos Méndez</h3>
          <p class="member-role">Estilista Principal</p>
          <p class="member-bio">Con más de 15 años de experiencia en cortes y coloración. Especialista en técnicas europeas y formado en las mejores academias de París.</p>
        </div>
        <div class="team-member">
          <div class="member-image">
            <img 
              src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=774&auto=format&fit=crop"
              alt="Laura Castillo - Colorista Creativa" 
              class="rounded-image"
            />
            <div class="image-decoration"></div>
          </div>
          <h3 class="member-name">Laura Castillo</h3>
          <p class="member-role">Colorista Creativa</p>
          <p class="member-bio">Maestra en técnicas de balayage y mechas personalizadas. Sus trabajos de color han sido reconocidos en revistas de moda nacionales.</p>
        </div>
        <div class="team-member">
          <div class="member-image">
            <img 
              src="https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?q=80&w=774&auto=format&fit=crop"
              alt="Miguel Soto - Especialista en Barbería" 
              class="rounded-image"
            />
            <div class="image-decoration"></div>
          </div>
          <h3 class="member-name">Miguel Soto</h3>
          <p class="member-role">Especialista en Barbería</p>
          <p class="member-bio">Combina técnicas tradicionales de barbería con tendencias modernas. Experto en cortes masculinos, arreglo de barba y tratamientos faciales.</p>
        </div>
      </div>
      <div class="team-cta">
        <a href="/contacto" class="btn-primary">
          Contacta con nosotros
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.team-section {
  padding: 6rem 0;
  background-color: var(--color-white);
}

.team-header {
  text-align: center;
  margin-bottom: 4rem;
}

.center-title {
  font-size: 2.5rem;
  font-family: var(--font-serif);
  color: var(--color-green-900);
  text-align: center;
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
}

.accent-line {
  width: 5rem;
  height: 2px;
  background-color: var(--color-amber-400);
  margin: 0 auto 1.5rem;
}

.center-subtitle {
  text-align: center;
  color: var(--color-gray-600);
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.05rem;
  line-height: 1.7;
}

.team-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
}

.team-member {
  text-align: center;
  transition: transform 0.3s ease;
}

.team-member:hover {
  transform: translateY(-10px);
}

.member-image {
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  transition: all 0.3s ease;
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

.team-member:hover .image-decoration {
  top: 10px;
  left: 10px;
  right: -10px;
  bottom: -10px;
  border-width: 2px;
}

.rounded-image {
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 0.5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.team-member:hover .rounded-image {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.member-name {
  font-size: 1.5rem;
  font-family: var(--font-serif);
  color: var(--color-green-900);
  margin-bottom: 0.5rem;
  letter-spacing: 0.02em;
}

.member-role {
  color: var(--color-amber-600);
  font-weight: 500;
  margin-bottom: 1rem;
  font-size: 1rem;
  letter-spacing: 0.05em;
}

.member-bio {
  color: var(--color-gray-600);
  max-width: 300px;
  margin: 0 auto;
  line-height: 1.7;
  font-size: 1rem;
}

.team-cta {
  text-align: center;
  margin-top: 2rem;
}

.btn-primary {
  background-color: var(--color-green-900);
  color: var(--color-white);
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.9rem 2.5rem;
  border-radius: 2rem;
  text-decoration: none;
  display: inline-block;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: all 0.3s ease;
  border: 2px solid var(--color-green-900);
}

.btn-primary:hover {
  background-color: transparent;
  color: var(--color-green-900);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  transform: translateY(-3px);
}

@media (min-width: 768px) {
  .team-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
}

@media (max-width: 767px) {
  .rounded-image {
    width: 200px;
    height: 200px;
  }
  
  .team-member {
    max-width: 350px;
    margin: 0 auto;
  }
}
</style> 