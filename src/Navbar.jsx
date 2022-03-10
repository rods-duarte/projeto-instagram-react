export default function Navbar() {
    return (
        <div class="navbar">
        <div class="logo-mobile">
          <ion-icon name="logo-instagram"></ion-icon>
        </div>
        <div class="logo">
          <ion-icon name="logo-instagram"></ion-icon>
          <div class="separador-logo"></div>
          <img src="img/logo.png" alt="Logo Instagram" />
        </div>
        <input class="buscador" type="text" placeholder="Pesquisar" />
        <div class="atalhos">
          <a href="#">
            <ion-icon name="paper-plane-outline"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="compass-outline"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="heart-outline"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="person-outline"></ion-icon>
          </a>
        </div>
      </div>
    )
}