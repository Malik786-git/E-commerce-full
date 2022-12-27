import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
  
    const {Component} = props;
    const navigate = useNavigate();

    useEffect(()=>{
        const login = localStorage.getItem('userName');
        if (!login) {
            navigate('/login');
        }
    })
  
    return (
    <>
      <Component/>
    </>
  )
}

export default Protected
