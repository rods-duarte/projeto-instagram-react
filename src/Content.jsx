import StoriesBar from "./StoriesBar";
import Posts from "./Posts";
import Sidebar from "./Sidebar";

export default function Content() {
  return (
    <div class="conteudo">
      <div class="container">
        {/* <!-- Barra de stories --> */}
        <StoriesBar />
        {/* <!-- Postagens --> */}
        <Posts />
      </div>
      {/* <!-- Sidebar --> */}
      <Sidebar />
    </div>
  );
}
