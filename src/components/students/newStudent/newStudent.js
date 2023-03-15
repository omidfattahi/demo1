import React,{useEffect} from "react";
// import './newStudent.css'
import Classes from './newStudent.module.css'
import { Button } from "../../ui/button/button";
import PropTypes from 'prop-types';
import { WidthClass } from "../../hoc/WidthClass";
// import { Wrapper } from "../../hoc/wrapper";
import {withRouter} from 'react-router-dom';

  const NewStudent=(props)=>{

    useEffect(()=>{
        console.log(`new student: ${props}`);
    },[])
 

        //in order to avoid using props keyword we use below code
    const {studentName , studentClass,studentphone,studentemail} = props;
    const {studentNameHandler} = props;

   
    return(
        // <div className="newStudent">
        //     <h1>اضافه کردن دانش آموز </h1>
        //     <label>نام و نام خانوادگی</label>
        //     <input type="text"  value={studentName} onChange={ studentNameHandler}/>

        //     <label>کلاس</label>
        //     <input type="number" value={studentClass} onChange={props.studentClassHandler}/>

        //     <label>شماره تلفن</label>
        //     <input type="number"  value={studentphone} onChange={props.studentphoneHandler}/>

        //     <label>ایمیل</label>
        //     <input type="email" value={studentemail}  onChange={props.studentemailHandler}/>

        //     <label>
                
        //     <Button 
        //     clicked={props.addStudent} 
        //     btnType="danger"

        //     >اضافه کردن</Button>

        //     </label>




        // </div>



        //hoc

    //     <WidthClass className="newStudent">
    //     <h1>اضافه کردن دانش آموز </h1>
    //     <label>نام و نام خانوادگی</label>
    //     <input type="text"  value={studentName} onChange={props.studentNameHandler}/>

    //     <label>کلاس</label>
    //     <input type="number" value={studentClass} onChange={props.studentClassHandler}/>

    //     <label>شماره تلفن</label>
    //     <input type="number"  value={studentphone} onChange={props.studentphoneHandler}/>

    //     <label>ایمیل</label>
    //     <input type="email" value={studentemail}  onChange={props.studentemailHandler}/>

    //     <label>
            
    //     <Button 
    //     clicked={props.addStudent} 
    //     btnType="danger"

    //     >اضافه کردن</Button>

    //     </label>




    // </WidthClass>


    // hoc1
    // <Wrapper>
    //     <h1>اضافه کردن دانش آموز </h1>
    //     <label>نام و نام خانوادگی</label>
    //     <input type="text"  value={studentName} onChange={props.studentNameHandler}/>

    //      <label>کلاس</label>
    //     <input type="number" value={studentClass} onChange={props.studentClassHandler}/>

    //   <label>شماره تلفن</label>
    //     <input type="number"  value={studentphone} onChange={props.studentphoneHandler}/>

    //     <label>ایمیل</label>
    //      <input type="email" value={studentemail}  onChange={props.studentemailHandler}/>

    //     <label>
            
    //     <Button 
    //     clicked={props.addStudent} 
    //     btnType="danger"

    //     >اضافه کردن</Button>

    //     </label>

    // </Wrapper>

    //react.fragment
//     <React.Fragment>
//     <h1>اضافه کردن دانش آموز </h1>
//     <label>نام و نام خانوادگی</label>
//     <input type="text"  value={studentName} onChange={props.studentNameHandler}/>

//      <label>کلاس</label>
//     <input type="number" value={studentClass} onChange={props.studentClassHandler}/>

//   <label>شماره تلفن</label>
//     <input type="number"  value={studentphone} onChange={props.studentphoneHandler}/>

//     <label>ایمیل</label>
//      <input type="email" value={studentemail}  onChange={props.studentemailHandler}/>

//     <label>
        
//     <Button 
//     clicked={props.addStudent} 
//     btnType="danger"

//     >اضافه کردن</Button>

//     </label>

// </React.Fragment>



<>
<h1>اضافه کردن دانش آموز </h1>
<label>نام و نام خانوادگی</label>
<input type="text"  value={studentName} onChange={props.studentNameHandler}/>

 <label>کلاس</label>
<input type="number" value={studentClass} onChange={props.studentClassHandler}/>

<label>شماره تلفن</label>
<input type="number"  value={studentphone} onChange={props.studentphoneHandler}/>

<label>ایمیل</label>
 <input type="email" value={studentemail}  onChange={props.studentemailHandler}/>

<label>
    
<Button 
clicked={props.addStudent} 
btnType="danger"

>اضافه کردن</Button>

</label>

</>

    )

}
// react memo use for all js
// export default React.memo(WidthClass(NewStudent,Classes.newStudent));
// export default React.memo(NewStudent);
export default WidthClass(NewStudent,Classes.newStudent) ;

NewStudent.prototypes = {
    studentName : PropTypes.string.isRequired,
    studentClass: PropTypes.number.isRequired,
    studentphone : PropTypes.number.isRequired,
    studentemail : PropTypes.string.isRequired,
    studentNameHandler : PropTypes.func.isRequired,
    studentClassHandler : PropTypes.func.isRequired,
    studentphoneHandler : PropTypes.func.isRequired,
    studentemailHandler : PropTypes.func.isRequired,
    addStudent : PropTypes.func.isRequired
 


}


 