import React from 'react';
import { useEffect, useState } from 'react';

function StudentList() {

  const [students, setStudents] = useState([]);

  useEffect( () => {
    fetch( "http://localhost:8080/api/students" )
      .then( (response) => {
        console.log(response);
        return response.json();
      }
  
    )
      .then( (data) => setStudents(data) );
  
  } , [] );

  return (
    <div>
      <table>
      <caption>Students</caption>
          <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>E-mail address</th>
          </tr>
        {students.map( (student)=> (
                                    
                                     <tr>
                                        <td>{student.firstName}</td>
                                        <td>{student.lastName}</td>
                                        <td>{student.email}</td>                                     
                                     </tr>
                                  )
        )
        }
      </table>
    </div>
  );
}

export default StudentList;