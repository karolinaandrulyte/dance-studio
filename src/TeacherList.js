import React from 'react';
import { useEffect, useState } from 'react';

function TeacherList() {

const [teachers, setTeachers] = useState([]);

useEffect( () => {
  fetch( "http://localhost:8080/api/teachers" )
    .then( (response) => {
      console.log(response);
      return response.json();
    }
  )
    .then( (data) => {
      console.log(data);
      return setTeachers(data);

    } )
    ;

} , [] );

return (
    <div>
      <table>
      <caption>Teachers</caption>
          <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>E-mail address</th>
              <th>Description</th>
              <th>DanceStyle</th>
              <th>WorkTimes</th>
          </tr>
        {teachers.map( (teacher)=> (
                                    
                                     <tr>
                                        <td>{teacher.firstName}</td>
                                        <td>{teacher.lastName}</td>
                                        <td>{teacher.email}</td>     
                                        <td>{teacher.description}</td> 
                                        <td>{teacher.danceStyle}</td> 
                                        <td>{teacher.workTimes}</td>                            
                                     </tr>
                                  )
        )
        }
      </table>
    </div>
);
}

export default TeacherList;