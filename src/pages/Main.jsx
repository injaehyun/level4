import React from 'react';
import { FaHome } from 'react-icons/fa'; // react-icons 라이브러리 사용
import { IoIosArrowForward } from 'react-icons/io'; // react-icons 라이브러리 사용
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; 


function Main() {
    
    const navigate = useNavigate();
    
    const navigateToMain = () => {
        navigate('/main'); 
      };

      const logout =() =>{
        Cookies.remove('token'); 
        navigate(`/`)
      }

    return (
    <>
    <div>
      
      <nav style={{ 
        position: 'fixed', 
        top: 0, 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        borderBottom: '1px solid black' }}>
        <button onClick={navigateToMain}>
          <FaHome />
        </button>
        <button onClick={logout}>로그아웃</button>
      </nav>
      </div>
      <div style={{ 
        marginTop: '50px',
       }}>
         <h1 style={{paddingLeft:'10px'}}>무엇을 할까요?</h1>
        <hr />
        </div>
        
        <div style={{ 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '30px',
        borderRadius: '10px',
        border: '1px solid lightgrey',
        width: '95%',
        height: '100px',
        margin: '20px',
        paddingLeft: '10px',
        }}
        onClick={() => navigate('/work')}
        >할일 기록하기
          <IoIosArrowForward />
        </div>
        
        <div style={{ 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '30px',
        borderRadius: '10px',
        border: '1px solid lightgrey',
        width: '95%',
        height: '100px',
        margin: '20px',
        paddingLeft: '10px',
        }}
        onClick={() => navigate('/todolist')}
        >ToDo List
          <IoIosArrowForward />
        </div>
      
        </>
  );
}

export default Main;