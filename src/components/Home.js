import React, { useEffect, useState } from 'react'  // Importing necessary dependencies
import '../index.css'
import '../App.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Home() {  // Creating a functional component named Home
  
    const data = {longurl : ""};  // Defining an object named data with a key of longurl and value of empty string
    const [inputurl,setinputurl] = useState(data);  // Using the useState hook to create a state variable named inputurl with initial value of data
    const navigate = useNavigate()  // Creating a navigation hook to navigate to other pages
  
    function handleData(e){  // Defining a function named handleData with event e as an argument
      setinputurl({...inputurl, [e.target.name]:e.target.value})  // Updating the inputurl state by spreading the previous values and updating the value of the key named as the name of the target element with the value of the target element
    }
    const [shorturl,setShorturl] = useState(null);  // Creating a state variable named shorturl with initial value of null
    const [msg,setMsg] = useState("");  // Creating a state variable named msg with initial value of an empty string
  
    function handleFormSubmit(e) {  // Defining a function named handleFormSubmit with event e as an argument
      e.preventDefault();  // Preventing the default behavior of the event
      axios.post("https://tinydude-production.up.railway.app/shorten/",inputurl)  // Sending a post request to the given url with inputurl data as the payload
      .then((response)=>{  // If the request is successful
        setShorturl(response.data);  // Updating the shorturl state with the response data
        console.log(response)  // Logging the response to the console
        console.log(response.data)  // Logging the response data to the console
      })
      .catch((error) => {  // If there is an error in the request
        console.log(error);  // Logging the error to the console
          setMsg("Please try again.");  // Updating the msg state with an error message
      });
    };
    useEffect(() => {  // Using the useEffect hook to execute code after the component has been rendered
      if (shorturl) {  // If the shorturl state is not null
        setMsg(`Hey, your new url is https://tinydude-production.up.railway.app/${shorturl.shorturl}`);  // Updating the msg state with a success message and the shorturl
      }
    }, [shorturl]);  // Running the effect only when the shorturl state changes
    
    return (
        <div className="App">  {/* Creating a div with a class name of App */}
          <h1 className="text-center">TinyDude URL Shortener</h1>  {/* Creating a heading with a class name of text-center */}
          <form id="shorten-form">  {/* Creating a form with an id of shorten-form */}
            <div className="form-group">  {/* Creating a div with a class name of form-group */}
              <label htmlFor="url-input">Enter URL to shorten:</label>  {/* Creating a label with a for attribute of url-input */}
              <input  // Creating an input element
                type="text"
                className="form-control"
                id="url-input"
                name="longurl"
                placeholder="Enter Your Long URL"
                onChange={handleData}
                value={inputurl.longurl}
              />
            </div>
            //Button For Shorten The Long Url When Clicked handleFormSubmit will be triggered 
            <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Shorten URL</button>
           //This button is linked to the useNavigate hook from the react-router-dom library, which navigates the user to the "stats" page when clicked.
            <button type="submit" className="btn btn-primary" onClick={() => navigate('stats')}>Statistics</button>
          </form>
          //This message is updated based on whether a shortened URL has been generated or if there was an error during the process.
          <div id="shortened-url" className="text-center"> {msg} </div>
        </div>
    );
}
