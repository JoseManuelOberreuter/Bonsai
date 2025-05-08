<template>
  <section class="values-section">
    <div class="container">
      <div class="values-header">
        <h2 class="center-title">Nuestros Valores</h2>
        <div class="accent-line"></div>
        <p class="values-description">Los principios que guían nuestro trabajo y nuestro compromiso con cada cliente.</p>
      </div>
      <div class="values-grid">
        <div class="value-card">
          <div class="value-icon">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 class="value-title">Armonía</h3>
          <p class="value-text">Buscamos el equilibrio perfecto entre estética y funcionalidad, creando espacios que fluyan naturalmente.</p>
          <div class="value-border"></div>
        </div>
        <div class="value-card">
          <div class="value-icon">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 class="value-title">Tradición</h3>
          <p class="value-text">Respetamos y honramos las técnicas tradicionales, adaptándolas al mundo contemporáneo.</p>
          <div class="value-border"></div>
        </div>
        <div class="value-card">
          <div class="value-icon">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 class="value-title">Sostenibilidad</h3>
          <p class="value-text">Nos comprometemos con el medio ambiente utilizando prácticas y materiales sostenibles en cada proyecto.</p>
          <div class="value-border"></div>
        </div>
      </div>
      <div class="values-cta">
        <a href="/servicios" class="btn-text">
          Descubre nuestros servicios
          <svg xmlns="http://www.w3.org/2000/svg" class="icon-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.values-section {
  padding: 6rem 0;
  background-color: var(--color-gray-50);
  position: relative;
}

.values-header {
  text-align: center;
  margin-bottom: 3.5rem;
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

.values-description {
  max-width: 700px;
  margin: 0 auto;
  color: var(--color-gray-600);
  font-size: 1.1rem;
  line-height: 1.7;
}

.values-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  margin-bottom: 3rem;
}

.value-card {
  background-color: var(--color-white);
  border-radius: 0.5rem;
  padding: 2.5rem 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border-bottom: 3px solid transparent;
}

.value-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  border-bottom: 3px solid var(--color-amber-400);
}

.value-border {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px;
  background-color: var(--color-amber-400);
  transition: width 0.3s ease;
}

.value-card:hover .value-border {
  width: 100%;
}

.value-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  background-color: var(--color-amber-400);
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  color: var(--color-green-900);
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.value-card:hover .value-icon {
  transform: scale(1.1);
  background-color: var(--color-amber-500);
}

.value-icon .icon {
  width: 2.5rem;
  height: 2.5rem;
  transition: transform 0.3s ease;
}

.value-card:hover .value-icon .icon {
  transform: rotate(10deg);
}

.value-title {
  font-size: 1.6rem;
  font-family: var(--font-serif);
  color: var(--color-green-900);
  margin-bottom: 1rem;
}

.value-text {
  color: var(--color-gray-600);
  line-height: 1.7;
  font-size: 1.05rem;
}

.values-cta {
  text-align: center;
  margin-top: 3rem;
}

.btn-text {
  display: inline-flex;
  align-items: center;
  background: none;
  border: none;
  color: var(--color-green-900);
  font-size: 0.925rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none;
  cursor: pointer;
  padding: 0;
  transition: color 0.3s ease;
}

.btn-text:hover {
  color: var(--color-amber-600);
}

.icon-arrow {
  width: 1.25rem;
  height: 1.25rem;
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
}

.btn-text:hover .icon-arrow {
  transform: translateX(0.25rem);
}

@media (min-width: 768px) {
  .values-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  
  .value-card {
    height: 100%;
  }
}
</style> 