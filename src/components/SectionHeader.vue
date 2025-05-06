<template>
  <div class="section-header" :class="{ light: isLight }">
    <h2 class="section-title">{{ title }}</h2>
    <div class="accent-line"></div>
    <p v-if="description" class="section-description">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  isLight: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2rem;
  color: var(--color-green-900);
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
}

.section-description {
  max-width: 700px;
  margin: 0 auto;
  color: var(--color-gray-600);
}

.accent-line {
  width: 5rem;
  height: 2px;
  background-color: var(--color-amber-400);
  margin: 0 auto 1.5rem;
}

.light .section-title {
  color: var(--color-white);
}

.light .section-description {
  color: var(--color-white);
}

.light .accent-line {
  background-color: var(--color-amber-400);
}

@media (min-width: 768px) {
  .section-title {
    font-size: 2.5rem;
  }
}
</style> 