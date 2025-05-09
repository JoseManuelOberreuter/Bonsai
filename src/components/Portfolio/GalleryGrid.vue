<template>
  <section class="gallery-section">
    <div class="container">
      <!-- Categorías de Empleados -->
      <div class="employee-categories">
        <button 
          v-for="(employee, index) in employees" 
          :key="index"
          class="employee-button"
          :class="{ active: activeEmployee === employee.id }"
          @click="changeEmployee(employee.id)"
        >
          {{ employee.name }}
        </button>
      </div>

      <div class="gallery-grid">
        <div v-for="(image, index) in filteredGalleryImages" :key="index" class="gallery-item">
          <img 
            :src="image.src" 
            :alt="image.alt" 
          />
          <div class="gallery-caption">
            <p>{{ image.caption }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

// Estado para el empleado activo
const activeEmployee = ref('all')

// Función para cambiar de empleado
const changeEmployee = (employeeId) => {
  activeEmployee.value = employeeId
}

// Lista de empleados
const employees = [
  {
    id: 'all',
    name: 'Todos'
  },
  {
    id: 'sebastian',
    name: 'Sebastian'
  },
  {
    id: 'javiera',
    name: 'Javiera'
  }
]

// Lista de todas las imágenes disponibles
const allGalleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Elegant styling',
    caption: 'Colección Elegancia Minimalista',
    employeeId: 'sebastian'
  },
  {
    src: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2787&auto=format&fit=crop',
    alt: 'Luxury styling',
    caption: 'Exhibición de Lujo Estacional',
    employeeId: 'sebastian'
  },
  {
    src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Premium styling',
    caption: 'Experiencia de Estilismo Premium',
    employeeId: 'sebastian'
  },
  {
    src: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2787&auto=format&fit=crop',
    alt: 'Natural styling',
    caption: 'Serie Armonía Natural',
    employeeId: 'sebastian'
  },
  {
    src: 'https://images.unsplash.com/photo-1700760934268-8aa0ef52ce0a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Artistic styling',
    caption: 'Colección Visión Artística',
    employeeId: 'sebastian'
  },
  {
    src: 'https://images.unsplash.com/photo-1599351430140-c70f0250bd70?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Contemporary styling',
    caption: 'Expresiones Contemporáneas',
    employeeId: 'sebastian'
  },
  {
    src: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Classic styling',
    caption: 'Estilo Clásico Refinado',
    employeeId: 'javiera'
  },
  {
    src: 'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?q=80&w=2300&auto=format&fit=crop',
    alt: 'Modern styling',
    caption: 'Tendencias Modernas',
    employeeId: 'javiera'
  },
  {
    src: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Vintage styling',
    caption: 'Inspiración Vintage',
    employeeId: 'javiera'
  },
  {
    src: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2787&auto=format&fit=crop',
    alt: 'Bohemian styling',
    caption: 'Estilo Bohemio',
    employeeId: 'javiera'
  },
  {
    src: 'https://images.unsplash.com/photo-1700760934268-8aa0ef52ce0a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Urban styling',
    caption: 'Estilo Urbano',
    employeeId: 'javiera'
  },
  {
    src: 'https://images.unsplash.com/photo-1599351430140-c70f0250bd70?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Avant-garde styling',
    caption: 'Vanguardia Creativa',
    employeeId: 'javiera'
  }
]

// Filtra las imágenes según el empleado seleccionado
const filteredGalleryImages = computed(() => {
  if (activeEmployee.value === 'all') {
    return allGalleryImages
  } else {
    return allGalleryImages.filter(image => image.employeeId === activeEmployee.value)
  }
})
</script>

<style scoped>
.gallery-section {
  background-color: var(--color-gray-50);
  padding: 5rem 0;
}

/* Estilos para las categorías de empleados */
.employee-categories {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2.5rem;
}

.employee-button {
  background: none;
  border: 1px solid var(--color-gray-200);
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-gray-700);
  cursor: pointer;
  transition: all 0.3s ease;
}

.employee-button:hover {
  border-color: var(--color-green-300);
  color: var(--color-green-900);
}

.employee-button.active {
  background-color: var(--color-green-900);
  border-color: var(--color-green-900);
  color: var(--color-white);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
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

@media (min-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style> 