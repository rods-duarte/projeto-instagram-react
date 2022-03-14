import StoriesBar from "./StoriesBar/StoriesBar";
import Posts from "./Posts/Posts";
import Sidebar from "./Sidebar/Sidebar";

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
