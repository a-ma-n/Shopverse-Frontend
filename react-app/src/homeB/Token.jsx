import React from 'react';
import img1 from  "./images/Group 164.svg"
import img2 from  "./images/Group 163.svg"
import img3 from "./images/LOGO.svg"
import img4 from "./images/Saly-22.svg"
import {Image, Row, Col, Container, Alert, Button, Card} from 'react-bootstrap'
import FeatherIcon from 'feather-icons-react'
import {useAuth} from '../context/AuthContext'
import { useHistory, Link } from "react-router-dom"
import { useState } from 'react'

const Token = () => {
    const { logout } = useAuth()
    const history = useHistory()
    const [error, setError] = useState("")

    
    async function handleLogout() {
        setError("")
    
        try {
          await logout()
          history.push("/signInB")
        } catch {
          setError("Failed to log out")
        }
      }        


    return (
        <div>
        <Container>
        {error && <Alert variant="danger">{error}</Alert>}
        <Row>
            <Col>      
                <div  style={{position:"absolute", width:"150px", height:"10px",left:"5%"}}>
                <Link to="/">
                <Image src={img3} fluid/>
                </Link>
            </div> 
            </Col>
            <Col>
                <div style={{position:"absolute",left:"7%", top:"12%"}}>
            <Image src={img4} fluid/>
                </div>
            </Col>
        </Row>
        <Col>
        <div style={{position:"absolute", left:"60%", top:"30%"}}>
        <Card style={{ width: '18rem' ,backgroundColor:"#5E54F1", color:"white"}}>
            <Card.Body>
                <Card.Header>Token number</Card.Header>
                <Card.Text>
                    <h1>
                        21
                    </h1>
                </Card.Text>
                <Link to="/">
                <Button onClick={handleLogout} style={{color:"white",borderColor:"white", backgroundColor:"#5E54F1"}} variant="outline-primary">Log-out</Button>
                </Link>
            </Card.Body>
            </Card>
            <br/>
            <h1>
                Total Amount
            </h1>
        </div>
        </Col>
        <Row>
        </Row>
        </Container>

        <div style={{position:"absolute", width:"144px", height:"144px", right:"0%", top:"0"}}>
        <Image src={img1} fluid/>
        </div>
        <div style={{position:"absolute", bottom:"0",width:"200px",  left:"0%"}}>
        <Image src={img2} fluid/>
        </div>        
            <div  onClick={handleLogout} style={{position:"absolute",width:"50px", height:"50px",color:"white", top:"3%",right:"3%"}}>
                <FeatherIcon  icon="log-out"/>
            </div>            
    </div>

    );
}

export default Token;
