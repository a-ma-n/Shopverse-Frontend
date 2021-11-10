import React from 'react'
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import './PendingOrders.css'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import cookie from 'react-cookies'
import { Link } from 'react-router-dom'

export default function PendingOrders() {
    let shopID=cookie.load("uid")
    const [data, setData] = useState([])
    
    useEffect(()=>{
        axios.get(`https://shopverse-backend.azurewebsites.net/api/orders/${shopID}`).then((response)=>{
            setData(response.data)
        })
    },[data, shopID])
    return (
        <div>
            {data.map((data, index)=>
            <Container key={index}>
            <div style={{position:"absolute",top:"50%", width:"1000px",height:"240px", overflowY:"scroll",overflowX:"hidden"}}>
                    <Row>
                        <Col>
                        <Card style={{borderColor:"#DD5A34",width:"500px", borderWidth:"1.5px", overflow:"hidden"}} body> UserID: {data.userId}</Card>
                        <br/>
                        </Col>
                        <Col>
                        <Card style={{borderColor:"#DD5A34",width:"300px", borderWidth:"1.5px", overflow:"hidden"}} body>{data.name}</Card>
                        <br/>
                        </Col>
                        <br/>
                        <Col>
                        <Link to="/Order_Number">
                        <Button  onClick={cookie.save("userID", data.userId, {path:"/"})}size="lg"style={{backgroundColor:"#DD5A34",borderRadius:"10px", borderColor:"#DD5A34",top:"60%"}}>View</Button>                         
                        </Link>
                        </Col>
                        <br/>
                    </Row>
                </div>
            </Container>
                )}
        </div>
    )
}
