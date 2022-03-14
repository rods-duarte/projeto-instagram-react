import Sugest from "./Sugest";

export default function SidebarSugestList() {
  return (
    <div>
      <div class="topo">
        <p>Sugestões para você</p>
        <strong>
          <p>Ver tudo</p>
        </strong>
      </div>
      {/* Sugestao */}
      {sugestoes.map((sugestao) => (
        <Sugest
          imgSrc={sugestao.imgSrc}
          imgAlt={sugestao.imgAlt}
          username={sugestao.username}
          text={sugestao.text}
        />
      ))}
    </div>
  );
}

const sugestoes = [
  {
    imgSrc: "img/badvibesmemes.png",
    imgAlt: "foto de perfil badvibesmemes",
    username: "bad.vibes.memes",
    text: "Segue você",
  },
  {
    imgSrc: "img/chibirdart.png",
    imgAlt: "foto de perfil chibirdart",
    username: "chibirdart",
    text: "Segue você",
  },
  {
    imgSrc: "img/razoesparaacreditar.png",
    imgAlt: "foto de perfil do razoesparaacreditar",
    username: "razoesparaacreditar",
    text: "Novo no instagram",
  },
  {
    imgSrc: "img/adorableanimals.png",
    imgAlt: "foto de perfil do adorableanimals",
    username: "adorable_animals",
    text: "Segue você",
  },
  {
    imgSrc: "img/smallcutecats.png",
    imgAlt: "foto de perfil do smallcutecats",
    username: "smallcutecats",
    text: "Segue você",
  },
];
