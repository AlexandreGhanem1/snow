'use client'
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

axios.get(`http://localhost:8000/maps/${params.mapId}`)
  .then(response => {
    setGeojsonData(response.data.geoJson);
  })
  .catch(error => console.error('Error fetching data:', error));



export default function SelectedMap({ params }: { params: { mapId: string }} ) {
  const [geojsonData, setGeojsonData] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:8000/maps/${params.mapId}`, { next: { revalidate: 1 } })
      .then((res) => res.json())
      .then((data) => {
        setGeojsonData(data.geoJson)
      })
  }, [])
  return (
    <MapContainer
      center={[46.8874, 9.6568]}
      zoom={13}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {geojsonData && (
        <GeoJSON data={geojsonData} />
      )}
    </MapContainer>
  )
}