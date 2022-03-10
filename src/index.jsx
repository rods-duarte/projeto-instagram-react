import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Content from "./Content";
import ShortcutMobile from "./ShortcutMobile";

function App() {
    return (
        <main>          
            <Navbar />
            <Content />
            <ShortcutMobile />
        </main>
    );
}

const root = document.querySelector(`.root`);
ReactDOM.render(<App />, root);

