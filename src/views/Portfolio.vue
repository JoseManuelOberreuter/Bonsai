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
import GalleryHero from '../components/Portfolio/GalleryHero.vue'
import GalleryGrid from '../components/Portfolio/GalleryGrid.vue'
import CallToAction from '../components/UI/CallToAction.vue'
import AppFooter from '../components/Layout/AppFooter.vue'
</script> 