<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-main">
        <div class="footer-brand">
          <h2 class="brand-name">BONSAI</h2>
          <p>Cultivando elegancia desde 2010</p>
        </div>
        
        <SocialLinks />
      </div>
      
      <div class="footer-bottom">
        <p class="copyright">
          &copy; {{ new Date().getFullYear() }} Bonsai Styling. Todos los derechos reservados.
        </p>
        
        <div class="footer-links">
          <a href="#" @click.prevent="showTermsModal = true">Términos de Servicio</a>
          <a href="#">Contacto</a>
        </div>
      </div>
    </div>
    
    <TermsOfServiceModal 
      :is-open="showTermsModal"
      @close="showTermsModal = false"
    />
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import SocialLinks from './SocialLinks.vue'
import TermsOfServiceModal from '../Modals/TermsOfServiceModal.vue'

const showTermsModal = ref(false)
</script>

<style scoped>
.footer {
  background-color: var(--color-white);
  padding: 2.5rem 0;
  border-top: 1px solid var(--color-gray-100);
}

.footer-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
}

.footer-brand {
  margin-bottom: 1.5rem;
  text-align: center;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 0.2em;
  color: var(--color-green-900);
}

.footer-brand p {
  color: var(--color-gray-500);
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid var(--color-gray-100);
}

.copyright {
  color: var(--color-gray-500);
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.footer-links a {
  color: var(--color-gray-500);
  font-size: 0.875rem;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--color-green-900);
}

@media (min-width: 768px) {
  .footer-main {
    flex-direction: row;
    justify-content: space-between;
  }
  
  .footer-brand {
    margin-bottom: 0;
    text-align: left;
  }
  
  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
  }
  
  .copyright {
    margin-bottom: 0;
  }
  
  .footer-links {
    justify-content: flex-end;
  }
}
</style> 