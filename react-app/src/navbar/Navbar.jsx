import React from 'react'
import {Navbar, Container,Nav, Image} from 'react-bootstrap'
import './Navbar.scss'
import img1 from './images/LOGO.svg'


export default function NavbarFunc() {
    return (
        <div>
            <>        
            <Navbar bg="light" variant="light">
                <Container style={{position:"sticky",}}>
                <Navbar.Brand href="#home">
                <Image src={img1} style={{width:"50%", height:"50%"}} />
                </Navbar.Brand>
                <Nav className="ml-auto">
                <Nav.Link href="#home">HOME</Nav.Link>
                <Nav.Link href="#aboutus">ABOUT US</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            </>
            
        </div>
    )
}
