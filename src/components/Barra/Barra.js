import {Navbar, Container} from 'react-bootstrap';

function Barra(){
    return (
        <>
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
        </>
    )
}

export default Barra;