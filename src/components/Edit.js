import { useState, useEffect, useContext  } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { StudentContext } from './StudentContext';
import { useNavigate ,useParams } from "react-router-dom";


function Edit() {
    const {studentId}=useParams()
    const [students,setStudents] = useContext(StudentContext)
    const Navigate =useNavigate()
    const [stu, setStu] = useState({ name: "",age: "",batch: "",course: "",});
   
 
  
    const handleInput = (e) => {
      setStu({...stu,[e.target.name]:e.target.value})
      console.log(e.target.value)

  }
    useEffect(() => {
      console.log(studentId);
      students.forEach((prevState) => {
        if (prevState.id === studentId) {
        console.log(prevState.id);

          setStu({
            name: prevState.name,
            age: prevState.age,
            batch: prevState.batch,
            course: prevState.course,
          });
        }
      });
    }, [studentId,students]);


    const HandleSubmit=()=>{
      if(!((stu.name)&&(stu.age)&&(stu.course)&&(stu.batch))){
        alert("All fields are mandetory")
        return
     }
      setStudents((prevState)=>
            prevState.map((student)=>
            (student.id===studentId)?
            {
              id:studentId,
              name: stu.name,
              age: stu.age,
              course: stu.course,
              batch: stu.batch,
              change: "Edit",
            }:student
            )  
  )

        Navigate('/student')
    }
    return (
        <>
      <div className="editBox">
          <div className="center">Edit Student Data</div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m:1 , width: "77ch" },
          }}
          noValidate
          autoComplete="off" >
          
              <div className="editContainer" >
                  <div > <TextField className="inputText" value={stu.name} id="name" name="name" onChange={handleInput} label="Name" color="secondary" variant="outlined"/></div>
                  <div > <TextField className="inputText" value={stu.age} id="age" name="age" onChange={handleInput} label="Age" color="secondary" variant="outlined" /></div>
                  <div > <TextField className="inputText" value={stu.course} id="course" name="course" onChange={handleInput} label="Course" color="secondary" variant="outlined" /></div>
                  <div > <TextField className="inputText" value={stu.batch} id="batch" name="batch" onChange={handleInput} label="Batch" color="secondary" variant="outlined" /></div>
              </div>    
           
        </Box>
        <button className="EditBtn" onClick={HandleSubmit}>Update</button>
      </div>
    </>
    )
}

export default Edit