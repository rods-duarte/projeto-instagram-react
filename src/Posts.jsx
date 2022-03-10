//TODO modularizacao post

export default function Posts() { 
    return (
        <div class="posts">
          {/* <!-- Postagem 1 --> */}
          <div class="post">
            <div class="topo-post">
              <div>
                <img
                  class="perfil-post-img"
                  src="img/meowed.png"
                  alt="foto de perfil do meowed"
                />
                <strong>
                  <p>meowed</p>
                </strong>
              </div>
              <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </div>
            <img
              class="post-img"
              src="img/gato-telefone.png"
              alt="Foto gato fofo"
            />
            <div class="base-post">
              <div class="base-post-icones">
                <div>
                  <ion-icon class="teste" name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
              <div class="contador-curtidas">
                <img
                  src="img/respondeai.png"
                  alt="foto de perfil do respondeai"
                />
                <p>
                  Curtido por <strong>respondeai </strong>e
                  <strong>outras 101.523 pessoas</strong>
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Postagem 2 --> */}
          <div class="post">
            <div class="topo-post">
              <div>
                <img
                  class="perfil-post-img"
                  src="img/barked2.png"
                  alt="foto de perfil do barked"
                />
                <strong>
                  <p>barked</p>
                </strong>
              </div>
              <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </div>
            <img class="post-img" src="img/dog.png" alt="foto cachorro fofo" />
            <div class="base-post">
              <div class="base-post-icones">
                <div>
                  <ion-icon class="teste" name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
              <div class="contador-curtidas">
                <img
                  src="img/adorableanimals.png"
                  alt="foto de perfil do respondeai"
                />
                <p>
                  Curtido por <strong>adorable_animals </strong>e
                  <strong>outras 99.159 pessoas</strong>
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Postagem 3 --> */}
          <div class="post">
            <div class="topo-post">
              <div>
                <img
                  class="perfil-post-img"
                  src="img/razoesparaacreditar.png"
                  alt="foto de perfil do razoesparaacreditar"
                />
                <strong>
                  <p>razoesparaacreditar</p>
                </strong>
              </div>
              <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </div>
            <video controls autoplay>
              <source src="img/video.mp4" type="video/mp4" />
              <source src="img/video.ogv" type="video/ogv" />
              Seu navegador não tem suporte para vídeos
            </video>
            <div class="base-post">
              <div class="base-post-icones">
                <div>
                  <ion-icon class="teste" name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
              <div class="contador-curtidas">
                <img
                  src="img/smallcutecats.png"
                  alt="foto de perfil do smallcutecats"
                />
                <p>
                  Curtido por <strong>smallcutecats </strong>e
                  <strong>outras 392.723 pessoas</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
    )
}