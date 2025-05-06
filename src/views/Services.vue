<template>
  <div>
    <ServicesHero />
    <ServicesSection />
    <CallToAction 
      title="¿Encontraste el servicio ideal para ti?"
      description="Nuestros servicios están diseñados para adaptarse a tus necesidades específicas. Contáctanos para conocer más detalles y agendar una consulta personalizada."
      primaryButtonText="Solicitar consulta"
      primaryButtonLink="/contacto"
      :showSecondaryButton="false"
    />
    <AppFooter />
  </div>
</template>

<script setup>
import ServicesHero from '../components/ServicesHero.vue'
import ServicesSection from '../components/ServicesSection.vue'
import CallToAction from '../components/CallToAction.vue'
import AppFooter from '../components/AppFooter.vue'
</script> 