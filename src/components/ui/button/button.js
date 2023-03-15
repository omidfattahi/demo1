import React from "react";
import './button.css';
import PropTypes from 'prop-types';
export const Button =(props)=>{
    let classes = ["Button"];
    switch(props.btnType){
        case "danger":
            classes.push("Danger");
            break;
    case "success":
        classes.push("Success");
        break;
    default:
        break;

    }
    return(
        // <button className="Button" onClick={()=>alert('btn')}>{props.children}</button>
        <button className={classes.join(' ')} onClick={props.clicked}>{props.children} </button>
    )

}

// export default React.memo(Button);

Button.prototypes = {
    // children:PropTypes.arrayOf(PropTypes.element), 
    children:PropTypes.string.isRequired,
    clicked:PropTypes.func,
    btnType:PropTypes.string 
}
Button.defaultProps = {
    btnType:'success'
}