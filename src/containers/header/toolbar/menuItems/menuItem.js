import React from "react";
import './menuItem.css';
import MenuItemLi from "./menuItem/menuitemli";
const MenuItem = (props)=>{

    let myMenu = ['menuItems'];
     
    if(props.menuCol){
          myMenu.push("colFlex");
    }


    return(
        <ul className={myMenu.join(' ')}>
            
            <MenuItemLi active="true" link="/" >

            home
            </MenuItemLi>

                        
            <MenuItemLi link="/about" >
            about us
            </MenuItemLi>

            <MenuItemLi link={
                {
                    pathname:"/addstudent",
                    search:"?sort=name",
                    hash:"#id-omid",
                    state:{fromDashboard:true}
                }
            } >
            add Student
            </MenuItemLi>

            <MenuItemLi link="/aaaaaa" >
            item2
            </MenuItemLi>
 
        </ul>
    )

}
export default MenuItem;