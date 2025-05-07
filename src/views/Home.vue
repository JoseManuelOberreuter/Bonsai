<template>
  <div>
    <HeroSection />
    <PhilosophySection />
    <HomeGallery />
    <ServicesSection />
    <TestimonialsSection />
    <CallToAction 
      title="¿Listo para transformar tu estilo?"
      description="Descubre cómo nuestros servicios personalizados pueden ayudarte a expresar tu verdadera personalidad a través del estilo."
      primaryButtonText="Contáctanos ahora"
      primaryButtonLink="/contacto"
      secondaryButtonText="Ver servicios"
      secondaryButtonLink="/servicios"
    />
    <AppFooter />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import PhilosophySection from '../components/PhilosophySection.vue'
import HomeGallery from '../components/HomeGallery.vue'
import ServicesSection from '../components/ServicesSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import CallToAction from '../components/CallToAction.vue'
import AppFooter from '../components/AppFooter.vue'
</script> 