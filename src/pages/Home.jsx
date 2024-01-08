import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; 



function Home() {
    const [showAlert, setShowAlert] = useState(true);
    const navigate = useNavigate();

 useEffect(() => {
    const token = Cookies.get('token');
    if (token && showAlert) {
      navigate('/main');
    } else {
      setShowAlert(false)
      navigate('/login')
      alert("로그인이 필요합니다.")}
      }, []);


  return (
    <div>Home</div>
  )
}

export default Home