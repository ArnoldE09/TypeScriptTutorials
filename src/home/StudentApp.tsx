import { useState } from "react";
import '../App.css'
import { Student, AppName,Level } from './StudentInterFace'
import { studentList } from "./students";
import { DisplayData } from "./DisplayData";
//import { GenericSort } from "./GenericSort";

function StudentApp({ Appname }: AppName) {
  const [student, setStudent] = useState<Student | null>(null)
  const [list, setList] = useState(studentList)

  
    const addStudent = () => {
        setStudent({
          name: 'Antony',
          surname: 'Ndungu',
          age: 20,
          level: "Undergraduate"
        })
      }

  const sortData = () => {

    // GenericSort(studentList, "age")
    setList([...studentList])
  }

  const resetEntry=() =>{
    setStudent({
        name: '',
        surname: '',
        age: 0,
        level: ""
      })
  }
  return (
    <div className="App">
      <h1>{Appname}</h1>
      <p><b>Name:</b>{student?.name}{','}{student?.surname}</p>
      <p><b>Age:</b> {student?.age}</p>
      <p><b>Level:</b> {student?.level}</p>
      <p>{student?.level}</p>
       {/* {student?.level === Level.Undergraduate &&
        <p><b>Age: {student?.age}</b></p>
       }   */}
      <button onClick={addStudent}> Add Student</button>
      <br />
      <button onClick={resetEntry}>Reset</button>
      <h3>List of Students</h3>
      <div>
        <DisplayData items={list} />
      </div>
      {/* <h3>List of Courses</h3> */}
      {/* <div>
        <DisplayData items={coursesList} />
      </div> */}
    </div>
  );
}

export default StudentApp;