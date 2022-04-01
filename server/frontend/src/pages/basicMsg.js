// import { BrowserRouter, Route, Routes} from 'react-router-dom'
// import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
// import Button from 
function BasicMsg() {
    const [msg, setMsg] = useState('')
    useEffect(() => {
        // console.log("in useEffect")
        axios.get('/api/').then(response=>{
          if (response.data.success){
            console.log("HEREE")
            setMsg(response.data.msg)
            }
          else
          alert("Failed to get videos")
          })
    }, [])
    return (
      <div>
        {msg}
      </div>        
    )
}

export default BasicMsg;
