import React from "react";
import './menuitemli.css'
import { Link } from "react-router-dom";



// for style router nav link
import { NavLink } from "react-router-dom";


const MenuItemLi = (props)=>{
//     const classes = [];
//     if(props.active){
//         classes.push('active');
//     }

    return(
             <li className="MenuItemLi">
                {/* <a href={props.link} className={classes}> {props.children}</a> */}
                 {/* <Link to={props.link} className={classes}> {props.children}</Link> */}


                 {/* // for style router nav link */}
                 <NavLink to={props.link}> 

                 {props.children}
                 
                 </NavLink>


            </li>
     )

}
export default MenuItemLi;