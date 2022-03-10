import SidebarUser from "./SidebarUser";

//TODO Modularizar Sugestoes

export default function Sidebar() {
  return (
    <div class="sidebar">
      {/* <!-- Perfil usuario --> */}
      <SidebarUser />
      {/* <!-- Sugestões de perfis --> */}
      <div>
        <div class="topo">
          <p>Sugestões para você</p>
          <strong>
            <p>Ver tudo</p>
          </strong>
        </div>
        {/* <!-- Sugestão 1 --> */}
        <div>
          <div class="perfil">
            <img
              src="img/badvibesmemes.png"
              alt="foto de perfil badvibesmemes"
            />
            <div class="perfil-nome">
              <p>
                <strong>bad.vibes.memes</strong>
                <br />
                Segue você
              </p>
            </div>
            <div class="seguir">
              <p>Seguir</p>
            </div>
          </div>
        </div>
        {/* <!-- Sugestão 2 --> */}
        <div>
          <div class="perfil">
            <img src="img/chibirdart.png" alt="foto de perfil chibirdart" />
            <div class="perfil-nome">
              <p>
                <strong>chibirdart</strong>
                <br />
                Segue você
              </p>
            </div>
            <div class="seguir">
              <p>Seguir</p>
            </div>
          </div>
        </div>
        {/* <!-- Sugestão 3 --> */}
        <div>
          <div class="perfil">
            <img
              src="img/razoesparaacreditar.png"
              alt="foto de perfil do razoesparaacreditar"
            />
            <div class="perfil-nome">
              <p>
                <strong>razoesparaacreditar</strong>
                <br />
                Novo no Instagram
              </p>
            </div>
            <div class="seguir">
              <p>Seguir</p>
            </div>
          </div>
        </div>
        {/* <!-- Sugestão 4 --> */}
        <div>
          <div class="perfil">
            <img
              src="img/adorableanimals.png"
              alt="foto de perfil do adorableanimals"
            />
            <div class="perfil-nome">
              <p>
                <strong>adorable_animals</strong>
                <br />
                Segue você
              </p>
            </div>
            <div class="seguir">
              <p>Seguir</p>
            </div>
          </div>
        </div>
        {/* <!-- Sugestão 5 --> */}
        <div>
          <div class="perfil">
            <img
              src="img/smallcutecats.png"
              alt="foto de perfil do smallcutecats"
            />
            <div class="perfil-nome">
              <p>
                <strong>smallcutecats</strong>
                <br />
                Segue você
              </p>
            </div>
            <div class="seguir">
              <p>Seguir</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Base do sidebar --> */}
      <div class="base">
        <p>
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
          Localizações • Contas mais relevantes • Hashtags • Idioma
        </p>
        <p>© 2021 INSTAGRAM DO FACEBOOK</p>
      </div>
    </div>
  );
}
