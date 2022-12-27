import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink , Link , useNavigate} from 'react-router-dom';

const Home = () => {
  
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleForm = (e)=>{
        e.preventDefault();
        if (
        name !== '' && password !== '' &&
        name !== undefined && password !== undefined &&
        name !== null && password !== null &&
        name.length > 0  && password.length > 0       
        ) 
        {
            localStorage.setItem("userName", name);
            navigate('/welcome');
        }else{
            alert('plz fill the form')
        }

    }


  return (
    <div>
       <Form className='home-form'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control 
        value={name} 
        onChange={(e)=> setName(e.target.value)}
        type="text" 
        placeholder="Enter Name" />
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        value={password} 
        onChange={(e)=> setPassword(e.target.value)}
        type="password" 
        placeholder="Password" />
      </Form.Group>
     
     
       <button type="submit" className="btn btn-primary" onClick={handleForm}>
            Submit
        </button>
        <br/>
        {/* <button onClick={()=> navigate('/welcome')}> Clike To Navigate</button> */}
    </Form>
    </div>
  )
}


export default Home;