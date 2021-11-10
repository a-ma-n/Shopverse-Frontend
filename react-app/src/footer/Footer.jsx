import React from 'react'
import { Nav, Navbar, Container, Image } from 'react-bootstrap'
import './Footer.scss'
import img from './images/ISTE-LOGO.svg'


export default function Footer() {
    return (
        <div>
            <>
            <br />
            <Navbar bg="light" variant="light" style={{
             position:"absolute",
             bottom:"-20%",
             top:"100",
             height:"120px",
             width: "100%", }}>
                <Container fluid>
                <Navbar.Brand href="#home">
                <Image src={img} fluid style={{width:"5%", size:"5%",position:"absolute", left:60, bottom:35}}/>
                <div style={{textAlign:"center", fontSize:"small", position:"absolute", bottom:10, left:45}}>
                    With from ISTE
                    </div>
                </Navbar.Brand>
                <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            </>
        </div>
    )
}
