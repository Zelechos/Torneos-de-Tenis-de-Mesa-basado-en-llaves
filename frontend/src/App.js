import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menu from "./landing_page/vertical_menu/Menu";
import Logo from "./img/logo.jpg";

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <img className="tenis-logo" src={Logo} alt="Logo de FreecodeCamp" />
        </div>
        <h1>PING PONG</h1>
      </header>
      <Menu />
    </div>
  );
}

export default App;
