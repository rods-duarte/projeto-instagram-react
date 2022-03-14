export default function Sugest(props) {
  const { username, imgSrc, imgAlt, text } = props;
  return (
    <div>
      <div class="perfil">
        <img src={imgSrc} alt={imgAlt} />
        <div class="perfil-nome">
          <p>
            <strong>{username}</strong>
            <br />
            {text}
          </p>
        </div>
        <div class="seguir">
          <p>Seguir</p>
        </div>
      </div>
    </div>
  );
}
