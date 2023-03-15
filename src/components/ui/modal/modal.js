import React from "react";
import './modal.css';
import BackDrop from "../backdrop/backdrop";
const Modal =(props)=>{
    return(
    <React.Fragment>
        <BackDrop show={props.show} hideModal={props.hideModal}/>
    <div className="modal"
    style={{transform: props.show ? 'translateX(0)' : 'translateX(-100vw)' ,
            // opacity:props.show?'1':'0'
}}
    >
        {props.children}
    </div>
    </React.Fragment>
    )

}
export default React.memo(Modal);