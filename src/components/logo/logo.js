import React from "react";
import ImoritLogo from '../../assets/images/logo.png';
import './logo.css';
const Logo =(props)=>{
    return(
        <div className="logo" style={{height:props.heigth}}>
            <img src={ImoritLogo} alt = 'imorit logo '/>
        </div>
    )
}

export default React.memo(Logo);