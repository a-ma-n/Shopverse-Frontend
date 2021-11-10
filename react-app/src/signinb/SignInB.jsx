import React from 'react'
import { Image , Row, Col, Container, Form } from 'react-bootstrap'
import img1 from  "./images/Group 165.svg"
import img2 from  "./images/Group 151.svg"
import img3 from "./images/LOGO.svg"
import img4 from "./images/Group 51.svg"
import { Jumbotron, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { useState, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'


export default function SignInB() {  
    const emailRef = useRef()
    const passwordRef = useRef()
    const {Login}=useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false) 
    const history =useHistory()



    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
          setError("")
          setLoading(true)
          await Login(emailRef.current.value, passwordRef.current.value)
          history.push("/Buyer_home")
        } catch {
          setError("Failed to log in")
        }
        
        setLoading(false)
    }
    const currentUser=useAuth()
    console.log(currentUser)

    return (
        <div>     
            <div style={{position:"absolute",width:"144px", right:"0%",top:"0"}}>
            <Image src={img4} fluid/>
            </div>
            <div style={{position:"absolute", width:"294px",right:"0%",bottom:"0%"}}>
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
                    <h1 className="display-4" style={{color:"#5E54F1"}}>Sign In</h1>
                    <p className="lead">Welcome back</p>
                </Jumbotron>
                <div style={{position:"absolute",top:"45%", left:"10%", width:"60vh"}}>
                    <Form onSubmit={handleSubmit} >
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Row>
                        <Col>
                        <Form.Control  id="email" ref={emailRef} type="email" placeholder="Email" required/> 
                        <br/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form.Control  type="password" ref={passwordRef} placeholder="Password" />
                        <br/>
                        </Col>
                        
                    </Row>
                    <div style={{textAlign:"left"}}>
                    <Button disabled={loading} type="submit" style={{backgroundColor:"#5E54F1", borderColor:"#5E54F1"}}>Sign In</Button>
                    <br/>
                    <br/>
                    Don't have an account? click here to<Link to="/signUpB"><Button variant="link" style={{color:"#5E54F1"}}>Sign Up</Button></Link>
                    </div>
                    </Form>
                </div>
            </Col>
            </Row>
            </Container>
        </div>
    )
}



