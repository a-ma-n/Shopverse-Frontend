import React  from 'react'
import { ButtonGroup, Button} from 'react-bootstrap'
import { useState } from 'react'
import ProductStock from './ProductStock'
import PendingOrders from './PendingOrders'
import { Fade } from 'react-bootstrap'

const SwitchExample=()=> {
    const [open, setOpen] = useState(false);
    const [color, setColor] = useState("black")
    const [ocolor, setOcolor] = useState("white")
    const [backgroundColor, setBackgroundColor] = useState("white")
    const [obackgroundColor, setObackgroundColor] = useState("#DD5A34")

    const toggle = () => {
        if(color==="black")
        {
            setColor("white")
            setOcolor("black")
            setBackgroundColor("#DD5A34")
            setObackgroundColor("white")
            setOpen(true)
        }
        else
        {
            setColor("black")
            setOcolor("white")
            setBackgroundColor("white")
            setObackgroundColor("#DD5A34")
            setOpen(false)
        }
      };

    return (
        <div>
              <ButtonGroup>
                <Button onClick={toggle} style={{color:color, backgroundColor:backgroundColor ,borderColor:"#DD5A34", borderWidth:"1.5px"}}>Pending Orders</Button>
                <Button onClick={toggle} style={{color:ocolor, backgroundColor:obackgroundColor ,borderColor:"#DD5A34", borderWidth:"1.5px"}}>Product Stock</Button>
            </ButtonGroup>
                <Fade in={open}>
                    <div style={{ position:"absolute",bottom:"-100%"}}>
                    <PendingOrders/>
                    </div>
                </Fade>
                <Fade in={!open}>
                    <div style={{ position:"absolute",bottom:"-100%"}}>
                    <ProductStock/>
                    </div>
                </Fade>
        </div>
    )
}

export default SwitchExample
