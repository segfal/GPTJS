import axios from 'axios';
import React, { useState, useEffect } from 'react';


const App = () => {
  const [msg , setMsg] = useState('')
  const [response , setResponse] = useState([])
  const [loading , setLoading] = useState(false)
  const [error , setError] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await axios.get('http://localhost:8080/')
        setResponse(res.data)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    }
    fetchData()
  }
  , [])
  
}