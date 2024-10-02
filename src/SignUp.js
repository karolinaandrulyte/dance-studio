import { useEffect, useState } from 'react';
import StudentForm from './StudentForm';

const SignUp = () => {
    const [students, setStudents] = useState([]);

    useEffect( () => {
        fetch( "http://localhost:8080/api/students" ) 
          .then( (response) => { 
            console.log(response);
            return response.json();
          }
        )
          .then( (data) => {
           console.log(data);
            setStudents(data) });
           
      } , [] );

    const addStudent = (studentData) => { 
        console.log(studentData);
        
        fetch( "http://localhost:8080/api/addStudent", {
          method: "POST",
          headers: { "Content-Type" : "application/json" },
          body: JSON.stringify ( studentData )
        } ) 
        .then( (response) => response.json() )
        .then( (newStudent) => setStudents( [...students, newStudent ] )
        );
    };

    return <><h1>Sign up form for new students:</h1>
    
    <StudentForm addStudent={addStudent}/>
    
    </>
};
  
export default SignUp;