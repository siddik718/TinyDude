import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

export default function Stats() {
    const [data,setdata] = useState([]);
    useEffect(() => {
        axios.get("https://tinydude-production.up.railway.app/get_statistics/")
        .then((response)=>{
            console.log(response)
            setdata(response.data)
        })
    }, [data])
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
                <td id="shortened-url" >{dt.longurl}</td>
                <td id="shortened-url" >https://tinydude-production.up.railway.app/{dt.shortcode}</td>
                <td id="shortened-url" >{dt.visited}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        </>
      );
      
}
