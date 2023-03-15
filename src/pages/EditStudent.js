import React from "react";
import { Button } from "../components/ui/button/button";
import './style/EditStudent.css'

const EditStudent = () => {

    const editStudent = ()=>{
        alert("successfull");
    }


    return(
           <div className="newStudent">
             <h1>Edit student page</h1>
            <label>نام و نام خانوادگی</label>
            <input type="text"  />

            <label>کلاس</label>
            <input type="number" />

            <label>شماره تلفن</label>
            <input type="number"  />

            <label>ایمیل</label>
            <input type="email" />

            <label>
                
            <Button 
            clicked={editStudent} 
            btnType="success"

            >ویرایش</Button>

            </label>




        </div>




    )
}

export default EditStudent;