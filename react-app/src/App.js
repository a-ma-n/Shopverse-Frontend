import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Landing from './landing';
import SignUpS from './signupS';
// import ThankYouS from './thankyouS';
import QR_generator from './qr_generator';
import SignUpB from './signupB';
import SignInS from './signins';
import { AuthProvider } from './context/AuthContext'
import SignInB from './signinb';
import ThankYouB from './thankyoub';
import ThankYouS from './thankyouS/ThankYouS';
import HomeS from './homeS';
import HomeB from './homeB';
import AddItem from './additem';
import UpdateItem from './updateitem';
import OrderNumber from './ordernumber';
import ImageScan from './homeB/ImageScan';
import ImageSearch from './homeB/ImageSearch';
import SearchByText from './homeB/SearchByText';
import Cart from './homeB/Cart';
import Payment from './homeB/Token';
import Token from './homeB/Token';


function App() {
    return ( <
        div className = "App" >
        <
        script >
        var Alert = ReactBootstrap.Alert; < /script>  <
        Router >
        <
        AuthProvider >
        <
        Switch >
        <
        Route exact path = "/"
        component = { Landing }
        />  <
        Route exact path = "/signInB"
        component = { SignInB }
        /> <
        Route exact path = "/signUpB"
        component = { SignUpB }
        />  <
        Route exact path = "/signUpS"
        component = { SignUpS }
        /> <
        Route exact path = "/signInS"
        component = { SignInS }
        />  <
        Route exact path = "/thankYouB"
        component = { ThankYouB }
        />  <
        Route exact path = "/thankYouS"
        component = { ThankYouS }
        /> <
        Route exact path = "/QR_Generation"
        component = { QR_generator }
        />  <
        Route exact path = "/Buisness_home"
        component = { HomeS }
        />  <
        Route exact path = "/Buyer_home"
        component = { HomeB }
        />  <
        Route exact path = "/Add_Item"
        component = { AddItem }
        />  <
        Route exact path = "/Update_Item"
        component = { UpdateItem }
        />  <
        Route exact path = "/Order_Number"
        component = { OrderNumber }
        /> <
        Route exact path = "/SearchByImage"
        component = { ImageScan }
        /> <
        Route exact path = "/Search_Images"
        component = { ImageSearch }
        /> < 
        Route exact path = "/SearchByText"
        component = { SearchByText }
        /> < 
        Route exact path = "/Cart"
        component = { Cart }
        /> < 
        Route exact path = "/Token"
        component = { Token }
        /> < /
        Switch > <
        /AuthProvider>  < /
        Router > <
        /div>
    );
}

export default App;