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
import AboutHero from '../components/About/AboutHero.vue'
import AboutHistory from '../components/About/AboutHistory.vue'
import AboutValues from '../components/About/AboutValues.vue'
import AboutTeam from '../components/About/AboutTeam.vue'
import CallToAction from '../components/UI/CallToAction.vue'
import AppFooter from '../components/Layout/AppFooter.vue'
</script> 