class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="app-bar">
        <a href="#content" class="skip-link">Skip to Content</a>
        <button id="hamburgerButton" aria-label="navigation-menu">☰</button>
        <div class="nav_brand">
          <img src="./images/logo.png" alt="logo">
        </div>
        <nav id="drawer">
          <ul>
            <li><a href="#/">Beranda</a></li>
            <li><a href="#/artikel">Artikel</a></li>
            <li><a href="#/video">Video</a></li>
            <li><a href="#/permainan">Permainan</a></li>
          </ul>
        </nav>
      </div>
    `;
  }
}

customElements.define('app-bar', AppBar);
