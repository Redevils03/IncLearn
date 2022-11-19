class MyFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="my-footer">
        <div class="footer_brand">
          <h1>IncLearn</h1>
          <div class="footer_sosmed">
            <img src="./icons/facebook.png">
            <img src="./icons/instagram.png">
            <img src="./icons/linkedin.png">
            <p>&copyIncLearn - 2022</p>
          </div>
        </div>
        <div class="footer_info">
          <div><h5>Tentang IncLearn</h5></div>
          <div><h5>Fitur</h5></div>
          <div><h5>Kontak</h5></div>
        </div>
      </div>
      `;
  }
}

customElements.define('my-footer', MyFooter);
