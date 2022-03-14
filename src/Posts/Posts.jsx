import Post from "./Post";

export default function Posts() {
  return (
    <div class="posts">
      {/* Postagem */}
      {posts.map((post) => (
        <Post
          username={post.username}
          userImgSrc={post.userImgSrc}
          userImgAlt={post.userImgAlt}
          imgSrc={post.imgSrc}
          imgAlt={post.imgAlt}
          likeUserImgSrc={post.likeUserImgSrc}
          likeUsername={post.likeUsername}
          numLikes={post.numLikes}
          video={post.video}
          videoMp4={post.videoMp4}
          videoOgv={post.videoOgv}
        />
      ))}
    </div>
  );
}

let posts = [
  {
    username: "meowed",
    userImgSrc: "img/meowed.png",
    userImgAlt: "foto de perfil do meowed",
    imgSrc: "img/gato-telefone.png",
    imgAlt: "Foto gato fofo",
    likeUserImgSrc: "img/respondeai.png",
    likeUserImgAlt: "foto de perfil do respondeai",
    likeUsername: "respondeai",
    numLikes: "101.523",
    video: false,
    videoMp4: "",
    videoOgv: "",
  },
  {
    username: "barked",
    userImgSrc: "img/barked2.png",
    userImgAlt: "foto de perfil do barked",
    imgSrc: "img/dog.png",
    imgAlt: "foto cachorro fofo",
    likeUserImgSrc: "img/adorableanimals.png",
    likeUserImgAlt: "foto de perfil do respondeai",
    likeUsername: "respondeai",
    numLikes: "99.159",
    video: false,
    videoMp4: "",
    videoOgv: "",
  },
  {
    username: "razoesparaacreditar",
    userImgSrc: "img/razoesparaacreditar.png",
    userImgAlt: "foto de perfil do razoesparaacreditar",
    imgSrc: "",
    imgAlt: "",
    likeUserImgSrc: "img/respondeai.png",
    likeUserImgAlt: "foto de perfil do respondeai",
    likeUsername: "respondeai",
    numLikes: "101.523",
    video: true,
    videoMp4: "img/video.mp4",
    videoOgv: "img/video.ogv",
  },
];