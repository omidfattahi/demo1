import React,{useState} from "react";
import './toolbar.css';
import Logo from '../../../components/logo/logo'
import MenuItem from "./menuItems/menuItem";
import {Button} from './../../../components/ui/button/button';
import Modal from './../../../components/ui/modal/modal';
import SignIn from "../../../components/user/signin";
import SideDrawer from "../sidefrawer/sidedrawer";

const Toolbar = (props)=>{ 
    const [showModal,setShowModal] = useState(false);
    const [opensideDrawer,setOpenSidedrwer] = useState(false);
    const modalhandler = ()=>{
        setShowModal(true);
    }
    const hideModal = () =>{
        setShowModal(false);
    }

    const sideDrawerHandler =()=>{
        setOpenSidedrwer(true) ;
    }
    const closeDrawer=()=>{
        setOpenSidedrwer(false) ;

    }

    return(
        <header className="toolbar">
        <SideDrawer show={opensideDrawer} closeDrawer={closeDrawer}/>

            <div onClick={sideDrawerHandler}>
                hamberger Icons
            </div>
            {/* <div className="helper">

                 <Logo/>
            </div> */}
            <div className="showNav">
                <Logo heigth = "80%"/>
            </div>  
            <div className="showNav">
                
                <nav  >
                                <MenuItem/>

                </nav>
                </div>   



                {/* //show modal */}

                <div className="showNav">
                <Button
                btnType="danger" clicked={modalhandler}            
                > ورود و ثبت نام
                </Button>
           
                    </div>        
                            
             
               {/* hide modal  */}

            <Modal 
            show= {showModal}
            hideModal={hideModal}
            >
                <SignIn/>
            </Modal> 
      

        </header>
    )

}

export default Toolbar;