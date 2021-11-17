import {
  Navbar,
  Container,
  Nav,
  Offcanvas,
  NavDropdown,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import AddPhone from "../AddPhone/AddPhone";
import { Link } from "react-router-dom";
import "./header.css";

function Header({ addNewPhone, setTextSearch }) {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand={false}>
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Phones Store
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav style={{ padding: "0" }}>
                <ul className="nav-list">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/main">Products</Link>
                  </li>
                  <li>
                    <NavDropdown
                      title="Dropdown"
                      id="offcanvasNavbarDropdown"
                      className="nav-dropdown"
                    >
                      <NavDropdown.Item href="#action3">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                  </li>
                  <li>
                    <a href="#about">Contact</a>
                  </li>
                </ul>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => setTextSearch(e.target.value)}
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          <AddPhone addNewPhone={addNewPhone} />
          <Navbar.Brand href="#" style={{ color: "white" }}>
            Phones Store
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
