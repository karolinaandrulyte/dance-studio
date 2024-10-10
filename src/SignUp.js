import { useEffect, useState } from 'react';
import SignUpForm from './SignUpForm';

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

    return <><h2>Registration form for teachers and students:</h2>
    
    <SignUpForm addStudent={addStudent}/>
    
    </>
};
  
export default SignUp;