<template>
  <div>
    <GalleryHero />
    <GalleryGrid />
    <CallToAction 
      title="¿Te inspiraron nuestros trabajos?"
      description="Cada imagen representa una historia de transformación personal. Podemos crear juntos tu propia historia de estilo único y sofisticado."
      primaryButtonText="Agendar una consulta"
      primaryButtonLink="/contacto"
      secondaryButtonText="Ver servicios"
      secondaryButtonLink="/servicios"
    />
    <AppFooter />
  </div>
</template>

<script setup>
import GalleryHero from '../components/GalleryHero.vue'
import GalleryGrid from '../components/GalleryGrid.vue'
import CallToAction from '../components/CallToAction.vue'
import AppFooter from '../components/AppFooter.vue'
</script> 