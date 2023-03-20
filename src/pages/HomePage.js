import React,{useState,useEffect,useRef} from 'react';
import { Students } from '../components/students/students'
import { Button } from '../components/ui/button/button';






const HomePage = (props) =>{

    const inputEl = useRef(null);

    const[studentsState,setStident]=useState([
      {id:0,name:'mahdi',classNUmber:204,phone:1234,email:'reactImorit@gmail.com'},
      {id:1,name:'alireza',classNUmber:202,phone:4567,email:'reactImorit@gmail.com'},
      {id:2,name:'reza',classNUmber:207,phone:876,email:'reactImorit@gmail.com'},
      {id:3,name:'omid',classNUmber:205,phone:5555,email:'reactImorit@gmail.com'},
    ]);
    
    const [toggle,setToggle] = useState(false);
    const [searchBarValue,setSearchBarValue] = useState('');
    const [arrayHolder,setArrauHolder] = useState([]);
    useEffect(()=>{
      setArrauHolder(studentsState);
      // inputEl.current.focus();
    },[]);
    
    
    const searchFilterFunction=(event)=>{
      const itemDates =  arrayHolder.filter((item)=>{
          const itemDate = item.name.toUpperCase();
           const textinputDate =  event.target.value.toUpperCase();
           return itemDate.indexOf(textinputDate)> -1
        })
       setStident(itemDates);
      //  setSearchBarValue(event.target.value)
    
    
    
     }
     const nameChangeHandler=(event,id)=>{
        const studentIndex = studentsState.findIndex(student =>{
          return student.id === id;
        })
        // console.log(studentIndex );
        const student = {...studentsState[studentIndex]};
        // console.log(student);
        student.name = event.target.value;
        console.log(student );
        //copy from the student array
        const students = [...studentsState];
        // console.log(students);
        students[studentIndex] = student;
        setStident(students);
        // console.log(students);
    
      }
    
    
    
      const classChangeHandler=(event,id)=>{
        const studentIndex = studentsState.findIndex(student =>{
          return student.id ===id;
        })
        console.log(studentIndex );
        const student = {...studentsState[studentIndex]};
        student.classNUmber = event.target.value;
        //copy from the student array
        const students = [...studentsState];
        students[studentIndex] = student;
        setStident(students);
        console.log(students);
    
      }
    
    
      const phoneChangeHandler=(event,id)=>{
        const studentIndex = studentsState.findIndex(student =>{
          return student.id === id;
        })
        console.log(studentIndex );
        const student = {...studentsState[studentIndex]};
        student.phone = event.target.value;
        //copy from the student array
        const students = [...studentsState];
        students[studentIndex] = student;
        setStident(students);
        console.log(students);
    
      }
    
    
      const emailChangeHandler=(event,id)=>{
        const studentIndex = studentsState.findIndex(student =>{
          return student.id ===id;
        })
        console.log(studentIndex );
        const student = {...studentsState[studentIndex]};
        student.email = event.target.value;
        //copy from the student array
        const students = [...studentsState];
        students[studentIndex] = student;
        setStident(students);
        console.log(students);
    
      }
    
    
    
      const deletStudent=(index)=>{
        const students = [...studentsState];
        students.splice(index,1);
        setStident(students);
    
      }
    
      const toggelHandler=()=>{
        setToggle(!toggle) 
        console.log(toggle);
      }
  


    return(
         <>

      <input type="text"  value={searchBarValue} onChange={searchFilterFunction}  ref = {inputEl} style={{marginTop:"80px"}} />
      
      <Button
       btnType = "success"
       clicked = {toggelHandler}
    
      
      
      >تغییر وضعیت نمایش
      </Button>

      <Students
      studentLists ={studentsState}
      nameChange={nameChangeHandler}
      classChange={classChangeHandler}
      phoneChange={phoneChangeHandler}
      emailChange={emailChangeHandler}
      deleted = {deletStudent}
      toggle = {toggle}
      
      
      
      />



         </>



    )
}

export default HomePage;