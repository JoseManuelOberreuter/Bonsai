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
    </div>
  </section>
</template>

<script setup>
import SectionHeader from './SectionHeader.vue'
import { Scissors, Sparkles, Camera, Users, ArrowRight, Clock } from 'lucide-vue-next'

const services = [
  {
    icon: Scissors,
    title: 'Estilismo Signature',
    description: 'Nuestro servicio de estilismo integral adaptado a tus características y preferencias únicas.',
    price: 'Desde $250'
  },
  {
    icon: Sparkles,
    title: 'Consulta de Imagen',
    description: 'Un análisis detallado de tu estilo personal, con recomendaciones para mejorarlo.',
    price: 'Desde $350'
  },
  {
    icon: Users,
    title: 'Preparación para Eventos',
    description: 'Estilismo completo para ocasiones especiales, asegurando que te veas y sientas excepcional.',
    price: 'Desde $500'
  },
  {
    icon: Camera,
    title: 'Estilismo Editorial',
    description: 'Estilismo profesional para sesiones fotográficas, campañas y apariciones en medios.',
    price: 'Presupuesto Personalizado'
  },
  {
    icon: ArrowRight,
    title: 'Curación de Vestuario',
    description: 'Selección y organización experta de tu vestuario personal para un estilo sin esfuerzo.',
    price: 'Desde $600'
  },
  {
    icon: Clock,
    title: 'Actualización Estacional',
    description: 'Actualiza tu look con las últimas tendencias de temporada manteniendo tu estilo distintivo.',
    price: 'Desde $300'
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

@media (min-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style> 