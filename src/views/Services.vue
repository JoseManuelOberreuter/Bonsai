<template>
  <div>
    <ServicesHero />
    
    <section class="salon-services">
      <div class="container">
        <!-- Usamos el nuevo componente para categorías y servicios -->
        <ServiceCategories />

        <!-- Información adicional -->
        <div class="additional-info">
          <div class="info-card">
            <h3><ClockIcon class="info-icon" /> Horario</h3>
            <p>Martes - Sábado: 9:00 - 20:00</p>
            <p>Domingo - Lunes: Cerrado</p>
          </div>
          <div class="info-card">
            <h3><InfoIcon class="info-icon" /> Política de Citas</h3>
            <p>Para garantizar el mejor servicio, recomendamos reservar con anticipación. Se requiere un depósito para servicios premium.</p>
          </div>
        </div>
      </div>
    </section>
    
    <CallToAction 
      title="¿Interesado en nuestros servicios?"
      description="Nuestros estilistas profesionales están listos para atenderte. Contáctanos para más información sobre cualquiera de nuestros servicios."
      primaryButtonText="Contactar"
      primaryButtonLink="/contacto"
      :showSecondaryButton="false"
    />
    <AppFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ServicesHero from '../components/Services/ServicesHero.vue'
import ServiceCategories from '../components/Services/ServiceCategories.vue'
import CallToAction from '../components/UI/CallToAction.vue'
import AppFooter from '../components/Layout/AppFooter.vue'
import { ClockIcon, InfoIcon } from 'lucide-vue-next'
</script>

<style scoped>
.salon-services {
  padding: 5rem 0;
  background-color: var(--color-white);
}

.additional-info {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 5rem;
}

.info-card {
  background-color: var(--color-gray-50);
  padding: 1.5rem;
  border-radius: 0.5rem;
  text-align: center;
}

.info-card h3 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  color: var(--color-green-900);
  margin-bottom: 1rem;
}

.info-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: var(--color-amber-500);
}

.info-card p {
  color: var(--color-gray-600);
  margin-bottom: 0.5rem;
}

.info-card p:last-child {
  margin-bottom: 0;
}

@media (min-width: 768px) {
  .additional-info {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style> 