import './NavBar.css';
import Logo from "../../img/logo.jpg";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const NavBar = () => {
  return (
      <header>
        <div>
          <img className="tenis-logo" src={Logo} alt="Logo de FreecodeCamp" />
        </div>
        <h1><b>Ping</b> Pong</h1>
        <div className="search">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-1"
              aria-label="Search"
            />
            <Button className="btn" variant="outline-success">Search</Button>
          </Form>
        </div>
      </header>
  );
}

export default NavBar;
