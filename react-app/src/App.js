import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddItem from './additem';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import HomeB from './homeB';
import Cart from './homeB/Cart';
import ImageScan from './homeB/ImageScan';
import ImageSearch from './homeB/ImageSearch';
import SearchByText from './homeB/SearchByText';
import Token from './homeB/Token';
import HomeS from './homeS';
import Landing from './landing';
import OrderNumber from './ordernumber';
// import ThankYouS from './thankyouS';
import QR_generator from './qr_generator';
import SignInB from './signinb';
import SignInS from './signins';
import SignUpB from './signupB';
import SignUpS from './signupS';
import ThankYouB from './thankyoub';
import ThankYouS from './thankyouS/ThankYouS';
import UpdateItem from './updateitem';


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