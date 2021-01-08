import React, { Component } from "react";
import "../assets/css/style.css";

class Header extends Component{
    render(){
        return(
        <div className="header">
            <div className="left">
                Gillion-Foodie
            </div>
            <div className="right">
                <div className="nav">Home</div>
                <div className="nav" >Features</div>
                <div className="nav" >Menu</div>
                <div className="nav" >Shop</div>
                <div className="nav" >Account</div>
            </div>
        </div>
        );
    }

}

export default Header;