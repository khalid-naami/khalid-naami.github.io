import React, { useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const cities = [
  { name: 'Rabat', coords: [34.0209, -6.8416], photo: 'img/travel/rabat.png' },
  { name: 'Casablanca', coords: [33.5731, -7.5898] },
  { name: 'Marrakech', coords: [31.6295, -7.9811] },
  { name: 'Tangier', coords: [35.7595, -5.8340] },
  { name: 'Fes', coords: [34.0333, -5.0000] },
  { name: 'Laayoune', coords: [27.1500, -13.2033] },
  { name: 'Al Hoceima', coords: [35.2472, -3.9317] },
  { name: 'Meknes', coords: [33.8935, -5.5473] },
  { name: 'Madrid', coords: [40.4168, -3.7038] },
  { name: 'Barcelona', coords: [41.3851, 2.1734] },
  { name: 'Paris', coords: [48.8566, 2.3522] },
  { name: 'Rome', coords: [41.9028, 12.4964] },
  { name: 'Istanbul', coords: [41.0082, 28.9784] },
  { name: 'Ankara', coords: [39.9334, 32.8597] },
  { name: 'Dubai', coords: [25.2048, 55.2708] },
];

function MapContent({ selectedCity }) {
  const { MapContainer, TileLayer, Marker, Popup, useMap } = require('react-leaflet');
  const L = require('leaflet');
  const { useEffect } = React;

  // Fix for default marker icons
  const DefaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });
  L.Marker.prototype.options.icon = DefaultIcon;

  function MapController({ city }) {
    const map = useMap();
    useEffect(() => {
      if (city) {
        map.flyTo(city.coords, 8, { duration: 2 });
      }
    }, [city, map]);
    return null;
  }

  return (
    <MapContainer 
      center={[30, 15]} 
      zoom={2} 
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
      attributionControl={false}
    >
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
      />
      <MapController city={selectedCity} />
      {cities.map((city) => (
        <Marker key={city.name} position={city.coords}>
          <Popup>
            <div style={{ textAlign: 'center', color: '#333' }}>
              <strong style={{ display: 'block', marginBottom: city.photo ? '8px' : '6px' }}>{city.name}</strong>
              {city.photo && (
                <img 
                  src={city.photo} 
                  alt={city.name} 
                  style={{ width: '150px', borderRadius: '4px', border: '1px solid #ddd' }} 
                />
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default function KhalidTravelMap() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="map-card-container">
      {/* Header with Toggle Button */}
      <div className="map-header">
        <div 
          className="map-header-toggle" 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          title={isSidebarOpen ? "Hide sidebar" : "Show sidebar"}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isSidebarOpen ? (
              <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-1 16H6V5h12v14zM13 8l-4 4 4 4" />
            ) : (
              <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-1 16H6V5h12v14zM10 8l4 4-4 4" />
            )}
          </svg>
        </div>
        <div className="map-header-icon">
          <img src="/img/zoro-final.png" alt="Zoro Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div className="map-header-info">
          <span className="map-header-title">Travels</span>
          <span className="map-header-subtitle">Khalid Naami</span>
        </div>
      </div>

      <div className="map-body">
        {/* Toggleable Sidebar */}
        <div className={`map-sidebar ${!isSidebarOpen ? 'map-sidebar-hidden' : ''}`}>
          <div className="map-sidebar-header">
            <input type="checkbox" checked readOnly style={{ cursor: 'default' }} />
            <span>Visits</span>
          </div>
          <div className="map-sidebar-list">
            {cities.map((city) => (
              <div 
                key={city.name} 
                className="map-sidebar-item"
                onClick={() => setSelectedCity(city)}
              >
                <div className="map-marker-dot"></div>
                <span>{city.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Map area */}
        <div style={{ flex: 1, position: 'relative' }}>
          <BrowserOnly fallback={<div style={{ padding: '20px', textAlign: 'center' }}>Loading map data...</div>}>
            {() => <MapContent selectedCity={selectedCity} />}
          </BrowserOnly>
        </div>
      </div>
    </div>
  );
}

