import React,{useState,useEffect,useRef} from 'react';
import NewStudent from '../components/students/newStudent/newStudent';



const AddStudent = (props) =>{

    useEffect(()=>{
        console.log(props.value);
        // alert(props);
    },[])


    const[studentName,setStudentName] = useState('');
    const[studentClass,setStudentClass] = useState('');
    const[studentphone,setStudentphone] = useState('');
    const[studentemail,setStudentemail] = useState('');



    const studentNameHandler=(event)=>{
        setStudentName(event.target.value)
      }
    
      const studentClassHandler =(event)=>{
        setStudentClass(event.target.value)
      }
    
      const studentphoneHandler =(event)=>{
        setStudentphone(event.target.value)
    
      }
    
      const studentemailHandler = (event)=>{
        setStudentemail(event.target.value)
      }
    
      const addStudent=()=>{
        
        alert("add student");

      }


    return(
        <NewStudent
        studentClass = {studentClass}
        studentName = {studentName}
        studentphone = {studentphone}
        studentemail = {studentemail}
        studentNameHandler = {studentNameHandler}
        studentClassHandler = {studentClassHandler}
        studentphoneHandler={studentphoneHandler}
        studentemailHandler={studentemailHandler}
        addStudent ={addStudent}
  
        // //way to send prop to subComponent 

        // //1
        // history = {props.history}

        // //2
        // {...props}

        // // 3    use withRouter hoc v5

        
        />
    )
}

export default AddStudent;