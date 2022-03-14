export default function SidebarUser(props) {
  const { username, nickname, imgSrc, imgAlt } = props;
  return (
    <div class="perfil-usuario">
      <img src={imgSrc} alt={imgAlt} />
      <div class="perfil-nome">
        <p>
          <strong>{nickname}</strong>
          <br />
          {username}
        </p>
      </div>
    </div>
  );
}
