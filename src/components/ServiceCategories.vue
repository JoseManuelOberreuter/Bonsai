<template>
  <div class="service-categories-container">
    <!-- Categorías de Servicios -->
    <div class="service-categories">
      <button 
        v-for="(category, index) in categories" 
        :key="index"
        class="category-button"
        :class="{ active: activeCategory === category.id }"
        @click="changeCategory(category.id)"
      >
        {{ category.name }}
      </button>
    </div>

    <!-- Lista de Servicios -->
    <div class="services-container">
      <div class="service-category" v-for="(category, catIndex) in categories" :key="catIndex" v-show="activeCategory === category.id">
        <div class="category-description">
          <h3>{{ category.name }}</h3>
          <p>{{ category.description }}</p>
        </div>
        
        <div class="services-list">
          <div class="service-item" v-for="(service, index) in category.services" :key="index">
            <div class="service-info">
              <h4 class="service-name">{{ service.name }}</h4>
              <p class="service-description">{{ service.description }}</p>
            </div>
            <div class="service-pricing">
              <template v-if="service.options">
                <div class="service-option" v-for="(option, optIndex) in service.options" :key="optIndex">
                  <span class="option-name">{{ option.name }}</span>
                  <span class="option-price">{{ option.price }}</span>
                </div>
              </template>
              <template v-else>
                <span class="service-price">{{ service.price }}</span>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Estado para la categoría activa
const activeCategory = ref('haircuts')

// Función para cambiar de categoría
const changeCategory = (categoryId) => {
  activeCategory.value = categoryId
}

// Categorías y servicios
const categories = [
  {
    id: 'haircuts',
    name: 'Cortes de Cabello',
    description: 'Nuestros expertos estilistas crean looks personalizados que realzan tus rasgos únicos y se adaptan a tu estilo de vida.',
    services: [
      {
        name: 'Corte Básico',
        description: 'Corte de cabello tradicional con lavado y peinado básico.',
        options: [
          { name: 'Caballero', price: '$12.000' },
          { name: 'Dama', price: '$15.000' },
          { name: 'Niños', price: '$8.000' }
        ]
      },
      {
        name: 'Corte y Estilo Signature',
        description: 'Corte personalizado con consulta detallada y acabado de estilismo premium.',
        options: [
          { name: 'Cabello corto', price: '$18.000' },
          { name: 'Cabello medio', price: '$22.000' },
          { name: 'Cabello largo', price: '$26.000' }
        ]
      },
      {
        name: 'Corte de Flequillo',
        description: 'Mantenimiento o creación de flequillo según el tipo de rostro.',
        price: '$7.000'
      },
      {
        name: 'Recorte de Barba',
        description: 'Perfilado y mantenimiento de barba con productos de cuidado.',
        price: '$9.000'
      }
    ]
  },
  {
    id: 'color',
    name: 'Coloración',
    description: 'Desde tonos naturales hasta looks audaces, nuestras técnicas de coloración realzan la salud y brillo de tu cabello.',
    services: [
      {
        name: 'Tinte Completo',
        description: 'Coloración uniforme para todo el cabello, incluye lavado y peinado.',
        options: [
          { name: 'Cabello corto', price: '$25.000' },
          { name: 'Cabello medio', price: '$30.000' },
          { name: 'Cabello largo', price: '$38.000' }
        ]
      },
      {
        name: 'Mechas / Highlights',
        description: 'Mechas para dar dimensión y profundidad a tu color natural.',
        options: [
          { name: 'Parciales', price: '$35.000' },
          { name: 'Completas', price: '$45.000' },
          { name: 'Balayage', price: '$60.000' }
        ]
      },
      {
        name: 'Retoque de Raíces',
        description: 'Mantenimiento de color sólo en la zona de crecimiento.',
        price: '$20.000'
      },
      {
        name: 'Corrección de Color',
        description: 'Servicio especializado para corregir coloraciones previas.',
        price: 'Desde $45.000'
      }
    ]
  },
  {
    id: 'treatments',
    name: 'Tratamientos',
    description: 'Revitaliza y restaura tu cabello con nuestros tratamientos especializados para diferentes necesidades.',
    services: [
      {
        name: 'Hidratación Profunda',
        description: 'Tratamiento intensivo para cabello seco o dañado.',
        price: '$18.000'
      },
      {
        name: 'Alisado Brasileño',
        description: 'Reduce el encrespamiento y alisa el cabello por hasta 3 meses.',
        options: [
          { name: 'Cabello medio', price: '$75.000' },
          { name: 'Cabello largo', price: '$90.000' }
        ]
      },
      {
        name: 'Tratamiento Reparador',
        description: 'Reconstrucción para cabello muy dañado por procesos químicos.',
        price: '$22.000'
      },
      {
        name: 'Mascarilla Personalizada',
        description: 'Tratamiento con diagnóstico previo según necesidades específicas.',
        price: '$15.000'
      }
    ]
  },
  {
    id: 'styling',
    name: 'Peinados',
    description: 'Desde looks casuales hasta peinados para ocasiones especiales, creamos estilos que te hacen sentir especial.',
    services: [
      {
        name: 'Peinado Básico',
        description: 'Secado y peinado sencillo después del lavado.',
        options: [
          { name: 'Cabello corto', price: '$12.000' },
          { name: 'Cabello medio', price: '$15.000' },
          { name: 'Cabello largo', price: '$18.000' }
        ]
      },
      {
        name: 'Recogido',
        description: 'Peinados elaborados para eventos o celebraciones.',
        price: 'Desde $28.000'
      },
      {
        name: 'Ondas / Rizado',
        description: 'Creación de ondas o rizos con tenacillas o planchas.',
        price: '$22.000'
      },
      {
        name: 'Peinado para Novias',
        description: 'Incluye prueba previa y peinado el día del evento.',
        price: 'Desde $60.000'
      }
    ]
  }
]

// Inicializar con la primera categoría
onMounted(() => {
  activeCategory.value = categories[0].id
})

// Exponer valores y funciones para uso externo
defineExpose({
  activeCategory,
  changeCategory
})
</script>

<style scoped>
.service-categories-container {
  width: 100%;
}

.service-categories {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin: 2.5rem 0;
}

.category-button {
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

.category-button:hover {
  border-color: var(--color-green-300);
  color: var(--color-green-900);
}

.category-button.active {
  background-color: var(--color-green-900);
  border-color: var(--color-green-900);
  color: var(--color-white);
}

.services-container {
  max-width: 950px;
  margin: 0 auto;
}

.category-description {
  margin-bottom: 2.5rem;
  text-align: center;
}

.category-description h3 {
  font-size: 1.8rem;
  color: var(--color-green-900);
  margin-bottom: 0.75rem;
}

.category-description p {
  color: var(--color-gray-600);
  max-width: 700px;
  margin: 0 auto;
}

.services-list {
  display: grid;
  gap: 1.5rem;
}

.service-item {
  display: flex;
  flex-direction: column;
  background-color: var(--color-gray-50);
  border-radius: 0.5rem;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 1.5rem;
}

.service-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.service-info {
  flex: 1;
  margin-bottom: 1rem;
}

.service-name {
  font-size: 1.25rem;
  color: var(--color-green-900);
  margin-bottom: 0.5rem;
}

.service-description {
  font-size: 0.95rem;
  color: var(--color-gray-600);
  margin-bottom: 1rem;
}

.service-pricing {
  border-top: 1px dashed var(--color-gray-200);
  padding-top: 1rem;
}

.service-option {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.option-name {
  font-size: 0.9rem;
  color: var(--color-gray-700);
}

.option-price, .service-price {
  font-weight: 500;
  color: var(--color-amber-600);
}

@media (min-width: 768px) {
  .service-item {
    flex-direction: row;
    align-items: center;
    gap: 2rem;
  }
  
  .service-info {
    margin-bottom: 0;
  }
  
  .service-pricing {
    min-width: 200px;
    border-top: none;
    padding-top: 0;
    border-left: 1px dashed var(--color-gray-200);
    padding-left: 2rem;
  }
}

@media (min-width: 1024px) {
  .services-list {
    grid-template-columns: 1fr;
  }
}
</style> 