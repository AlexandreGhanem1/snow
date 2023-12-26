import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ center, zoom }) => {
  return (
    <MapContainer center={center} zoom={zoom} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Additional map features here */}
    </MapContainer>
  );
};

export default MapComponent;