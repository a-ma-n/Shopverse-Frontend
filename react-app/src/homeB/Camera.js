import React from "react";
import { Image, Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


class Camera extends React.Component {
  constructor() {
    super();

    this.cameraNumber = 0;

    this.state = {
      imageDataURL: null,
    };
  }

  initializeMedia = async () => {
    this.setState({ imageDataURL: null });

    if (!("mediaDevices" in navigator)) {
      navigator.mediaDevices = {};
    }

    if (!("getUserMedia" in navigator.mediaDevices)) {
      navigator.mediaDevices.getUserMedia = function (constraints) {
        var getUserMedia =
          navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        if (!getUserMedia) {
          return Promise.reject(new Error("getUserMedia Not Implemented"));
        }

        return new Promise((resolve, reject) => {
          getUserMedia.call(navigator, constraints, resolve, reject);
        });
      };
    }

    //Get the details of video inputs of the device
    const videoInputs = await this.getListOfVideoInputs();

    //The device has a camera
    if (videoInputs.length) {
      navigator.mediaDevices
        .getUserMedia({
          video: {
            deviceId: {
              exact: videoInputs[this.cameraNumber].deviceId,
            },
          },
        })
        .then((stream) => {
          this.player.srcObject = stream;
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("The device does not have a camera");
    }
  };

  capturePicture = () => {
    var canvas = document.createElement("canvas");
    canvas.width = this.player.videoWidth;
    canvas.height = this.player.videoHeight;
    var contex = canvas.getContext("2d");
    contex.drawImage(this.player, 0, 0, canvas.width, canvas.height);
    this.player.srcObject.getVideoTracks().forEach((track) => {
      track.stop();
    });

    console.log(canvas.toDataURL());
    this.setState({ imageDataURL: canvas.toDataURL() });
  };

  switchCamera = async () => {
    const listOfVideoInputs = await this.getListOfVideoInputs();

    // The device has more than one camera
    if (listOfVideoInputs.length > 1) {
      if (this.player.srcObject) {
        this.player.srcObject.getVideoTracks().forEach((track) => {
          track.stop();
        });
      }

      // switch to second camera
      if (this.cameraNumber === 0) {
        this.cameraNumber = 1;
      }
      // switch to first camera
      else if (this.cameraNumber === 1) {
        this.cameraNumber = 0;
      }

      // Restart based on camera input
      this.initializeMedia();
    } else if (listOfVideoInputs.length === 1) {
      alert("The device has only one camera");
    } else {
      alert("The device does not have a camera");
    }
  };

  getListOfVideoInputs = async () => {
    // Get the details of audio and video output of the device
    const enumerateDevices = await navigator.mediaDevices.enumerateDevices();

    //Filter video outputs (for devices with multiple cameras)
    return enumerateDevices.filter((device) => device.kind === "videoinput");
  };

  render() {
    const playerORImage = Boolean(this.state.imageDataURL) ? (
      <Container>
        <Row>
          <Col>
           <Image  style={{position:"absolute", top:"17%", left:"40%", width:"30%",height:"50%"}} src={this.state.imageDataURL} alt="cameraPic"rounded fluid/>
          </Col>
        </Row>
      </Container>


    ) : (
      <video width="50%" height="50%" style={{position:"absolute", top:"20%", left:"27.5%"}}
        ref={(refrence) => {
          this.player = refrence;
        }}
        autoPlay
      ></video>
    );

    return (
      <div className="App">
        {playerORImage}
        <Container>
          <Row>
            <Col style={{position:"absolute", top:"75%", left:"34%", width:"500px"}}>
            {/* <ButtonGroup aria-label="Basic example" style={{backgroundColor:"#DD5A34", borderColor:"#DD5A34"}}> */}
              <Button style={{backgroundColor:"#574EE0", borderColor:"#574EE0"}} onClick={this.initializeMedia}>Open Camera</Button>{' '}
              <Link to ="/Search_Images">
              <Button style={{backgroundColor:"#574EE0", borderColor:"#574EE0"}} onClick={this.capturePicture}>Capture</Button>{' '}
              </Link>
              <Button style={{backgroundColor:"#574EE0", borderColor:"#574EE0"}} onClick={this.switchCamera}>Switch Camera</Button>{' '}
              <br/>
              <Link to="/SearchByText">
                <br/>
              <Button style={{backgroundColor:"#574EE0", borderColor:"#574EE0"}}>Search by text </Button>
              </Link>

            {/* </ButtonGroup> */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Camera;