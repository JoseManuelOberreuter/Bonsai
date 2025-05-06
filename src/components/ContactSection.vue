<template>
  <section class="contact-section">
    <div class="container">
      <div class="contact-content">
        <div class="contact-info">
          <h2 class="section-title">Contáctanos</h2>
          <div class="accent-line"></div>
          <p>
            Nos encantaría saber de ti. Programa una consulta o pregunta sobre nuestros servicios.
          </p>
          
          <div class="contact-details">
            <div class="contact-item">
              <MapPin class="contact-icon" />
              <div>
                <h4>Visita Nuestro Estudio</h4>
                <p>123 Avenida Elegancia, Distrito de Lujo, NY 10001</p>
              </div>
            </div>
            
            <div class="contact-item">
              <Clock class="contact-icon" />
              <div>
                <h4>Horario de Apertura</h4>
                <p>Lunes - Sábado: 10am - 8pm</p>
                <p>Domingo: Solo con cita previa</p>
              </div>
            </div>
            
            <div class="contact-item">
              <Phone class="contact-icon" />
              <div>
                <h4>Llámanos</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="contact-form-container">
          <form class="contact-form">
            <div class="form-group">
              <label for="name">Nombre</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Tu nombre"
              />
            </div>
            
            <div class="form-group">
              <label for="email">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Tu email"
              />
            </div>
            
            <div class="form-group">
              <label for="service">Servicio</label>
              <select id="service">
                <option value="" disabled selected>Selecciona un servicio</option>
                <option v-for="service in services" :key="service.title" :value="service.title">
                  {{ service.title }}
                </option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="message">Mensaje</label>
              <textarea 
                id="message" 
                rows="4" 
                placeholder="Tu mensaje"
              ></textarea>
            </div>
            
            <button type="submit" class="btn btn-primary btn-full">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { MapPin, Clock, Phone } from 'lucide-vue-next'

const services = [
  { title: 'Estilismo Signature' },
  { title: 'Consulta de Imagen' },
  { title: 'Preparación para Eventos' },
  { title: 'Estilismo Editorial' },
  { title: 'Curación de Vestuario' },
  { title: 'Actualización Estacional' }
]
</script>

<style scoped>
.contact-section {
  background-color: var(--color-white);
}

.contact-content {
  display: flex;
  flex-direction: column;
}

.contact-info {
  margin-bottom: 2.5rem;
}

.contact-info .section-title,
.contact-info .accent-line {
  margin-left: 0;
  text-align: left;
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
  margin: 0 0 2rem;
}

.contact-info > p {
  color: var(--color-gray-600);
  margin-bottom: 2rem;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
}

.contact-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: var(--color-amber-500);
  margin-right: 1rem;
  margin-top: 0.25rem;
}

.contact-item h4 {
  font-weight: 500;
  color: var(--color-green-900);
  margin-bottom: 0.25rem;
}

.contact-item p {
  color: var(--color-gray-600);
}

.contact-form-container {
  background-color: var(--color-gray-50);
  padding: 2rem;
  border-radius: 0.5rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-gray-700);
  margin-bottom: 0.25rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-gray-200);
  border-radius: 0.5rem;
  font-family: var(--font-sans);
  font-size: 1rem;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: transparent;
  box-shadow: 0 0 0 2px var(--color-green-900);
}

@media (min-width: 768px) {
  .section-title {
    font-size: 2.5rem;
  }
  
  .contact-content {
    flex-direction: row;
    gap: 2.5rem;
  }
  
  .contact-info {
    width: 50%;
    margin-bottom: 0;
  }
  
  .contact-form-container {
    width: 50%;
  }
}
</style> 