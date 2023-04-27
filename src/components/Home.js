import React, { useEffect, useState } from 'react'
import '../index.css'
import '../App.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Home() {

    const data = {longurl : ""};
    const [inputurl,setinputurl] = useState(data);
    const navigate = useNavigate()

    function handleData(e){
      setinputurl({...inputurl, [e.target.name]:e.target.value})
    }
    const [shorturl,setShorturl] = useState(null);
    const [msg,setMsg] = useState("");
    function handleFormSubmit(e) {
      e.preventDefault();
      axios.post("{process.env.REACT_APP_PROXY}shorten/",inputurl)
      .then((response)=>{
        setShorturl(response.data);
        console.log(response)
        console.log(response.data)
      })
    };
    useEffect(() => {
      if (shorturl) {
        setMsg(`Hey, your new url is {process.env.REACT_APP_PROXY}/${shorturl.shorturl}`);
      }
    }, [shorturl]);
    
    return (
        <div className="App">
          <h1 className="text-center">URL Shortener</h1>
          <form id="shorten-form">
            <div className="form-group">
              <label htmlFor="url-input">Enter URL to shorten:</label>
              <input
                type="text"
                className="form-control"
                id="url-input"
                name="longurl"
                placeholder="Enter Your Long URL"
                onChange={handleData}
                value={inputurl.longurl}
              />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Shorten URL</button>
            <button type="submit" className="btn btn-primary" onClick={() => navigate('stats')}>Statistics</button>
          </form>
          <div id="shortened-url" className="text-center"> {msg} </div>
        </div>
    );
}
