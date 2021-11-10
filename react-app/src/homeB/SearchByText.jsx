import React from 'react';
import img1 from  "./images/Group 164.svg"
import img2 from  "./images/Group 163.svg"
import img3 from "./images/LOGO.svg"
import img4 from "./images/bx_bx-qr.svg"
import {Image, Row, Col, Container, Alert,  Form, InputGroup } from 'react-bootstrap'
import FeatherIcon from 'feather-icons-react'
import {useAuth} from '../context/AuthContext'
import { useHistory, Link } from "react-router-dom"
import { useState } from 'react'
import ProductCard from './ProductCard';
// import axios from 'axios'
// import cookie from 'react-cookies'
// import { useEffect } from 'react'




const SearchByText = () => {

    const { logout } = useAuth()
    const history = useHistory()
    const [error, setError] = useState("")
    // const [data, setData] = useState([])
    // let shopID=cookie.load("shopID")
    


    // useEffect(()=>{
    //     axios.get(`http://localhost:8080/api/productList/${shopID}`).then((response)=>{
    //         setData(response.data)
    //     })
    // },[shopID])


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
                <div style={{ position:"absolute",left:"20%",top:"3.5%",height:"35px", width:"35px"}}>
                    <Link to ="/Buyer_home">
                    <Image src={img4} fluid/>
                    </Link>
                </div>
                <div style={{position:"absolute",left:"25%", top:"4%"}}>
                    <Link to="/Cart" style={{color:"black"}}>
                    <FeatherIcon size="32px" icon="shopping-cart"/>
                    </Link>
                </div>
                <div style={{ position:"absolute",width:"300px",left:"30%", top:"3.5%"}}>
                    <Form>
                        <InputGroup>
                        <InputGroup.Text style={{backgroundColor:"white",borderColor:"black",borderRightColor:"white"}}>
                        <FeatherIcon icon="search"/>
                        </InputGroup.Text>
                        <Form.Control style={{borderColor:"black", borderLeftColor:"white"}} type="search" />
                        </InputGroup>
                    </Form>
                </div>
                </Col>
        </Row>
        <div style={{position:"absolute", top:"20%", width:"90%", height:"450px", overflowY:"scroll", overflowX:"hidden"}}>

            <Row xs={1} md={2} className="g-4">
                <Col><ProductCard/></Col>
                {/* <Col><ProductCard/></Col>
                <Col><ProductCard/></Col>
                <Col><ProductCard/></Col> */}
            </Row>

        {/* <Row>
            <Col><ProductCard/></Col>
            <Col><ProductCard/></Col>
            <Col><ProductCard/></Col>
            <Col><ProductCard/></Col>
        </Row> */}
        </div>
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


export default SearchByText;

