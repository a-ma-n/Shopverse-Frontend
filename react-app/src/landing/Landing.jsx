import React from 'react'
import{ Row,Col,Container} from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Landing.scss';
import img1 from './images/Group 6.svg'
import img2 from './images/LOGO.svg'
import img3 from './images/Group 101.svg'
import img4 from './images/image 3.svg'
import img5 from './images/Group 77.svg'
import FeatherIcons from 'feather-icons-react'

export default function Landing() {
    return (
        <div>
            <Container>
            <Row>
                <Col>
                <div className="logo"style={{position:"absolute", width:"150px", height:"10px",left:"5%"}}>
                <Image src={img2} fluid/>
                </div>
                <Row>
                <div>
                <Jumbotron style={{position:"absolute",top:"20%", left:"10%",width:"500px", textAlign:"left"}}>
                    <h1 className="display-4" style={{color:"#5E54F1"}}>Customers</h1>
                    <p className="lead">For those who wish to buy products from these stores safely.</p>
                    <hr className="my-2" />
                    <p className="lead">
                    <Link to="/signInB">
                    <Button style={{backgroundColor:"#5E54F1"}}>Get Started</Button>
                    </Link>
                    </p>
                </Jumbotron>
                </div>
                <div>
                <Jumbotron style={{position:"absolute", top:"65%", left:"10%",width:"500px", textAlign:"left"}}>
                    <h1 className="display-4" style={{color:"#F16B44"}}>Shops</h1>
                    <p className="lead">For shop owners, who wish to increase their sales and ensuring safe purchase of the products in their store.</p>
                    <hr className="my-2" />
                    <p className="lead">
                    <Link to="/signInS">
                    <Button style={{backgroundColor:"#F16B44", borderColor:"#F16B44"}}>Get Started</Button>
                    </Link>
                    </p>
                </Jumbotron>
                </div>
                </Row>
                </Col>
                <Col>
                <div style={{position:"absolute", right:"0%",width:"500px", height:"10px"}}>
                <Image src={img1} fluid/>
                </div>
                </Col>
            </Row>
                <div style={{position:"absolute", right:"0%",top:"120%"}}>
                <Image src={img3} fluid/>
                </div>
            <Row>
                <Col style={{position:"absolute",top:"130%", width:"1000px", left:"15%"}}>
                <Jumbotron>
                        <h1 className="display-4">Who Are We</h1>
                        <p className="lead" style={{width:"40%",position:"absolute", left:"30%"}}>This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                </Jumbotron>
                </Col>
                <Col xs={12} md={8}>
                <Jumbotron style={{position:"absolute", top:"230%", left:"10%",width:"800px", textAlign:"left"}}>
                    <h1 className="display-4" >About Us</h1>
                    <p className="lead">Indian Society for Technical Education or ISTE is a national, professional, non-profit making Society registered under the Societies Registration Act of 1860. The major objective of ISTE is to assist and contribute to the production and development of top-quality professional engineers and technicians required by industries and other organizations.</p>
                    <br/>
                </Jumbotron>
                </Col>
                <Col>
                <div style={{position:"absolute", top:"270%",left:"10%"}}>
                    <Link to="https://www.instagram.com/iste_vit_vellore/?igshid=12xhs1luslzk0">
                    <FeatherIcons icon="instagram"/>{'  '}                        
                    </Link>
                    <Link to="https://www.facebook.com/ISTE.VIT/ ">
                    <FeatherIcons icon="facebook" />{'   '}
                    </Link>
                    <Link to="https://in.linkedin.com/company/indian-society-for-technical-education">
                    <FeatherIcons icon="linkedin"/>{'   '}
                    </Link>
                </div>
                </Col>
                <Col xs={6} md={4}>
                    <div style={{position:"absolute", top:"230%",left:"75%"}}>
                    <Image src={img4} fluid/>
                    </div>
                </Col>
            </Row>
            </Container>
            <div style={{position:"absolute",top:"270%"}}>
            <Image src={img5} fluid/>
            </div>
        </div>
    )
}
