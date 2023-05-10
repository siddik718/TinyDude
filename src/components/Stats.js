// Import necessary modules
import axios from 'axios'; // axios is used to make HTTP requests
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
const apiUrl = process.env.REACT_APP_API_URL;

export default function Stats() {
    const [data,setdata] = useState([]); // data is initialized as an empty array
    const [error,setError] = useState(null); // error is initialized as null

    // Use the useEffect hook to fetch data from an API endpoint when the component mounts
    useEffect(() => {
        axios.get(`${apiUrl}/get_statistics/`) // Make a GET request to the API endpoint
        .then((response)=>{ // If the request is successful
            console.log(response)
            setdata(response.data)
            setError(null); // Reset the error state variable to null
        })
        .catch((error) => { // If the request is unsuccessful
            console.error(error);
            setError(error); // Set the error state variable to the error object
        });
    }, []); // The empty dependency array ensures that the effect only runs once, when the component mounts

    // If there is an error, display an error message
    if (error) {
        return <div>There was an error: {error.message}</div>;
    }
    // If there is no error, display the table with the data
    return (
        <>
        <h2 id="shortened-url" className="text-center">Statistics</h2> 
        <Table striped bordered hover>
          <thead>
            <tr>
              <th id="shortened-url" className="text-center">Long URL</th>
              <th id="shortened-url" className="text-center">Short URL</th>
              <th id="shortened-url" className="text-center">Visited</th>
            </tr>
          </thead>
          <tbody>
            {data.map((dt) => (
              <tr key={dt.id}> 
                <td id="shortened-url" >{dt.longurl.length > 50 ? dt.longurl.substring(0, 50) : dt.longurl}</td>
                <td id="shortened-url" >{apiUrl}/{dt.shortcode}</td>
                <td id="shortened-url" >{dt.visited}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        </>
      );
}
