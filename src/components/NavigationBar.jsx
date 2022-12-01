import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavigationBar() {
    return(
        <>
            <Navbar style={{backgroundColor:"#74a6ff"}} variant="dark" expand="lg">
                <Container fluid>
                <Navbar.Brand href="/">Cody Ciaschi</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="https://www.linkedin.com/in/cody-ciaschi-226a83188/" target="_blank">LinkedIn</Nav.Link>
                    <Nav.Link as="a" href="https://github.com/cody-ciaschi" target="_blank">Github</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                </Nav>
                </Container>
            </Navbar>  
            <br />
        </>  
    );
}