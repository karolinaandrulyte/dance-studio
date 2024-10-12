import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    
  return ( 
    
    <div className='home-container'>
     <h1>About us</h1>
     <p>Step into the rhythm of life at our dance studio, where movement meets passion. 
        Whether you’re an experienced dancer or just starting out, our expert instructors are here to guide you through an exhilarating journey. 
        We offer classes in a variety of energetic and culturally rich dance styles, including:
     </p>
      <ul>
        <li><strong>Bachata</strong> – Learn the art of this sensual Dominican dance with <em>Alice Johnson</em>, our seasoned Bachata instructor.</li>
        <li><strong>Salsa</strong> – Master the lively and energetic beats of Salsa with the renowned <em>Bob Smith</em>, a Salsa dance expert.</li>
        <li><strong>Reggaeton</strong> – Get moving to the urban rhythms of Reggaeton under the dynamic guidance of <em>Clara Williams</em>, a specialist in this powerful Latin dance.</li>
        <li><strong>Son</strong> – Experience the rich cultural heritage of Son with <em>David Bowie</em>, a world-renowned instructor bringing this traditional Cuban style to life.</li>
      </ul>
     <p>With a focus on creating a fun, inclusive, and inspiring environment, we welcome dancers of all skill levels to join us. 
        Discover the joy of dance, meet like-minded individuals, and enhance your skills in a supportive and engaging community.
     </p>

     <p><Link to="/signup">Sign up here!</Link> </p>
      
  </div>
  )
  };
  
export default Home;