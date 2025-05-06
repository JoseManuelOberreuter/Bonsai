<template>
  <div class="social-links">
    <a v-for="social in socialLinks" :key="social.name" :href="social.url" class="social-link">
      <component :is="social.icon" />
      <span class="sr-only">{{ social.name }}</span>
    </a>
  </div>
</template>

<script setup>
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-vue-next'

defineProps({
  customClass: {
    type: String,
    default: ''
  }
})

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    url: '#'
  },
  {
    name: 'Facebook',
    icon: Facebook,
    url: '#'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: '#'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: '#'
  }
]
</script>

<style scoped>
.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-link {
  color: var(--color-gray-400);
  transition: color 0.3s ease;
}

.social-link:hover {
  color: var(--color-amber-500);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style> 