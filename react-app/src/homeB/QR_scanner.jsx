import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import cookie from 'react-cookies'
 
class Test extends Component {
  state = {
    result: 'No result'
  }
 
  handleScan = data => {
    if (data) {
      cookie.save("shopID", data,{ path: "/" })
      console.log(data)
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }
  render() {
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '400px' }}
        />
        {/* <p>{this.state.result}</p> */}
      </div>
    )
  }
}

export default Test