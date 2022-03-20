import React, { useEffect } from "react";
import "./styles/App.scss";
import { Route, Switch, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import NavMobile from "./components/navbar/NavMoblile";
// import Home from "./components/pages/Home";
import Homi from "./components/pages/Home"
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


const App = () => {
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
        {/* 0 */}
        <Route path="/homi" exact component={Homi} />

        {/* 0 */}

        <Route path="/rooms" exact component={Rooms} />
        <Route
          path="/rooms/:id"
          exact
          render={(props) => <Room {...props} />}
        />


        {/* 1 */}
        <Route path="/dining" exact component={Dining} />
        {/* 0 */}
        <Route path="/about" exact component={About} />
        {/* 0 */}
        <Route path="/tours" exact component={Tour} />
        {/* 0 */}
        <Route path="/booking" exact component={Booking} />
        {/* 1 */}
        <Route path="/booking/availability" exact component={Available} />
        <Route path="/booking/checkout" exact component={Checkout} />
        <Route path="/booking/confirm" exact component={Confirm} />
        <Route path="/booking/existing" exact component={Existing} />
        {/* <Route path="/admin" exact component={Auth} /> */}
        {/* <Route path="*" exact component={NoPage} /> */}
        
        
        
        <Route exact path="/" component={ LandingPage } />
        <Route path="/Customer" component={ LoginPage } />
        <Route path="/Admin" component={ LoginPageAdmin } />
        <Route path="/forget-password" component={ ForgetPasswordPage } />
        <Route path="/register" component={ RegisterPage } />
        <Route path="/AdminRegister" component={RegisterPageAdmin}/>
        {/* 0 */}
        <Route path="/home" component={ MainHomepage } />
        {/* 1 */}
        <Route path="/addHotel" component={HotelDetails}/>

      </Switch>
      <Footer />
    </>
  );
};

export default App;
