<template>
  <div>
    <AboutHero />
    <AboutHistory />
    <AboutValues />
    <AboutTeam />
    
    <CallToAction 
      title="¿Quieres ser parte de nuestra historia?"
      description="Permítenos ayudarte a crear tu propio espacio de armonía y tranquilidad."
      primaryButtonText="Contáctanos"
      primaryButtonLink="/contacto"
      secondaryButtonText="Ver servicios"
      secondaryButtonLink="/servicios"
    />

    <AppFooter />
  </div>
</template>

<script setup>
import AboutHero from '../components/AboutHero.vue'
import AboutHistory from '../components/AboutHistory.vue'
import AboutValues from '../components/AboutValues.vue'
import AboutTeam from '../components/AboutTeam.vue'
import CallToAction from '../components/CallToAction.vue'
import AppFooter from '../components/AppFooter.vue'
</script> 