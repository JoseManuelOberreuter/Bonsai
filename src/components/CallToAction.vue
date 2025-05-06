<template>
  <section class="cta-section">
    <div class="container">
      <div class="cta-content">
        <h2 class="cta-title">{{ title }}</h2>
        <div class="accent-line"></div>
        <p class="cta-description">
          {{ description }}
        </p>
        <div class="cta-buttons">
          <router-link :to="primaryButtonLink" class="btn btn-primary">{{ primaryButtonText }}</router-link>
          <router-link :to="secondaryButtonLink" class="btn-text" v-if="showSecondaryButton">
            {{ secondaryButtonText }}
            <svg class="icon-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '¿Listo para transformar tu estilo?'
  },
  description: {
    type: String,
    default: 'Descubre cómo nuestros servicios personalizados pueden ayudarte a expresar tu verdadera personalidad a través del estilo.'
  },
  primaryButtonText: {
    type: String,
    default: 'Contáctanos'
  },
  primaryButtonLink: {
    type: String,
    default: '/contacto'
  },
  secondaryButtonText: {
    type: String,
    default: 'Ver servicios'
  },
  secondaryButtonLink: {
    type: String,
    default: '/servicios'
  },
  showSecondaryButton: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped>
.cta-section {
  background-color: var(--color-gray-50);
  padding: 5rem 0;
}

.cta-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.cta-title {
  font-size: 2.5rem;
  color: var(--color-green-900);
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
}

.accent-line {
  width: 5rem;
  height: 2px;
  background-color: var(--color-amber-400);
  margin: 0 auto 2rem;
}

.cta-description {
  color: var(--color-gray-600);
  margin-bottom: 2.5rem;
  font-size: 1.125rem;
}

.cta-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.cta-buttons a {
  text-decoration: none;
}

@media (min-width: 640px) {
  .cta-buttons {
    flex-direction: row;
    justify-content: center;
  }
}
</style> 