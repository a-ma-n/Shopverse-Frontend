import React from "react";
import img1 from "./images/Group 160.svg";
import img2 from "./images/Group 62.svg";
import img3 from "./images/LOGO.svg";
import img4 from "./images/bx_bx-qr.svg";
import img5 from "./images/arrow_back_ios.svg";
import {
  Image,
  Row,
  Col,
  Container,
  Alert,
  Card,
  
} from "react-bootstrap";
import FeatherIcon from "feather-icons-react";
import { useAuth } from "../context/AuthContext";
import { useHistory, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import cookie from "react-cookies";

function OrderNumber() {
  const { logout } = useAuth();
  const history = useHistory();
  const [error, setError] = useState("");

  let shopID = cookie.load("uid");
  let userID = cookie.load("userID");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://api/ordersById/${shopID}/${userID}`)
      .then((response) => {
        setData(response.data);
      });
  }, [shopID, userID]);
  // const readOrder=useEffect(()=>{
  //     axios.delete(`http://localhost:8080/api/deleteOrder/${shopID}/${userID}`)
  // })

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/signInS");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div>
      <Container>
        {error && <Alert variant="danger">{error}</Alert>}
        <Row>
          <Col>
            <div
              style={{
                position: "absolute",
                width: "150px",
                height: "10px",
                left: "5%",
              }}
            >
              <Link to="/">
                <Image src={img3} fluid />
              </Link>
            </div>
            <div
              style={{
                position: "absolute",
                width: "50px",
                height: "50px",
                left: "5%",
                top: "15%",
              }}
            >
              <Link to="/Buisness_home">
                <Image src={img5} fluid />
              </Link>
              <h1 style={{ width: "500px", top: "20%", position: "absolute" }}>
                #Order Number
              </h1>
            </div>
          </Col>
          <Col>
            <div
              style={{
                position: "absolute",
                left: "20%",
                top: "3.5%",
                height: "35px",
                width: "35px",
              }}
            >
              <Link to="/QR_Generation">
                <Image src={img4} fluid />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <div
        style={{
          position: "absolute",
          width: "144px",
          height: "144px",
          right: "0%",
          top: "0",
        }}
      >
        <Image src={img1} fluid />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "0",
          width: "200px",
          left: "0%",
        }}
      >
        <Image src={img2} fluid />
      </div>
      <div
        onClick={handleLogout}
        style={{
          position: "absolute",
          width: "50px",
          height: "50px",
          color: "white",
          top: "3%",
          right: "3%",
        }}
      >
        <FeatherIcon icon="log-out" />
      </div>
      <Container>
          <div
            style={{
              position:"absolute",
              top: "35%",
              width: "1000px",
              height: "250px",
              overflowY: "scroll",
              overflowX: "hidden",
              left: "12%",
            }}
          >
        {data.map((data, index) => {
          return (
              <Row key={index}>
                <Col>
                  <Card
                    style={{
                      borderColor: "#DD5A34",
                      width: "520px",
                      borderWidth: "1.5px",
                      overflow: "hidden",
                    }}
                    body
                  >
                    {data.product}
                  </Card>
                  <br />
                </Col>
                <Col>
                  <Card
                    style={{
                      borderColor: "#DD5A34",
                      width: "200px",
                      borderWidth: "1.5px",
                      overflow: "hidden",
                    }}
                    body
                  >
                    {data.quantity}
                  </Card>{" "}
                  <br />
                </Col>
                <br />
                <Col>
                  <Card
                    style={{
                      borderColor: "#DD5A34",
                      width: "200px",
                      borderWidth: "1.5px",
                    }}
                    body
                  >
                    {data.name}
                  </Card>{" "}
                  <br />
                </Col>
                <br />
              </Row>
          );
        })}
          </div>
      </Container>
    </div>
  );
}

export default OrderNumber;
// <Container>
//         {data.map((data, index) => {
//           console.log("data",data)
//           return (
//
//           );
//         })}
//         <Row>
//           <div
//             style={{
//               position: "absolute",
//               top: "85%",
//               width: "400px",
//               left: "65%",
//             }}
//           >
//             <Button
//               style={{ backgroundColor: "#DD5A34", borderColor: "#DD5A34" }}
//               // onClick={readOrder}
//             >
//               Mark as read
//             </Button>
//           </div>
//         </Row>
//       </Container>
