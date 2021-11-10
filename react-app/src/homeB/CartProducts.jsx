import React from 'react';
import{ Card } from 'react-bootstrap'
import { useState } from 'react';
import FeatherIcon from 'feather-icons-react'



const CartProducts = () => {
    const [quantity, setQuantity] = useState(1);
    async function addQ(){
        setQuantity(quantity+1)
    }
    const removeQ=async()=>{
        setQuantity(quantity-1)
        if(quantity<=0)
        {
            setQuantity(0)
        }
    }


    return (
        <div>
            <Card style={{textAlign:"left", backgroundColor:"#ded9ff", borderWidth:"2px", borderColor:"#574EE0"}} >
            <Card.Body>
                <Card.Title>Product Name</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <div style={{textAlign:"right"}}>
                    <h5> price</h5>
                    <div>
                    <FeatherIcon icon="plus" onClick={addQ}/>
                    </div>
                    {quantity}{' '}
                    <div>
                    <FeatherIcon icon="minus" onClick={removeQ}/>{' '}
                    </div>
                </div>
            </Card.Body>
            </Card>
        </div>
    );
}

export default CartProducts;
