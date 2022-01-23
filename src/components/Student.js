import React from "react";
import StudentTable from "./StudentTable";
import { Link } from "react-router-dom";

function Student() {

  return (
    <div>
        <div className="headStudent">
            <div className="headingStudent">Students-Details </div>
            <div><Link to="/addStudent"> <button className="btnStudent">Add New Student</button></Link></div>
        </div>
        <div className="tableContainer">
            <div className="table"><StudentTable /> </div>
        </div>
    </div>
  );
}
export default Student;