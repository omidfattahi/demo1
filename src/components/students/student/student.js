import React,{useEffect}  from 'react';
import { Students } from '../students';
import { Button } from '../../ui/button/button';

import './student.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Student =(props)=>{

    useEffect(()=>{
        console.log(props.id);

    },[]);


    return (
        // <div className='students'>

        //     <label>شماره دانش آموزی: {props.id}</label>
        //     <label>نام و نام خانوادگی</label>
        //     <input type="text" value={props.name} onChange={props.nameChange}/>

        //     <label>کلاس</label>
        //     <input type="text" value={props.classNUmber} onChange={props.classChange}/>

        //     <label>شماره تلفن</label>
        //     <input type="number" value={props.phone} onChange={props.phoneChange}/>

        //     <label>ایمیل</label>
        //     <input type="email" value={props.email}  onChange={props.emailChange}/>

        //     {/* <label style={{color:'red'}} onClick={props.deleted}> حذف</label> */}


        //     <label>

        //     <Button
        //     btnType = "danger"
        //     clicked = {props.deleted}

        //     >حذف</Button>
        //     </label>
           


        // </div>

        <div className='students'>

            <label>شماره دانش آموزی: {props.id}</label>
            <label>نام و نام خانوادگی{props.name}</label>
         

            <label>کلاس{props.classNUmber}</label>
            

            <label>شماره تلفن{props.phone}</label>
            

            <label>ایمیل{props.email}</label>

            <label>

            <Button
            btnType = "danger"
            clicked = {props.deleted}

            >حذف</Button>

            {/* <Link to={"/student/"+props.id}> */}
            <Link to={`/student/${props.id}`}>
            <Button
            btnType = "success"
            clicked={()=>{alert(props.id)}}
            >
            ویرایش
            </Button>
            </Link>

            </label>
           


        </div>
    )

}


Student.prototypes = {
    id : PropTypes.number.isRequired,
    name : PropTypes.string.isRequired,
    classNUmber:PropTypes.number.isRequired,
    phone : PropTypes.number.isRequired,
    email : PropTypes.string.isRequired,
    deleted : PropTypes.func.isRequired
 


}

 