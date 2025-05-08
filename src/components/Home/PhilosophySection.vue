<template>
  <section class="philosophy-section">
    <div class="container">
      <div class="philosophy-content">
        <div class="philosophy-image">
          <img 
            src="https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Elegant bonsai" 
          />
        </div>
        <div class="philosophy-text">
          <h2 class="section-title">Nuestra Filosofía</h2>
          <div class="accent-line"></div>
          <p>
            En Bonsai, creemos que el estilo personal es una forma de arte que requiere paciencia, 
            precisión y una profunda comprensión del equilibrio. Como el antiguo arte del cultivo de bonsái, 
            damos forma y nutrimos tu estética única con una atención meticulosa al detalle.
          </p>
          <p>
            Nuestro enfoque combina la elegancia atemporal con sensibilidades contemporáneas, 
            creando looks que son refinados y modernos sin esfuerzo. Honramos la belleza natural 
            de cada individuo, realzando en lugar de alterar su esencia.
          </p>
          <button class="btn-text">
            <span>Conocer Más</span>
            <ArrowRight class="icon-arrow" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next'
</script>

<style scoped>
.philosophy-section {
  background-color: var(--color-white);
}

.philosophy-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.philosophy-image {
  margin-bottom: 2.5rem;
  width: 100%;
}

.philosophy-image img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 0.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.philosophy-text {
  width: 100%;
}

.philosophy-text .section-title {
  text-align: left;
}

.philosophy-text .accent-line {
  margin: 0 0 2rem;
}

.section-title {
  font-size: 2rem;
  color: var(--color-green-900);
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
}

.accent-line {
  width: 5rem;
  height: 2px;
  background-color: var(--color-amber-400);
}

.philosophy-text p {
  margin-bottom: 1.5rem;
  color: var(--color-gray-700);
}

@media (min-width: 768px) {
  .section-title {
    font-size: 2.5rem;
  }
  
  .philosophy-content {
    flex-direction: row;
    gap: 4rem;
  }
  
  .philosophy-image {
    width: 50%;
    margin-bottom: 0;
  }
  
  .philosophy-text {
    width: 50%;
  }
}
</style> 