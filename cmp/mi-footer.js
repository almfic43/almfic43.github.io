class MiFooter extends HTMLElement {
  connectedCallback(){
    this.innerHTML = /* html */
  `Copyright &copy; 2021
Ana Lizbeth Martínez Francisco.`;
  }
}
customElements.define("mi-footer", MiFooter);
