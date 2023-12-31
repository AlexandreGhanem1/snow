"use client";
import Link from "next/link"
import { useState, useEffect } from 'react';
import "../globals.css";

export default function NoMapSelected() {
  const [maps, setMaps] = useState<{id: string, name: string}[]>([]);

  useEffect(() => {
    const fetchMaps = async () => {
      const response = await fetch("http://localhost:8000/maps",  { next: { revalidate: 1 } });
      const maps: {id: string, name: string}[] = await response.json(); 
      setMaps(maps);
    };

    fetchMaps();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl mb-4">No map has been selected</h2>
      <select className="w-64 h-10 px-3 text-base border rounded-lg shadow-md" onChange={(e) => window.location.href = '/maps/' + e.target.value}>
        <option value="">Select a map</option>
        {maps.map(map => <option key={map.id} value={map.id}>{map.name}</option>)}
      </select>
    </div>
  )
}