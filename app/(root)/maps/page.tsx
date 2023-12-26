"use client";
import Link from "next/link"
import { useState, useEffect } from 'react';

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
    <>
      <div>No has been map selected</div>
      <select onChange={(e) => window.location.href = '/maps/' + e.target.value}>
        <option value="">Select a map</option>
        {maps.map(map => <option key={map.id} value={map.id}>{map.name}</option>)}
      </select>
    </>
  )
}