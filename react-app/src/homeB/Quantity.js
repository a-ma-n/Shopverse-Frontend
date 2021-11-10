import React from 'react'
import { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import FeatherIcon from 'feather-icons-react'

function Quantity() {
    const [quantity, setQuantity] = useState(0)
    const [color, setColor] = useState("white")
    const [icon, setIcon] = useState("")

        const addQuantity=()=>{
            let c=quantity;
            c=c+1
            setQuantity(c)
            setColor("#9cf3ff")
            setIcon("check-circle")
        }


        const removeQuantity=()=>{
            let c=quantity;
            c=c-1
            if(c<=0)
            {
                c=0
                setColor("white")
                setIcon("")
            }
            setQuantity(c)
        }
        
  
    return (
        <div style={{backgroundColor:color}}>
            <Container>
                <Row>
                    <Col>
                    <FeatherIcon icon="minus" size="16px" 
                        onClick={removeQuantity}
                        />{' '}
                            {quantity}
                            <FeatherIcon icon="plus" size="16px" 
                        onClick={addQuantity}
                        />{' '}
                    </Col>
                    <Col>
                    <FeatherIcon icon={icon}/>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Quantity

