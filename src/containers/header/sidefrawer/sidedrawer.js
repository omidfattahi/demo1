import React from "react";
import './sidedrawer.css';
import Logo from './../../../components/logo/logo';
import MenuItem from './../toolbar/menuItems/menuItem';
import { Button } from "../../../components/ui/button/button";
 import BackDrop from "../../../components/ui/backdrop/backdrop";






const SideDrawer =(props)=>{
    let classes = ['sidedrawer','close'];
    if(props.show){
        classes=['sidedrawer','open'];
    }
    return( 
        <React.Fragment>
            <BackDrop show={props.show} hideModal={props.closeDrawer}/>



     
    {/* <div className="sidedrawer"> */}
    <div className={classes.join(' ')}>
        {/* <div style={{height:'10%'}}>

           <Logo/> 
        </div> */}

        <Logo heigth="10%" />
        
        <nav>
            <MenuItem menuCol = {true} />

        </nav>
        <div className="boxBtn">
            <Button
            btnType="success" 
            clicked={()=>alert('hi')}            
            > ورود و ثبت نام</Button>
        </div>
        



    </div>
    </React.Fragment>

    )

}
export default SideDrawer;