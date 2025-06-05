<template>
  <div v-if="isOpen" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <h2>Términos de Servicio</h2>
        <button class="close-button" @click="closeModal">&times;</button>
      </div>
      <div class="modal-body">
        <h3>1. Aceptación de los Términos</h3>
        <p>Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos Términos de Servicio y cumplir con todas las leyes y regulaciones aplicables.</p>

        <h3>2. Uso del Servicio</h3>
        <p>Usted se compromete a utilizar el servicio solo para fines legales y de una manera que no infrinja los derechos de terceros.</p>

        <h3>3. Propiedad Intelectual</h3>
        <p>Todo el contenido presente en este sitio web, incluyendo pero no limitado a textos, gráficos, logotipos, imágenes y software, está protegido por derechos de autor y otras leyes de propiedad intelectual.</p>

        <h3>4. Política de Privacidad</h3>
        <p>Su uso de nuestro servicio está también sujeto a nuestra Política de Privacidad. Al utilizar nuestro servicio, usted consiente la recopilación y uso de información según lo establecido en dicha política.</p>

        <h3>5. Limitación de Responsabilidad</h3>
        <p>En ningún caso Bonsai Styling será responsable por daños directos, indirectos, incidentales, especiales o consecuentes que resulten del uso o la imposibilidad de uso de nuestros servicios.</p>

        <h3>6. Modificaciones</h3>
        <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 800px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.modal-header h2 {
  color: var(--color-green-900);
  font-weight: 300;
  letter-spacing: 0.1em;
  margin: 0;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--color-gray-500);
  padding: 0.5rem;
}

.close-button:hover {
  color: var(--color-green-900);
}

.modal-body {
  color: var(--color-gray-700);
}

.modal-body h3 {
  color: var(--color-green-900);
  margin: 1.5rem 0 0.75rem;
  font-size: 1.1rem;
  font-weight: 500;
}

.modal-body p {
  margin: 0.5rem 0;
  line-height: 1.6;
}

.modal-body h3:first-child {
  margin-top: 0;
}
</style> 