// Import necessary modules
import axios from 'axios'; // axios is used to make HTTP requests
import React, { useEffect, useState } from 'react'; // react and related hooks are used to create components
import { Table } from 'react-bootstrap'; // react-bootstrap is a popular UI library for react

// Define the Stats component
export default function Stats() {
    // Initialize state variables using the useState hook
    const [data,setdata] = useState([]); // data is initialized as an empty array
    const [error,setError] = useState(null); // error is initialized as null

    // Use the useEffect hook to fetch data from an API endpoint when the component mounts
    useEffect(() => {
        axios.get("https://tinydude-production.up.railway.app/get_statistics/") // Make a GET request to the API endpoint
        .then((response)=>{ // If the request is successful
            console.log(response) // Log the response to the console
            setdata(response.data) // Update the data state variable with the response data
            setError(null); // Reset the error state variable to null
        })
        .catch((error) => { // If the request is unsuccessful
            console.error(error); // Log the error to the console
            setError(error); // Set the error state variable to the error object
        });
    }, []); // The empty dependency array ensures that the effect only runs once, when the component mounts

    // Render the component
    // If there is an error, display an error message
    if (error) {
        return <div>There was an error: {error.message}</div>;
    }
    // If there is no error, display the table with the data
    return (
        <>
        <h2 id="shortened-url" className="text-center">Statistics</h2> // The header for the table
        <Table striped bordered hover> // The table component from react-bootstrap with striped, bordered, and hover styles
          <thead>
            <tr>
              <th id="shortened-url" className="text-center">Long URL</th> // The table header for the long URL
              <th id="shortened-url" className="text-center">Short URL</th> // The table header for the short URL
              <th id="shortened-url" className="text-center">Visited</th> // The table header for the number of times the short URL has been visited
            </tr>
          </thead>
          <tbody>
            {data.map((dt) => ( // Loop through each element in the data array and render a row for each element
              <tr key={dt.id}> // Each row must have a unique key, in this case we are using the ID of each element as the key
                <td id="shortened-url" >{dt.longurl}</td> // The table cell for the long URL
                <td id="shortened-url" >https://tinydude-production.up.railway.app/{dt.shortcode}</td> // The table cell for the short URL
                <td id="shortened-url" >{dt.visited}</td> // The table cell for the number of times the short URL has been visited
              </tr>
            ))}
          </tbody>
        </Table>
        </>
      );
}
