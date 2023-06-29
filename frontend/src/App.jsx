import axios from 'axios';
import React, { useState, useEffect } from 'react';


const App = () => {
  const [msg , setMsg] = useState('')
  const [response , setResponse] = useState([])
  const [loading , setLoading] = useState(false)
  const [error , setError] = useState(false)
  const handleChange = (e) => {
    setMsg(e.target.value)
  }
  const handleButtonClick = () => {
    
    axios.get(`http://localhost:8080/message/${msg}`).then((res) => {
      console.log(res.data)
      setResponse(res.data)
      setLoading(true)
    }
    ).catch((err) => {
      console.log(err)
      setError(true)
    }
    )

  }




  return (
    <div>
     
      <div className='container'>
        
      <h1>Chatbot</h1>
      <div className='chatbox'>
        {response.map((item) => {
          return (
            <div key={item.id} className='chatbox__messages'>
             <h3> {item.role}</h3>
             
             <p> {item.content}</p>
            </div>
          )
        })}
        </div>
        
        
        <input type="text" onChange={handleChange} />
        <button type="button" onClick={handleButtonClick}>Submit</button>
       
       


      
      </div>

    </div>
  );
  
  
}


export default App;