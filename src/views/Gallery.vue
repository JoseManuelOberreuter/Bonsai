<template>
  <div>
    <GalleryHero />
    <GallerySection />
    <CallToAction 
      title="¿Te inspiraron nuestros trabajos?"
      description="Cada imagen representa una historia de transformación personal. Podemos crear juntos tu propia historia de estilo único y sofisticado."
      primaryButtonText="Crear mi historia"
      primaryButtonLink="/contacto"
      secondaryButtonText="Ver servicios"
      secondaryButtonLink="/servicios"
    />
    <AppFooter />
  </div>
</template>

<script setup>
import GalleryHero from '../components/GalleryHero.vue'
import GallerySection from '../components/GallerySection.vue'
import CallToAction from '../components/CallToAction.vue'
import AppFooter from '../components/AppFooter.vue'
</script> 