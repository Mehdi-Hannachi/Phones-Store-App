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

function Header({ addNewPhone, setTextSearch }) {
  return (
    <div>
      <Navbar bg="dark" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#" style={{ color: "white" }}>
            Phones Store
          </Navbar.Brand>
          <AddPhone addNewPhone={addNewPhone} />

          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link to="/">Home</Link>
                <Link to="/main">Products</Link>
                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
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
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
