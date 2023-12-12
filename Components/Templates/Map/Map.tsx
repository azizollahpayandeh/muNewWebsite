// Map.tsx
"use client"
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  useEffect(() => {
    // You can initialize map-related logic here
  }, []);

  return (
    <MapContainer
    className='rounded-xl opacity-80'
      center={[51.505, -0.09]} // Initial map center
      zoom={13} // Initial zoom level
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[51.505, -0.09]} />
    </MapContainer>
  );
};

export default Map;
