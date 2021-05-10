import React from "react";
import Treatments from "./treatments/Treatments.js"
import Form from "./Form.js";
import Menu from "./Menu.js";
import SignIn from "./SignIn.js";
import SignUp from "./SignUp.js";
import LandingPage from "./LandingPage"
import Hairdressers from "./Hairdressers.js"
import Footer from "./Footer.js";
import ResetPassword from "./ResetPassword"
import ForgotPassword from "./ForgotPassword"
import UserBookings from "./UserBookings";



import {Route, BrowserRouter as Router} from "react-router-dom"

export default function AppRoute(){

    return(
        <>

        <Router>
        
        <Menu />
        <Route path="/" exact component={LandingPage} />
        <Route path="/behandlingar" exact component={Treatments} />
        <Route path="/form" component={Form} />
        <Route path="/frisorer" component={Hairdressers} />
        <Route path="/logga-in" component={SignIn} />
        <Route path="/skapa-konto" component={SignUp} />
        <Route path="/aterstall-losenord" component={ResetPassword} />
        <Route path="/glomt-losenord" component={ForgotPassword} />
        <Route path="/mina-bokningar" component={UserBookings} />
    
        <Footer />
        </Router>

        </>


    )



}