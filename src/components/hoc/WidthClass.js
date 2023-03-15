import React from "react";
// export const WidthClass = (props)=>(
//   <div className={props.className}>{props.children}</div>
 

    
// )


export const WidthClass = (WrapComponent,className)=>{
    return props=>(
        <div className={className}>
            <WrapComponent {...props}/>
        </div>
    )
}