<template>
  <section class="testimonials-section">
    <div class="container">
      <SectionHeader 
        title="Experiencias de Clientes" 
        isLight
      />
      
      <div class="testimonials-grid">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-card">
          <Quote class="quote-icon" />
          <p class="testimonial-text">{{ testimonial.quote }}</p>
          <div class="testimonial-author">
            <h4>{{ testimonial.name }}</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '../UI/SectionHeader.vue'
import { Quote } from 'lucide-vue-next'

const testimonials = [
  {
    quote: "Trabajar con Bonsai transformó no solo mi apariencia, sino mi confianza. Su atención al detalle y comprensión del estilo personal no tiene igual.",
    name: "Alexandra Chen"
  },
  {
    quote: "El equipo de Bonsai tiene una extraordinaria capacidad para captar tu esencia y elevarla. Cada sesión se siente como un viaje de autodescubrimiento.",
    name: "Marcus Reynolds"
  },
  {
    quote: "Su enfoque holístico del estilismo va más allá de las tendencias. Crean un look atemporal que se siente auténticamente tuyo, solo que mejor.",
    name: "Sophia Williams"
  }
]
</script>

<style scoped>
.testimonials-section {
  background-color: var(--color-green-900);
  color: var(--color-white);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.testimonial-card {
  background-color: var(--color-green-800);
  padding: 2rem;
  border-radius: 0.5rem;
  position: relative;
}

.quote-icon {
  width: 2.5rem;
  height: 2.5rem;
  color: var(--color-amber-400);
  margin-bottom: 1rem;
  opacity: 0.5;
}

.testimonial-text {
  margin: 1.5rem 0;
  font-style: italic;
  color: var(--color-white);
  line-height: 1.6;
}

.testimonial-author h4 {
  font-weight: 500;
  color: var(--color-white);
  text-align: center;
}

@media (min-width: 768px) {
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .testimonials-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style> 