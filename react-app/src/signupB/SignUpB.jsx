import React from 'react'
import { Image , Row, Col, Container, Form } from 'react-bootstrap'
import img1 from  "./images/Group 165.svg"
import img2 from  "./images/Group 151.svg"
import img3 from "./images/LOGO.svg"
import img4 from "./images/Group 51.svg"
import { Jumbotron, Button, Alert} from 'react-bootstrap'
import { useRef , useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import cookie from 'react-cookies'
import axios from 'axios'


var SignUpB=()=> {
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
       let username=nameRef.current.value;
       let phone_number=phoneRef.current.value;
       let email=emailRef.current.value;
        e.preventDefault()
        
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
          await axios.post("https://shopverse-backend.azurewebsites.net/api/user",{
            username:username,
            phone_number:phone_number,
            email:email,
            uid:uid
          }).then((res) => {
            console.log(res);
        });
          history.push("/Buyer_home")
        } catch(error) {
          setError(error.message)
        }
    
        setLoading(false)
      }

    return (
        <div>     
            <div style={{position:"absolute", width:"144px",right:"0%",top:"0"}}>
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
                    <h1 className="display-4" style={{color:"#5E54F1"}}>Create an Account</h1>
                    <p className="lead">Let's get you all set up.</p>
                </Jumbotron>
                <div style={{position:"absolute",top:"45%", left:"10%", width:"120vh"}}>
                    <Form onSubmit={handleSubmit} style={{paddding:"0"}}>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Row>
                      <Col>
                      <Form.Control ref={nameRef} id="name" type="text" placeholder="User name" required />
                      </Col>
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
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                        <br/>
                        </Col>
                        <Col>
                        <Form.Control ref={confirmRef} type="password" placeholder="Confirm Password" />
                        <br/>
                        </Col>
                    </Row>
                    <div style={{textAlign:"left", height:"10px"}}>
                    <Button disabled={loading} type="submit" style={{backgroundColor:"#5E54F1", borderColor:"#5E54F1"}}>Sign Up</Button>
                    <br/>
                    <br/>
                    Already have an account? click here to<Link to="/signInB"><Button variant="link" style={{color:"#5E54F1"}}>Sign In</Button></Link>
                    </div>
                    </Form>
                </div>
            </Col>
            </Row>
            </Container>
        </div>
    )
}

export default SignUpB