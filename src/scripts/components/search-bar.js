class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        .search-bar {
          display: inline-flex;
          border: 1px #ef4651 solid;
          align-items: center;
          padding: 0 10px;
        }
        .search-bar > img {
          height: 25px;
          opacity: 0.5;
        }
        
        .search-bar > img:hover {
          opacity: 1.0;
        }
        
        .search-bar > input {
          border: none;
          font-size: 16px;
          line-height: 44px;
          opacity: 0.5;
        }
        
        .search-bar > input:focus, input:hover {
          outline: none;
          opacity: 1.0;
        }
      </style>
      <div class="search-bar">
        <input id="searchElement" placeholder="Cari..."></input>
        <img id="searchButtonElement" src="./icons/search.png">
      </div>
      `;

    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
