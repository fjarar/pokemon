import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar} from 'react-bootstrap';

function BarraNav(){
  <Navbar bg="dark" variant="dark">
  <Container>
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/images/images.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Pokemon
    </Navbar.Brand>
  </Container>
</Navbar>
}

export default BarraNav;