import React from 'react'
import img1 from  "./images/Group 160.svg"
import img2 from  "./images/Group 62.svg"
import img3 from "./images/LOGO.svg"
import { Image , Row, Col, Container, Jumbotron, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import QR_code from 'react-qr-code'
import "./QR_generator.css"
import { useAuth } from '../context/AuthContext'
import axios from 'axios'
import cookie from 'react-cookies'

export default function QR_generator() {
    const {currentUser}=useAuth()
    let email=currentUser.email;
    let temp;
    let id;

    let UID=cookie.load("uid")
    console.log(email)
    try {    
       id= axios.get(`http://localhost:8080/api/shopOne/${email}`).then((response)=>{
                console.log(JSON.stringify(response.data))
                console.log((response))
                temp=(response.data)
            })
    
        console.log(temp)
        console.log(id)
    } catch (error) {
        console.log(error.message)
    }


    return (
        <div>
                 
            <div style={{position:"absolute", width:"144px", height:"144px", right:"0%", top:"0"}}>
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
                <Jumbotron style={{position:"absolute",top:"15%", left:"10%",width:"1000px", textAlign:"left"}}>
                    <h1 className="display-4" style={{color:"black"}}>Your QR code has been generated</h1>
                    <p  style={{width:"500px"}}>Instructions:</p>
                    <p  style={{width:"500px"}}>1) Print the QR Code above.:</p>
                    <p  style={{width:"500px"}}>2) Place the QR Code printout at the entrance of your shop to garner customers' attention.</p>
                    <p  style={{width:"500px"}}>This would help prevent crowding in your shop and would ensure a pleasant shopping experience for your customers. This in turn would result in gaining loyal customers and an escalation in sales!</p>
                    <Row>
                    <Col xs lg="2"><p1 style={{textAlign:"left"}}><Button onClick={() => window.print()} style={{backgroundColor:"#DD5A34", borderColor:"#DD5A34"}}>Print</Button></p1></Col>
                    <Col xs lg="2"><p1 style={{textAlign:"left"}}><Link to="/Buisness_home"><Button style={{backgroundColor:"#DD5A34", borderColor:"#DD5A34"}}>Get Started</Button></Link></p1></Col>
                    </Row>
                  
                </Jumbotron>
            </Col>
            <Container>
            <Col  style={{outlineColor:"#DD5A34",position:"absolute", right:"20%", top:"35%", height:"150px", width:"150px"}}>
            <QR_code value={UID}/>       
            </Col>
            </Container>
            </Row>
            </Container>
        </div>

    )
}
