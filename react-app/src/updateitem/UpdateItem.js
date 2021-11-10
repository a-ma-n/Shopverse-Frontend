import React from 'react'
import img1 from  "./images/Group 160.svg"
import img2 from  "./images/Group 62.svg"
import img3 from "./images/LOGO.svg"
import img4 from "./images/bx_bx-qr.svg"
import img5 from "./images/arrow_back_ios.svg"
import {Image,  Row, Col, Container,  Alert} from 'react-bootstrap'
import { useHistory, Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react'
import { useAuth } from '../context/AuthContext'
import { useState, 
    // useEffect
 } from 'react'
import { Form, Button } from 'react-bootstrap'
import Camera from './Camera'
import axios from 'axios'
import cookie from 'react-cookies'
import { useRef } from 'react'

export default function UpdateItem() {
    const { logout } = useAuth()
    const history = useHistory()
    const [error, setError] = useState("")
    let currentName=cookie.load("currentProduct")
    let uid=cookie.load("uid")
    const pnameRef= useRef()
    const quantityRef= useRef()
    const priceRef= useRef()
    // const [pname, setPname] = useState(currentName)
    // const [price,setPrice]=useState(100)
    // const [quantity,setQuantity]=useState(100)
    let pname= currentName
    let price
    let quantity
    const [message, setMessage] = useState()
    
    console.log(currentName)
    console.log(uid)

    const update=()=>{
        // useEffect(()=>{
            let shopID=uid
            // setPname(pnameRef.current.value)
            // setQuantity(quantityRef.current.value)
            // setPrice(priceRef.current.value)
            pname=pnameRef.current.value
            price=priceRef.current.value
            quantity=quantityRef.current.value
    
            try {
                axios.put(`https://shopverse-backend.azurewebsites.net/api/updateProduct/${uid}/${currentName}`,{
                    name:pname,
                    quantity:quantity,
                    price:price,
                    shopID:shopID
                    }).then((res) => {
                            console.log(res);
                            setMessage("Product Updated !")
                    })
                
            } catch (error) {
                console.log(error.message)
            }
        // }, [currentName, pname, price, quantity, uid])
    }
   

    async function handleLogout() {
        setError("")
    
        try {
          await logout()
          history.push("/signInS")
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
                    <div  style={{position:"absolute", width:"50px", height:"50px",left:"5%",top:"15%"}}>
                    <Link to="/Buisness_home">
                    <Image src={img5} fluid/>
                    </Link>
                </div>
                 </Col>
                <Col>
                <div style={{ position:"absolute",left:"20%",top:"3.5%",height:"35px", width:"35px"}}>
                    <Link to ="/QR_Generation">
                    <Image src={img4} fluid/>
                    </Link>
                </div>
                </Col>
            </Row>
            </Container>
            <Container>
            <Row>
                <Col>
                <div style={{top:"25%", position:"absolute", left:"15%"}}>
                    <h1 className="display-4" style={{color:"#F16B44"}}>
                        Update Item
                    </h1>
                    <Form onSubmit={update}>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <br />
                    <Form.Control ref={pnameRef} style={{borderColor:"#DD5A34",  borderWidth:"1.5px"}} type="text" placeholder="Product name" />
                    <br />
                    <Row>
                        <Col>
                            <Form.Control ref={priceRef} style={{borderColor:"#DD5A34",borderWidth:"1.5px"}} type="text" placeholder="Product Cost" />
                            <br /></Col>
                        <Col>
                    <Form.Control ref={quantityRef} style={{borderColor:"#DD5A34", borderWidth:"1.5px"}}  type="text" placeholder="Stock" />
                    <br />
                    </Col>
                    </Row>
                    </Form>
                    <div className="d-grid gap-2">
                    <Button type="submit" onClick={update} style={{backgroundColor:"#DD5A34", borderColor:"#DD5A34"}}>Update Item</Button>
                    </div>

                </div>
                </Col>
                <Col>
                <div >
                <Camera/>
                </div>
                </Col>
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
    )
}
