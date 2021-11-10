import React from 'react'
import { Image , Row, Col, Container } from 'react-bootstrap'
import img1 from  "./images/Group 150 (1).svg"
import img2 from  "./images/Group 151.svg"
import img3 from "./images/LOGO.svg"
import { Jumbotron } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function ThankYouB() {
    return (
        <div>     
            <div style={{position:"absolute", width:"294px", height:"294px", right:"0%"}}>
            <Image src={img1} fluid/>
            </div>
            <div style={{position:"absolute", bottom:"0",width:"200px",  left:"0%"}}>
            <Image src={img2} fluid/>
            </div>
            <Container>
            <Row>
            <Col xs={12} md={8}>
                <div  style={{position:"absolute", width:"150px", height:"10px",left:"5%"}}>
                    <Link to="/">
                    <Image src={img3} fluid/>
                    </Link>
                </div>
                <Jumbotron style={{position:"absolute",top:"20%", left:"10%",width:"500px", textAlign:"left"}}>
                    <h1 className="display-4" style={{color:"#5E54F1"}}>Thank You for Signing Up</h1>
                    <p className="link">Scan QR</p>
                </Jumbotron>
                {/* <div style={{position:"absolute",top:"45%", left:"10%", width:"120vh"}}>
                    
                </div> */}
            </Col>
            </Row>
            </Container>
        </div>
    )
}



