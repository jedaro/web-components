
export class SaludoComponent extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.user = "Test";
  }

  connectedCallback() {
    console.log("Component saludo");
    this.shadowRoot.innerHTML = `
      <div id="saludo">
         <link rel="stylesheet" href="saludo-component.css" >
        <h1 class="title"> WebComponent Saludo </h1>
        <p>Hola ${this.user}, este es un component de saludo!</p>
      </div>`;
  }

  static get observedAttributes() {
    return ["user"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Cambio nombre ${name} de ${oldValue} a ${newValue}`);
    if (name === 'user') {
       this.user = newValue;
    }
  }
}

window.customElements.define("home-component", SaludoComponent);

