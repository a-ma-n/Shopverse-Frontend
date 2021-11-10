import React from 'react'
import { Image , Row, Col, Container, Form } from 'react-bootstrap'
import img1 from  "./images/Group 166.svg"
import img2 from  "./images/Group 62.svg"
import img3 from "./images/LOGO.svg"
import img4 from  "./images/Group 152.svg"
import { Jumbotron, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { useState, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
// import axios from 'axios'
import cookie from 'react-cookies'


export default function SignInS() {
    const emailRef1 = useRef()
    const passwordRef1 = useRef()
    
    let uid
    const {Login}=useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false) 
    const history =useHistory()
        
         function handleSubmit(e) {
            e.preventDefault()
        
            try {
              setError("")
              setLoading(true)
               Login(emailRef1.current.value, passwordRef1.current.value).then((response)=>{
                  console.log(response.user.uid)
                  uid=response.user.uid
                  cookie.save('uid',response.user.uid,{ path: "/" })
                  console.log(uid)
              })
              history.push("/Buisness_home")
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
                <Jumbotron style={{position:"absolute",top:"20%", left:"10%",width:"500px", textAlign:"left"}}>
                    <h1 className="display-4" style={{color:"#DD5A34"}}>Sign In</h1>
                    <p className="lead">Welcome Back</p>
                </Jumbotron>
                <div style={{position:"absolute",top:"45%", left:"10%", width:"60vh"}}>
                <Form onSubmit={()=>{
                    handleSubmit()
                }} >
                {error && <Alert variant="danger">{error}</Alert>}

                    <Row>
                        <Col>
                        <Form.Control ref={emailRef1} id="email" type="email" placeholder="Email" required/> 
                        <br/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form.Control ref={passwordRef1} type="password" placeholder="Password" />
                        <br/>
                        </Col>
                    </Row>
                    <div style={{textAlign:"left"}}>
                    <Link to ="/Buisness_home"> 
                    <Button disabled={loading} onClick={handleSubmit}  type="submit" style={{backgroundColor:"#DD5A34", borderColor:"#DD5A34"}}>Sign In</Button>
                    </Link>
                    <br/>
                    <br/>
                    Don't have an account? click here to<Link to="/signUpS"><Button variant="link" style={{color:"#DD5A34"}}>Sign Up</Button></Link>
                    </div>
                    </Form>
                </div>
            </Col>
            </Row>
            </Container>
        </div>
    )
}
