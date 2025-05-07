<template>
  <section class="gallery-section">
    <div class="container">
      <SectionHeader 
        title="Nuestro Portafolio" 
        description="Una colección curada de nuestro mejor trabajo, mostrando el arte y la precisión que define la experiencia Bonsai."
      />
      
      <div class="gallery-grid">
        <div v-for="(image, index) in galleryImages.slice(0, 3)" :key="index" class="gallery-item">
          <img 
            :src="image.src" 
            :alt="image.alt" 
          />
          <div class="gallery-caption">
            <p>{{ image.caption }}</p>
          </div>
        </div>
      </div>
      
      <div class="gallery-cta">
        <router-link to="/galeria" class="btn-text">
          <span>Ver Galería Completa</span>
          <ArrowRight class="icon-arrow" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from './SectionHeader.vue'
import { ArrowRight } from 'lucide-vue-next'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Elegant styling',
    caption: 'Colección Elegancia Minimalista'
  },
  {
    src: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2787&auto=format&fit=crop',
    alt: 'Luxury styling',
    caption: 'Exhibición de Lujo Estacional'
  },
  {
    src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Premium styling',
    caption: 'Experiencia de Estilismo Premium'
  }
]
</script>

<style scoped>
.gallery-section {
  background-color: var(--color-gray-50);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.gallery-item {
  position: relative;
  height: 20rem;
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.gallery-caption {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-caption {
  opacity: 1;
}

.gallery-caption p {
  color: var(--color-white);
  font-weight: 300;
  letter-spacing: 0.05em;
}

.gallery-cta {
  text-align: center;
}

.btn-text {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-green-900);
  font-weight: 500;
  transition: color 0.3s ease;
}

.btn-text:hover {
  color: var(--color-amber-600);
}

.icon-arrow {
  width: 1.25rem;
  height: 1.25rem;
}

@media (min-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style> 