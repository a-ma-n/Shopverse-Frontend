import React from 'react';
import img1 from  "./images/Group 164.svg"
import img2 from  "./images/Group 163.svg"
import img3 from "./images/LOGO.svg"
import GooglePayButton from '@google-pay/button-react'
import {Image, Row, Col, Container, Alert, Button, Card} from 'react-bootstrap'
import FeatherIcon from 'feather-icons-react'
import {useAuth} from '../context/AuthContext'
import { useHistory, Link } from "react-router-dom"
import { useState } from 'react'
import CartProducts from './CartProducts';
const Cart = () => {
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
        </Row>
        <div style={{position:"absolute",width:"90%", top:"20%", height:"400px", overflowY:"scroll"}}>
        <Row>
            <CartProducts/><br/>{' '}
        </Row>
        <br/>
        <Row>
            <CartProducts/><br/>{' '}
        </Row>
        <br/>
        <Row>
            <CartProducts/><br/>{' '}
        </Row>
        <br/>
        <Row>
            <CartProducts/><br/>{' '}
        </Row>
        </div>

            <div style={{position:"absolute", top:"77%", textAlign:"right", right:"5%"}}>
        <h5>Total cost</h5>
        <GooglePayButton
        style={{backgroundColor:"#574EE0", borderColor:"#574EE0"}}
        environment="TEST"
        paymentRequest={{
            apiVersion:2,
            apiVersionMinor:0,
            allowedPaymentMethods:[
                {
                    type:"Card",
                    parameters:{
                        allowedAuthMethods:['PAN_ONLY','CRYPTOGRAM_3DS'],
                        allowedCardNetworks:['MASTERCARD','VISA'],
                    },
                    tokenizationSpecification:'PAYMENT_GATEWAY',
                    parameters:{
                        gateway:"example",
                        gatewayMerchantId:"exampleGatewayMerchantId",
                    },
                },
            ],
            merchantInfo:{
                merchantName:"Random"
            },
            transactionInfo:{
                totalPriceStatus:"FINAL",
                totalPriceLabel:"Total",
                // totalPrice:item.price.toFixed(2),
                currencyCode:"INR",
                countryCode:"IND"
            }
        }
    }/>
    <br/>
    <div>
    <br/>
    <Link to="/Token">
    <Button style={{backgroundColor:"#574EE0", borderColor:"#574EE0"}}> Proceed to generate token</Button>
    </Link>
    </div>
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

export default Cart;
