import React from 'react';
import { useState,useEffect} from 'react';
import FeatherIcon from 'feather-icons-react'
import { Card //  Container, Row, Col
    } from 'react-bootstrap';
import cookie from 'react-cookies'
import axios from 'axios';
import Quantity from './Quantity'

let title
let price
const ProductCard = () => {
    // const [index, setIndex] = useState(0)
    // const [quantity, setQuantity]=useState(0);
    // const [select, setSelect]= useState(0)
    // const [bgColor, setBgColor]=useState("white")
    // const [icon, setIcon]=useState("")
    const [data, setData] = useState([])
    let shopID=cookie.load("shopID")
    // const [product, setProduct] = useState([{
    //     "quantity":0,
    //     "select":0,
    //     "bgColor":"white",
    //     "icon":""
    // }])

    

    
    useEffect(()=>{
        axios.get(`https://shopverse-backend.azurewebsites.net/api/productList/${shopID}`).then((response)=>{
            setData(response.data)
        })
    },[shopID])
    console.log(data)

    let length=data.length
    console.log(length)

    // useEffect(()=>{
    //     let tempArray=[]
    //     for (var i = 0; i < length; i++) {
    //         tempArray.push(0);
    //     }
    //     setQuantity(tempArray)
    //     setSelect(tempArray)
    // },[length])

    const [product, setProduct] = useState([])

    useEffect(() => {
        let tempArray=[]
        for(var i=0;i<length;i++)
        {
            tempArray.push({
                    "name":data[i].name,
                    "price":data[i].price,
                    "quantity":0,
                    "select":0,
                    "bgColor":"white",
                    "icon":""
            })
        }
        setProduct(tempArray)
        
    }, [data, length])
    console.log(product)

    // for(var i =0;i<length;i++)
    // {
    //     console.log(product[i].bgColor)
    // }

    // for (var i=0 ;i<length; i++)
    //     {
    //         tempArray.push({
    //                 "name":data[i].name,
    //                 "price":data[i].price,
    //                 "quantity":0,
    //                 "select":0,
    //                 "bgColor":"white",
    //                 "icon":""
    //             })
    //         setProduct(tempArray)
    // }
    // console.log(quantity)
    // console.log(select)


    
        // async function Click(index){
        //     let tempArray=[]
        //     for (var i = 0; i < length; i++) {
        //         if(i===index)
        //         {
        //             tempArray.push(1);
        //         }
        //         else{
        //             tempArray.push(0);
        //         }
        //     }
        // setSelect(tempArray)
        // if(quantity[index]===0&&select[index]===0)
        //     {
        //         setBgColor("white")
        //         setIcon("")
        //       }
        //       else
        //       {
        //           setBgColor("#b5d6ff")
        //           setIcon("check-circle")
        //           setQuantity(1)
        //       }
        //       if(select===1)
        //       {
        //           setSelect(0)
        //       }           
        //     }
        

        // function removeQuantity(index){
        //     let qtemp=product[index].quantity;
        //     qtemp=qtemp-1;
        //     if(qtemp<0)
        //     {
        //         qtemp=0
        //     }
        //     let tempArray= []
        //     for (var i=0;i<length;i++)
        //     { 
        //         if(i===index)
        //         {
        //             tempArray.push({
        //             "name":data[i].name,
        //             "price":data[i].price,
        //             "quantity":qtemp,
        //             "select":0,
        //             "bgColor":"white",
        //             "icon":""
        //             })
        //         }
        //         else
        //         {
        //             tempArray.push({
        //             "name":data[i].name,
        //             "price":data[i].price,
        //             "quantity":0,
        //             "select":0,
        //             "bgColor":"white",
        //             "icon":""
        //             })
        //         }
        //     }
        //         setProduct(tempArray)

        // }
        // function addQuantity(index){
        //     let qtemp=product[index].quantity;
        //     qtemp=qtemp+1;
        //     let tempArray= product
        //     for (var i=0;i<length;i++)
        //     {
        //         if(i===index)
        //         {
        //             tempArray.push({
        //             "name":data[i].name,
        //             "price":data[i].price,
        //             "quantity":qtemp,
        //             "select":0,
        //             "bgColor":"white",
        //             "icon":""
        //             })
        //         }
        //         // else
        //         // {
        //         //     tempArray.push({
        //         //     "name":data[i].name,
        //         //     "price":data[i].price,
        //         //     "quantity":0,
        //         //     "select":0,
        //         //     "bgColor":"white",
        //         //     "icon":""
        //         //     })
        //         // }
        //     }
        //     setProduct(tempArray)

        // }

        // async function addQuantity(){
        //     let tempArray=[]
        //     for(var i=0;i<length;i++)
        //     {
        //         console.log(quantity[i])
        //         if(i===index)
        //         {
        //             tempArray.push(quantity[index]+1)
        //         }
        //         else
        //         {
        //             tempArray.push(quantity[index])
        //         }
    
        //     }
        //     setQuantity(tempArray)
        //     if(quantity[index]<=1)
        //     {
        //         setQuantity(0)
        //         setBgColor("white")
        //         setIcon("")
        //     }
        // }

    return (
        <div>
        {product.map((data,j=0) =>
            <Card style={{ backgroundColor:data.bgColor}} >
                <Card.Img 
                // onClick={Click} 
                variant="top" src="https://wallpapercave.com/wp/wp1836700.jpg"  />
                <Card.Body style={{textAlign:"left"}}>
                    <Card.Title 
                    //  onClick={Click}
                     >
                        <div>
                        {data.name}                               
                        </div>
                        <div style={{textAlign:"right"}}>
                        <FeatherIcon icon={data.icon}/>
                        </div>
                    </Card.Title>
                    <Card.Text>
                        {data.price}  
                    </Card.Text>
                    <Card.Footer style={{textAlign:"right"}}>
                        {/* <FeatherIcon icon="minus" size="16px" 
                        onClick={removeQuantity}
                        />{' '}
                            {data.quantity}
                        <FeatherIcon icon="plus" size="16px" 
                        onClick={addQuantity}
                        />{' '} */}
                        <Quantity/>
                    </Card.Footer>
                </Card.Body>
            </Card>
        )} 
        </div>
    );
}

export default ProductCard;
export {title,price}
