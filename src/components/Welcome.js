import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

const Welcome = () => {
 
 const [userName, getUserName] = useState('');

 useEffect(()=>{
    getUserName(localStorage.getItem('userName'))
  }, [])



  return (
    <div>
      <h1 className='display-1'>Welcome {userName}</h1>
      <Link className='btn btn-primary' to='more'>More About User</Link>
      <Outlet/>
    </div>
  )
}


export default Welcome;
