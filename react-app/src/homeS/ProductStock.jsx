import React from 'react'
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import cookie from 'react-cookies'
import { useEffect, useState } from 'react'


const  ProductStock=()=> {
    let shopID=cookie.load("uid")
    const [data, setData] = useState([])
    console.log(shopID)
    
    useEffect(()=>{
        axios.get(`https://shopverse-backend.azurewebsites.net/api/productList/${shopID}`).then((response)=>{
            setData(response.data)
        })
    }, [data, shopID])


    return (
        <div>
            <Container>
                <div style={{position:"absolute",top:"50%", width:"1000px",height:"240px", overflowY:"scroll", overflowX:"hidden"}}>
                    {data.map((data, index)=>
                    <Row key={index}>
                        <Col>
                        <Card style={{borderColor:"#DD5A34",width:"500px", borderWidth:"1.5px" }} body>
                            {data.name}
                        </Card>
                        <br/>
                        </Col>
                        <Col>
                        <Card style={{borderColor:"#DD5A34",width:"300px",borderWidth:"1.5px"}} body>
                            {data.quantity}

                        </Card>                        <br/>
                        </Col>
                        <br/>
                        <Col>
                        <Link to ="/Update_Item">
                        <Button size="lg"style={{backgroundColor:"#DD5A34",borderRadius:"10px", borderColor:"#DD5A34",top:"60%"}} onClick={()=>{
                            cookie.save("currentProduct",data.name, {path:'/'})
                        }} >Update</Button>                        <br/>
                        </Link>
                        </Col>
                        <br/>
                    </Row>
                        )}
                </div>
                <Row>
                <Col style={{position:"absolute",top:"250px"}}>
                    <Link to ="/Add_Item">            
                    <Button  style={{backgroundColor:"#ffe5dd",borderColor:"#DD5A34",color:"#DD5A34",borderWidth:"1.5px",width:"200px", borderRadius:"10px"}}>Add New</Button>
                    </Link>
                </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductStock
