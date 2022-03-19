import React, { useContext, useEffect } from "react";
import "./styles/App.scss";
import { Route, Switch, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import NavMobile from "./components/navbar/NavMoblile";
import Home from "./components/pages/Home";
import Rooms from "./components/pages/rooms/Rooms";
import Room from "./components/pages/rooms/Room";
import Dining from "./components/pages/Dining";
import Footer from "./components/pages/Footer";
import About from "./components/pages/About";
import Tour from "./components/pages/Tour";
import Booking from "./components/booking/Booking";
import Available from "./components/booking/Available";
import Checkout from "./components/booking/Checkout";
import Confirm from "./components/booking/Confirm";
import Auth from "./components/auth/Auth";
import Existing from "./components/booking/Existing";
import NoPage from "./components/pages/NoPage";
import MainHomepage from "./components/pages/MainHomepage/MainHomepage";


import LandingPage from './components/pages/auth/LandingPage'
import LoginPage from './components/pages/auth/LoginPage'
import LoginPageAdmin from './components/pages/auth/LoginPageAdmin'
import ForgetPasswordPage from './components/pages/auth/ForgetPasswordPage'
import RegisterPage from './components/pages/auth/RegisterPage'
import RegisterPageAdmin from './components/pages/auth/RegisterPageAdmin'
import HotelDetails from "./components/Admin/HotelDetails/HotelDetails";
import { Context } from "./context/Context";


const App = () => {
  const {user}= useContext(Context)
  const location = useLocation();
  /* const history = useHistory(); */ 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      {/* <Navbar /> */}
      {/* <NavMobile /> */}
      <Switch>
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/rooms" exact component={Rooms} />
        <Route
          path="/rooms/:id" exact render={(props) => <Room {...props} />} />
        <Route path="/dining" exact component={Dining} />
        <Route path="/about" exact component={About} />
        <Route path="/tours" exact component={Tour} />
        <Route path="/booking" exact component={Booking} />
        <Route path="/booking/availability" exact component={Available} />
        <Route path="/booking/checkout" exact component={Checkout} />
        <Route path="/booking/confirm" exact component={Confirm} />
        <Route path="/booking/existing" exact component={Existing} />
        {/* <Route path="/admin" exact component={Auth} /> */}
        {/* <Route path="*" exact component={NoPage} /> */}
        
        
        
        <Route exact path="/">{user ? <MainHomepage></MainHomepage>:<LandingPage></LandingPage> }</Route>
        
        <Route path="/Customer">{user ? <MainHomepage></MainHomepage>:<LoginPage></LoginPage>}</Route>
        <Route path="/register">{user ? <MainHomepage></MainHomepage>:<RegisterPage></RegisterPage>}</Route>
        
        <Route path="/Admin">{user ? <MainHomepage></MainHomepage>:<LoginPageAdmin></LoginPageAdmin>}</Route>
        <Route path="/AdminRegister">{user ? <MainHomepage></MainHomepage>:<RegisterPageAdmin></RegisterPageAdmin>}</Route>

        <Route path="/forget-password" component={ ForgetPasswordPage } />

        <Route path="/home"><MainHomepage></MainHomepage></Route>
        <Route path="/addHotel" component={HotelDetails}/>

      </Switch>
      <Footer />
    </>
  );
};

export default App;
