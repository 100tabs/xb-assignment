import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Planet = (props) => {
  const { id } = useParams();
  const [planet, setPlanet] = useState({})
  useEffect(() => {
    axios.get(`http://swapi.dev/api/planets/${id}/`)
      .then(res => {
        setPlanet(res.data)
      })
    return () => {
      console.log("cleanup");
    }
  }, [id])
  return (
    <div className="border-1 card mx-auto mt-4 p-4 shadow-sm w-50 w-fixed-25 rounded" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title my-3 text-center">{planet.name}</h5>
        <h6 className="card-subtitle my-2 text-muted">Terrain: {planet.terrain}</h6>
        <h6 className="card-subtitle my-2 text-muted">Climate: {planet.climate}</h6>
        <h6 className="card-subtitle my-2 text-muted">Population: {planet.population}</h6>
      </div>
    </div>
  )
}

export default Planet
