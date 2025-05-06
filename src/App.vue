<template>
  <div class="app-container">
    <HeroSection />
    <PhilosophySection />
    <GallerySection />
    <ServicesSection />
    <TestimonialsSection />
    <ContactSection />
    <AppFooter />
  </div>
</template>

<script setup>
import HeroSection from './components/HeroSection.vue'
import PhilosophySection from './components/PhilosophySection.vue'
import GallerySection from './components/GallerySection.vue'
import ServicesSection from './components/ServicesSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Montserrat:wght@300;400;500&display=swap');

/* Variables */
:root {
  --color-green-900: #1a3a2a;
  --color-green-800: #2a4a3a;
  --color-green-300: #a3c1b0;
  --color-amber-600: #d97706;
  --color-amber-500: #f59e0b;
  --color-amber-400: #fbbf24;
  --color-white: #ffffff;
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-400: #9ca3af;
  --color-gray-500: #6b7280;
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;
  --font-sans: 'Montserrat', sans-serif;
  --font-serif: 'Cormorant Garamond', serif;
}

/* Reset & Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-sans);
  color: var(--color-gray-700);
  line-height: 1.5;
}

h1, h2, h3, h4 {
  font-family: var(--font-serif);
  font-weight: 300;
}

img {
  max-width: 100%;
  height: auto;
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

/* Layout */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Section Styles */
section {
  padding: 5rem 0;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-primary {
  background-color: var(--color-green-900);
  color: var(--color-white);
  border: none;
}

.btn-primary:hover {
  background-color: var(--color-green-800);
}

.btn-full {
  width: 100%;
}

.btn-text {
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: var(--color-green-900);
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  padding: 0;
  transition: color 0.3s ease;
}

.btn-text:hover {
  color: var(--color-amber-600);
}

.icon-arrow {
  width: 1rem;
  height: 1rem;
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
}

.btn-text:hover .icon-arrow {
  transform: translateX(0.25rem);
}
</style>