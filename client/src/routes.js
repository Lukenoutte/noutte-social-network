import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import Feed from "./pages/feed";
import Profile from "./pages/profile";

export default function Routes() {
    return (
        <BrowserRouter>
        <Route path="/" exact component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/feed" component={Feed}/>
        <Route path="/profile" component={Profile}/>

        </BrowserRouter>
    )
}

