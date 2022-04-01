// import { BrowserRouter, Route, Routes} from 'react-router-dom'
// import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';

function Info() {
    const [alldata, setAlldata] = useState([])
    useEffect(() => {
        // console.log("in useEffect")
        axios.get('/api/info').then(response=>{
          if (response.data.success){
            setAlldata(response.data.alldata)
            console.log("alldata:", alldata)
          }
          else
            console.log('THERE\'S AN ERROR! WHICH IS', response.data.err)
          })
    }, [])
    // style= {{'border': '1px solid'}}  

    return (
      <Table bordered striped hover responsive = "true"  >
  <thead style = {{'border': '1px solid'}}>
    <tr>
      <th width = "170">S.No</th>
      <th width = "170">Planet Name</th>
      <th width = "170">Order From Sun</th>
      <th width = "170">Has Rings?</th>
      <th width = "170">Mean Surface Temp</th>
    </tr>
  </thead>
  <tbody >
  {alldata.map((planet, index)=>{
    return(
    <tr  key = {index} style= {{'border': '1px solid'}}>
      <td >{index + 1}</td>
      <td >{planet.name}</td>
      <td >{planet.orderFromSun}</td>
      <td >{planet.hasRings.toString()}</td>
      <td >{planet.surfaceTemperatureC.mean}</td>
    </tr>)
  })}
  </tbody>
</Table>
    )
}

export default Info;
