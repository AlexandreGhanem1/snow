'use client'
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Chart } from 'react-google-charts';

export default function SelectedMap({ params }: { params: { mapId: string }} ) {
  const [geojsonData, setGeojsonData] = useState(null);
  const [mapName, setMapName] = useState(''); 
  
  useEffect(() => {
    fetch(`http://localhost:8000/maps/${params.mapId}`, { next: { revalidate: 1 } })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.geoJson);
        setGeojsonData(data.geoJson);
        setMapName(data.name);
      })
  }, [])
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-blue-500">{mapName}</h1>
      <div className="w-full max-w-2xl h-96">
        <MapContainer
          center={[45.067569, 2.654940]}
          zoom={6}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {geojsonData && (
            <GeoJSON data={geojsonData} />
          )}
        </MapContainer>
      </div>
      <div className="w-full max-w-2xl mt-4">
        <Chart
          width={'100%'}
          height={'300px'}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={[
            ['City', '2010 Population', '2000 Population'],
            ['New York City, NY', 8175000, 8008000],
            ['Los Angeles, CA', 3792000, 3694000],
            ['Chicago, IL', 2695000, 2896000],
            ['Houston, TX', 2099000, 1953000],
            ['Philadelphia, PA', 1526000, 1517000],
          ]}
          options={{
            title: 'Population of Largest U.S. Cities',
            chartArea: { width: '50%' },
            hAxis: {
              title: 'Total Population',
              minValue: 0,
            },
            vAxis: {
              title: 'City',
            },
          }}
        />
      </div>
    </div>
  )
}