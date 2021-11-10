import React from 'react'
import { Image , Row, Col, Container } from 'react-bootstrap'
import img1 from  "./images/Group 166.svg"
import img2 from  "./images/Group 62.svg"
import img3 from "./images/LOGO.svg"
import img4 from  "./images/Group 152.svg"
import { Jumbotron  } from 'react-bootstrap'
import { Link } from 'react-router-dom'


var ThankYouS=()=> {


    return (
        <div>     
            <div style={{position:"absolute",width:"144px", right:"0%",top:"0"}}>
            <Image src={img4} fluid/>
            </div>
            <div style={{position:"absolute", width:"294px",right:"0%", bottom:"0"}}>
            <Image src={img1} fluid/>
            </div>
            <div style={{position:"absolute", bottom:"0",width:"200px", left:"0%"}}>
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
                <Jumbotron style={{position:"absolute",top:"25%", left:"25%",width:"500px", textAlign:"left"}}>
                    <h1 className="display-1" style={{color:"black", textAlign:"center"}}>Thank you for Signing Up</h1>
                    <p className="lead" style={{textAlign:"end"}}>
                        <Link to ="/QR_Generation" style={{color:"#DD5A34"}}>    
                        Generate QR
                        </Link>
                        </p>
                </Jumbotron>
                <div style={{position:"absolute",top:"45%", left:"10%", width:"60vh"}}>
                    
                </div>
            </Col>
            </Row>
            </Container>
        </div>
    )
}

export default ThankYouS

