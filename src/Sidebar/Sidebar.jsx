import SidebarUser from "./SidebarUser";
import SidebarSugestList from "./SidebarSugestList";
import SidebarBase from "./SidebarBase";

export default function Sidebar() {
  return (
    <div class="sidebar">
      {/* <!-- Perfil usuario --> */}
      <SidebarUser
        username="Catana"
        nickname="catanacomics"
        imgSrc="img/catanacomics.png"
        imgAlt="foto de perfil catanacomics"
      />
      {/* <!-- Sugestões de perfis --> */}
      <SidebarSugestList />
      {/* <!-- Base do sidebar --> */}
      <SidebarBase />
    </div>
  );
}
