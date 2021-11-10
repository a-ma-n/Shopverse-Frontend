import React from 'react'
import img1 from  "./images/Group 164.svg"
import img2 from  "./images/Group 163.svg"
import img3 from "./images/LOGO.svg"
import {Image, Row, Col, Container, Alert, Button} from 'react-bootstrap'
import FeatherIcon from 'feather-icons-react'
import {useAuth} from '../context/AuthContext'
import { useHistory, Link } from "react-router-dom"
import { useState } from 'react'
import Test from './QR_scanner'


function HomeB() {
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
            <div style={{position:"absolute", width:"144px", height:"144px", right:"0", top:"0"}}>
            <Image src={img1} fluid/>
            </div>
            <div style={{position:"absolute", bottom:"0",width:"200px",  left:"0"}}>
            <Image src={img2} fluid/>
            </div>        
                <div  onClick={handleLogout} style={{position:"absolute",width:"50px", height:"50px",color:"white", top:"3%",right:"3%"}}>
                    <FeatherIcon  icon="log-out"/>
                </div>     
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
                <div style={{ position: "absolute", left: "37.5%", top:"10%" , width:"200px", height:"200px"}}>
                <Test/>
                </div>
                </Col>
            </Row>
            <Row>
                <Col style={{position:"absolute", top:"80%", textAlign:"center", left:"35%", width:"500px"}}>
                    <Link to="/SearchByImage">
                    <Button style={{backgroundColor:"#574EE0", borderColor:"#574EE0"}}>
                        Search by image
                    </Button>{' '}
                    </Link>
                    <Link to="/SearchByText">
                <Button style={{backgroundColor:"#574EE0", borderColor:"#574EE0"}}>
                     Search by text
                </Button>
                    </Link>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default HomeB
