import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#aboutMe">About</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>           
            </Container>
        </Navbar>              
    )
}

export default NavigationBar;