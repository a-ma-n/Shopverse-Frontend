import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import FeatherIcon from 'feather-icons-react'
import { useState } from 'react'



const  SearchBar=()=> {
    const [search, setSearch] = useState('')
    return (
        <div>
            <div style={{ position:"absolute",width:"300px",left:"25%", top:"3.5%"}}>
                    <Form action="/Buisness_home" method="get">
                        <InputGroup name="s" value={search} onChange={(e) => setSearch(e.target.value)}>
                        {/* <InputGroup.Prepend> */}
                        <InputGroup.Text style={{backgroundColor:"white",borderColor:"black",borderRightColor:"white"}}>
                        <FeatherIcon icon="search"/>
                        </InputGroup.Text>
                        {/* </InputGroup.Prepend> */}
                        <Form.Control style={{borderColor:"black", borderLeftColor:"white"}} type="search" />
                        </InputGroup>
                    </Form>
                </div>
        </div>
    )
}

export default SearchBar
