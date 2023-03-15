import React,{useEffect} from 'react';

 import { Student } from './student/student';
 import './student/student.css';
 import PropTypes from 'prop-types';


export const Students =(props)=>{
    useEffect(()=>{
        console.log('log1')

    },[props.students]);

    let studentList = (

        props.studentLists.map((student,index)=> 
        <div> 
                    key={index} 

<Student 
                    //we should define key for map to avoid error
               

                    //initialize the props
                    id={student.id}
                    name={student.name}
                    classNUmber={student.classNUmber}
                    phone={student.phone}
                    email={student.email}
                    //initialize the props

                    //update information
                    nameChange={(event)=>props.nameChange(event,student.id)} 
                    classChange={(event)=>props.classChange(event,student.id)}
                    phoneChange={(event)=>props.phoneChange(event,student.id)}
                    emailChange={(event)=>props.emailChange(event,student.id)}
                    //update information

                    deleted = {props.deleted}


                />

         </div>
                            
                     )

    )


    if(props.toggle == true){
        return <div className="student-section">
            {  studentList  }

        </div>
    }
    

    return (

        studentList
       
       
    )


}


Students.prototypes = {
    studentLists : PropTypes.array.isRequired,
    nameChange : PropTypes.func.isRequired,
    deleted:PropTypes.func.isRequired,
    toggle : PropTypes.bool.isRequired,
    phoneChange : PropTypes.func.isRequired,
    classChange : PropTypes.func.isRequired,
    emailChange : PropTypes.func.isRequired,


}

 