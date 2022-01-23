import React from 'react';
import img from './img.jpg';

function Home() {
    return (
        <div>
           <h1>Welcome to Home Page!!</h1>
           <img src={img} alt="Img" /><br/>
           <p className='cntnt'>
               This page contains details of student. Here, you can view the details of students only.
            </p>
        </div>
    )
}

export default Home;