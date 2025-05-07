<template>
  <section class="services-section">
    <div class="container">
      <SectionHeader 
        title="Nuestros Servicios" 
        description="Experiencias personalizadas diseñadas para elevar tu estilo personal con precisión y cuidado."
      />
      
      <div class="services-grid">
        <div v-for="(service, index) in services" :key="index" class="service-card">
          <component :is="service.icon" class="service-icon" />
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-description">{{ service.description }}</p>
          <p class="service-price">{{ service.price }}</p>
        </div>
      </div>

      <div class="services-cta">
        <p>¿Interesado en nuestros servicios?</p>
        <router-link to="/contacto" class="btn btn-primary">Solicitar una consulta</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from './SectionHeader.vue'
import { Scissors, Sparkles, Camera, Users, ArrowRight, Clock } from 'lucide-vue-next'

const services = [
  {
    icon: Scissors,
    title: 'Corte y Estilo Signature',
    description: 'Corte personalizado con consulta detallada y acabado de estilismo premium.',
    price: 'Desde $18.000'
  },
  {
    icon: Sparkles,
    title: 'Tinte Completo',
    description: 'Coloración uniforme para todo el cabello, incluye lavado y peinado.',
    price: 'Desde $25.000'
  },
  {
    icon: Users,
    title: 'Peinado para Novias',
    description: 'Incluye prueba previa y peinado el día del evento.',
    price: 'Desde $60.000'
  },
  {
    icon: Camera,
    title: 'Mechas / Highlights',
    description: 'Mechas para dar dimensión y profundidad a tu color natural.',
    price: 'Desde $35.000'
  },
  {
    icon: ArrowRight,
    title: 'Alisado Brasileño',
    description: 'Reduce el encrespamiento y alisa el cabello por hasta 3 meses.',
    price: 'Desde $75.000'
  },
  {
    icon: Clock,
    title: 'Hidratación Profunda',
    description: 'Tratamiento intensivo para cabello seco o dañado.',
    price: '$18.000'
  }
]
</script>

<style scoped>
.services-section {
  background-color: var(--color-white);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
}

.service-card {
  padding: 2rem;
  border: 1px solid var(--color-gray-100);
  border-radius: 0.5rem;
  background-color: var(--color-white);
  transition: box-shadow 0.3s ease;
}

.service-card:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.service-icon {
  width: 2.5rem;
  height: 2.5rem;
  color: var(--color-amber-500);
  margin-bottom: 1rem;
}

.service-title {
  font-size: 1.25rem;
  color: var(--color-green-900);
  margin-bottom: 0.75rem;
}

.service-description {
  color: var(--color-gray-600);
  margin-bottom: 1rem;
}

.service-price {
  color: var(--color-amber-600);
  font-weight: 500;
}

.services-cta {
  text-align: center;
  margin-top: 2rem;
}

.services-cta p {
  font-size: 1.125rem;
  color: var(--color-gray-600);
  margin-bottom: 1.5rem;
}

.services-cta a {
  text-decoration: none;
}

@media (min-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .services-cta {
    margin-top: 3rem;
  }
}

@media (min-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style> 