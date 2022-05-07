import { SaludoComponent } from './saludo-component';

if (!customElements.get('saludo-component')) {
  window.customElements.define('saludo-component', SaludoComponent);  
}