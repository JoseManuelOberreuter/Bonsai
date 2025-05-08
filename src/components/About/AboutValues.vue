<template>
  <section class="values-section">
    <div class="container">
      <h2 class="center-title">Nuestros Valores</h2>
      <div class="values-grid">
        <div class="value-card">
          <div class="value-icon">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v3m0 4.5v3m0 4.5v3m-9-6h3m4.5 0h3m4.5 0h3" />
            </svg>
          </div>
          <h3 class="value-title">Armonía</h3>
          <p class="value-text">Buscamos el equilibrio perfecto entre estética y funcionalidad, creando espacios que fluyan naturalmente.</p>
        </div>
        <div class="value-card">
          <div class="value-icon">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.04 2.87a41.39 41.39 0 00-10.04 2.18c-1.6 4.17-1.6 8.73 0 12.9a41.39 41.39 0 0010.04 2.18m0-17.26a41.39 41.39 0 0110.04 2.18c1.6 4.17 1.6 8.73 0 12.9a41.39 41.39 0 01-10.04 2.18m0-17.26v17.26" />
            </svg>
          </div>
          <h3 class="value-title">Tradición</h3>
          <p class="value-text">Respetamos y honramos las técnicas tradicionales, adaptándolas al mundo contemporáneo.</p>
        </div>
        <div class="value-card">
          <div class="value-icon">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </div>
          <h3 class="value-title">Sostenibilidad</h3>
          <p class="value-text">Nos comprometemos con el medio ambiente utilizando prácticas y materiales sostenibles en cada proyecto.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.values-section {
  padding: 5rem 0;
  background-color: var(--color-gray-50);
}

.center-title {
  font-size: 2.5rem;
  color: var(--color-green-900);
  text-align: center;
  margin-bottom: 1rem;
}

.values-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;
}

.value-card {
  background-color: var(--color-white);
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.value-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background-color: var(--color-amber-400);
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  color: var(--color-green-900);
}

.value-icon .icon {
  width: 2rem;
  height: 2rem;
}

.value-title {
  font-size: 1.5rem;
  color: var(--color-green-900);
  margin-bottom: 1rem;
}

.value-text {
  color: var(--color-gray-600);
}

@media (min-width: 768px) {
  .values-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style> 