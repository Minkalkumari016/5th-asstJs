import React, { useState,createContext } from "react";

export const StudentContext = createContext();
export const StudentProvider = (props) => {
  const [students, setStudents] = useState([
        { id:"1", name : "Minkal", age : 21, course : "MERN", batch : "September" },
        { id:"2", name : "Vikash", age : 23, course : "MERN", batch : "September" },
        { id:"3", name : "Anu", age : 24, course : "MERN", batch : "October" },
        { id:"4", name : "Aayushi", age : 24, course : "Christ", batch : "October" },
        { id:"5", name : "Pal", age : 22, course : "MERN", batch : "October" }
    ])

  return (
    <StudentContext.Provider value={[students,setStudents]}> {props.children} </StudentContext.Provider>    
  )
}