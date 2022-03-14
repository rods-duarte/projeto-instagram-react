export default function Post(props) {
  const {
    username,
    userImgSrc,
    userImgAlt,
    imgSrc,
    imgAlt,
    video,
    videoMp4,
    videoOgv,
    likeUsername,
    likeUserImgSrc,
    likeUserImgAlt,
    numLikes,
  } = props;
  return (
    <div class="post">
      <div class="topo-post">
        <div>
          <img class="perfil-post-img" src={userImgSrc} alt={userImgAlt} />
          <strong>
            <p>{username}</p>
          </strong>
        </div>
        <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
      </div>
      <Media
        video={video}
        videoMp4={videoMp4}
        videoOgv={videoOgv}
        imgSrc={imgSrc}
        imgAlt={imgAlt}
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
          <img src={likeUserImgSrc} alt={likeUserImgAlt} />
          <p>
            Curtido por <strong> {likeUsername} </strong>e
            <strong>outras {numLikes} pessoas</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

// verifica se o post e video ou img
function Media(props) {
  const { video, videoMp4, videoOgv, imgSrc, imgAlt } = props;
  return video ? (
    <video controls autoplay>
      <source src={videoMp4} type="video/mp4" />
      <source src={videoOgv} type="video/ogv" />
      Seu navegador não tem suporte para vídeos
    </video>
  ) : (
    <img class="post-img" src={imgSrc} alt={imgAlt} />
  );
}
