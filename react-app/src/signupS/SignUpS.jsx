import React from 'react'
import { Image , Row, Col, Container, Form } from 'react-bootstrap'
import img1 from  "./images/Group 166.svg"
import img2 from  "./images/Group 62.svg"
import img3 from "./images/LOGO.svg"
import img4 from  "./images/Group 152.svg"
import { Jumbotron, Button, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useRef , useState } from 'react'
import { useAuth } from '../context/AuthContext'
import './SignUpS.css'
import axios from 'axios'
import cookie from 'react-cookies'


var SignUpS=()=> {

    const emailRef=useRef();
    const nameRef=useRef();
    const phoneRef=useRef();
    const passwordRef=useRef();
    const confirmRef=useRef();
    const {SignUp}= useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    let history = useHistory()
    let uid

     let handleSubmit= async(e)=> {
        e.preventDefault()
        let shopname=nameRef.current.value;
        let phone_number=phoneRef.current.value;
        let email=emailRef.current.value;
    
        if (passwordRef.current.value !== confirmRef.current.value) {
          return setError("Passwords do not match")
        }
        if (phoneRef.current.value.length<10 ) {
          return setError("Invalid Phone Number")
        }
    
        try {
          setError("")
          setLoading(true)
          await SignUp(emailRef.current.value, passwordRef.current.value).then((response)=>{
            uid=response.user.uid
            cookie.save("uid",uid,{ path: "/" });
            console.log(response.user.uid)
          })
          await axios.post("https://shopverse-backend.azurewebsites.net/api/shop",{
            shopname:shopname,
            phone_number:phone_number,
            email:email,
            uid:uid

          }).then((res) => {
            console.log(res);
        });
          history.push("/thankYouS")
        } catch(error) {
          setError(error.message)
        }
    
        setLoading(false)
      }


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
                    <h1 className="display-4" style={{color:"#DD5A34"}}>Create an Account</h1>
                    <p className="lead">Let's get you all set up.</p>
                </Jumbotron>
                <div style={{position:"absolute",top:"45%", left:"10%", width:"120vh"}}>
                <Form onSubmit={handleSubmit}>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Row>
                        <Col>
                        <Form.Control ref={emailRef} id="email" type="email" placeholder="Email" required/> 
                        <br/>
                        </Col>
                        <Col>
                        <Form.Control ref={phoneRef} id="phone-number" type="text" placeholder="Phone Number" />
                        <br/>
                        </Col>
                    </Row>
                    <Row>
                    <Col>
                      <Form.Control ref={nameRef} id="name" type="text" placeholder="Shop Name" required />
                      </Col>
                        <Col>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                        <br/>
                        </Col>
                        <Col>
                        <Form.Control ref={confirmRef} type="password" placeholder="Confirm Password" />
                        <br/>
                        </Col>
                    </Row>
                    <div style={{textAlign:"left"}}>
                    <Button disabled={loading} type="submit" style={{backgroundColor:"#DD5A34", borderColor:"#DD5A34"}}>Sign Up</Button>
                    <br/>
                    <br/>
                    Already have an account? click here to<Link to="/signInS"><Button variant="link" style={{color:"#DD5A34"}}>Sign In</Button></Link>
                    </div>
                    </Form>
                </div>
            </Col>
            </Row>
            </Container>
        </div>
    )
}

export default SignUpS

