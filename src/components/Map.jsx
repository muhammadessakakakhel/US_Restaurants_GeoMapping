import React, { useContext, useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styled from "styled-components";

import data from "../data";

import { MapContext } from "../context/MapContext";
import Popup from "./Popup";
import PopupContent from "./PopupContent";

const StyledContainer = styled.div`
  width: 100%;
  height: 97vh; /* Full viewport height */
  margin:  0;
  padding:0;
`;

const Map = () => {
  const [content, setContent] = useState([]);
  const [popupLngLat, setPopupLngLat] = useState(null);
  const { setMap, map } = useContext(MapContext);
  const mapContainer = useRef(null);

  function onPopupClose() {
    setContent([]);
    setPopupLngLat(null);
  }

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibXVoYW1tYWRlc3Nha2FrYWtoZWw5NjYiLCJhIjoiY2x2aHZyeXFtMThmODJpcGUybTU4am92bSJ9.BvyI0TitDCFSTYDcPTLdVA";
  
    const mapInstance = new mapboxgl.Map({
      container: mapContainer.current, // Reference to the map container
      style: "mapbox://styles/mapbox/streets-v11", // Map style
      center: [-78.137343, 41.137451], // Map center coordinates
      zoom: 5 // Initial zoom level
    });
  
    // Add a marker at the map's center
    const marker = new mapboxgl.Marker()
      .setLngLat([-78.137343, 41.137451]) // Set the marker coordinates
      .setPopup(
        new mapboxgl.Popup().setHTML(
          `<div>
                 <h3>PJ Fresh (224 Daniel Payne Drive)</h3>
                 <p><strong>Category:</strong> Burgers, American, Sandwiches</p>
                
                
                 <p><strong>Avg Rating:</strong> 4.7</p>
               </div>`) // Attach a popup
      )
      .addTo(mapInstance); // Add the marker to the map
  
    // Optional: Open the popup by default
    marker.getPopup().addTo(mapInstance);
  }, []);

  return (
    <>
      {popupLngLat && (
        <Popup lngLat={popupLngLat} onClose={onPopupClose}>
          {content}
        </Popup>
      )}
      <StyledContainer ref={(el) => (mapContainer.current = el)} />
    </>
  );
};

export default Map;
