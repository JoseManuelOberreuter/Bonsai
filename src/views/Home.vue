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
import HeroSection from '../components/Home/HeroSection.vue'
import PhilosophySection from '../components/Home/PhilosophySection.vue'
import HomeGallery from '../components/Home/HomeGallery.vue'
import ServicesSection from '../components/Home/ServicesSection.vue'
import TestimonialsSection from '../components/Home/TestimonialsSection.vue'
import CallToAction from '../components/UI/CallToAction.vue'
import AppFooter from '../components/Layout/AppFooter.vue'
</script> 