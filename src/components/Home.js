import React, { useEffect, useState } from 'react'
import '../index.css'
import '../App.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;

export default function Home() {
  
  // Declaring an object called data with a property called longurl
    const data = {longurl : ""};
    
  // Declaring state variables called inputurl and setinputurl using the useState hook to manage the state of the input field
    const [inputurl,setinputurl] = useState(data);

  // Declaring a navigate variable and assigning it the value returned from useNavigate hook
    const navigate = useNavigate()
  
  // Defining a function called handleData that updates the input field state with the value of the input field
    function handleData(e){
      setinputurl({...inputurl, [e.target.name]:e.target.value})
    }

    const [shorturl,setShorturl] = useState(null); // Declaring a state variable called shorturl and setting it to null using the useState hook
    const [msg,setMsg] = useState(""); // Declaring a state variable called msg and setting it to an empty string using the useState hook

  // Defining a function called handleFormSubmit that sends a POST request to the server with the input field value
    function handleFormSubmit(e) {
      // Prevent the default form submission behavior
      e.preventDefault();
      // Make a POST request to the URL shortener API using Axios
      axios.post(`${apiUrl}/shorten/`,inputurl)
      .then((response)=>{ // If the request is successful
        setShorturl(response.data);
        console.log(response)
        console.log(response.data)
      })
      // Handing Errors.
      .catch((error) => {
        console.log(error);
        setMsg("Please try again.");
      });
    };
  
    // Defining a side effect that sets the message displayed on the screen when the shorturl state variable changes
    useEffect(() => {
      if (shorturl) {
        setMsg(`Hey, your new url is ${shorturl.shorturl}`);
      }
    }, [shorturl]); // dependency on shorturl changing

    return (
        <div className="App">
          <h1 className="text-center">TinyDude URL Shortener</h1>
          <form id="shorten-form">
            <div className="form-group">
              <label htmlFor="url-input">Enter URL to Shorten:</label>
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
            <button id="short" type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Shorten URL</button>
            <button id="stat" type="submit" className="btn btn-primary" onClick={() => navigate('stats')}>Statistics</button>
          </form>
          <div id="shortened-url" className="text-center"> {msg} </div>
        </div>
    );
}
