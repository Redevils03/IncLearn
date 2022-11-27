import ilustration from '../../../public/ilustration.svg';

const Beranda = {
  async render() {
    return `
    <div id="mainLeft" class="d-flex flex-column justify-content-center">
      <h1>Inklusif Learning</h1>
      <div id="button" class="d-flex justify-content-evenly">
        <a href="#/sign-up"><button type="button" class="btn btn-outline-primary">Sign Up</button></a>
        <a href="#/log-in"><button type="button" class="btn btn-outline-success">Log In</button></a>
      </div>
    </div>
    <div id="mainRight"><img class="img-fluid" src="${ilustration}" alt="tiga buku dengan bolpoint di sisi kanannya dan pensil di sisi kirinya" /></div>
    `;
  },
};

export default Beranda;
