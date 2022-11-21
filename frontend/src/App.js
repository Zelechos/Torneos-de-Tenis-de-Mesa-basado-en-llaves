import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menu from "./landing_page/vertical_menu/Menu";
import Logo from "./img/logo.jpg";
import { BsSearch } from "react-icons/bs";

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <img className="tenis-logo" src={Logo} alt="Logo de FreecodeCamp" />
        </div>
        <h1>PING PONG</h1>
        <div className="search">
          <div className="container-icon-search">
            <BsSearch />
          </div>
          <input
            class="block w-full rounded-lg leading-none focus:outline-none placeholder-white/50 
                    [ transition-colors duration-200 ] 
                    [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                    [ bg-black/20 focus:bg-white/25 ] 
                    [ text-[#333] focus:text-white ]"
            placeholder="Buscar..."
          ></input>
        </div>
      </header>
      <Menu />
    </div>
  );
}

export default App;
