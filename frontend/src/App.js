import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menu from "./landing_page/vertical_menu/Menu";
import NavBar from "./landing_page/nav_bar/NavBar";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Menu />
    </div>
  );
}

export default App;