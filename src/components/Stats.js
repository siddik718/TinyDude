import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

export default function Stats() {
    const [data,setdata] = useState([]);
    useEffect(() => {
        axios.get("/get_statistics/")
        .then((response)=>{
            console.log(response)
            setdata(response.data)
        })
    }, [])
    return (
        <>
        <h2>Statistics</h2>        
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Long URL</th>
              <th>Short URL</th>
              <th>Visited</th>
            </tr>
          </thead>
          <tbody>
            {data.map((dt) => (
              <tr key={dt.id}>
                <td>{dt.longurl}</td>
                <td>{process.env.REACT_APP_PROXY}/{dt.shortcode}</td>
                <td>{dt.visited}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        </>
      );
      
}