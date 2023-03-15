import React from "react";
import logoImorit from "../../assets/images/logo.png";
import Logo from './../../components/logo/logo'
import { Button } from "../ui/button/button";
import './signin.css';

const SignIn=(props)=>{
    return(
    <React.Fragment>
        {/* <img  src={Logo} alt="imoritLogo"/> */}
        <Logo/>
        <input type="text" placeholder="userName"/>
        <input type="password" placeholder="Password"/>
        <Button>ورود</Button>

        
    </React.Fragment>)

    

}

export default SignIn;
