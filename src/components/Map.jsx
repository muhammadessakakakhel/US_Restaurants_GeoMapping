import React, { useContext, useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styled from "styled-components";


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
      style: "mapbox://styles/mapbox/light-v11", // Map style
      center: [-98.5795, 39.8283], // Approximate geographical center of the USA
      zoom: 3.5 ,// Lower zoom level to show the entire country
      projection: "mercator", // Set the map projection to flat
    });
  
// Create a custom dot element for the marker
const dotElement = document.createElement('div');
dotElement.style.width = '10px';
dotElement.style.height = '10px';
dotElement.style.backgroundColor = '#ff0000'; // Red color for the dot
dotElement.style.borderRadius = '50%'; // Makes it circular
dotElement.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.3)'; // Optional shadow for better visibility

// Make the cursor a clickable hand by default
dotElement.style.cursor = 'pointer'; // Automatically shows a hand-click icon when hovered

// Add the custom dot marker to the map
const marker = new mapboxgl.Marker({ element: dotElement })
  .setLngLat([-78.137343, 41.137451]) // Set the marker coordinates
  .setPopup(
    new mapboxgl.Popup().setHTML(
      `<div>
         <h3>PJ Fresh </h3>
         <p><strong>Address:</strong> 224 Daniel Payne Drive, Birmingham, AL, 35207</p>
         <p><strong>Category:</strong> Burgers, American, Sandwiches</p>
         <p><strong>Avg Rating:</strong> 4.7</p>
       </div>`) // Attach a popup
  )
  .addTo(mapInstance); 
  
    // // Optional: Open the popup by default
    // marker.getPopup().addTo(mapInstance);
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








// data is coming real time from AWS RDS

// ///////////////////////////////////////////////////
// import React, { useContext, useEffect, useRef, useState } from "react";
// import mapboxgl from "mapbox-gl";
// import "mapbox-gl/dist/mapbox-gl.css";
// import styled from "styled-components";
// import { DataContext } from "../context/DataProvider";

// const StyledContainer = styled.div`
//   width: 100%;
//   height: 97vh;
//   margin: 0;
//   padding: 0;
// `;

// const Map = () => {
//   const { restaurants } = useContext(DataContext); // Fetch restaurant data
//   const mapContainer = useRef(null);
//   const mapInstance = useRef(null);

//   useEffect(() => {
//     mapboxgl.accessToken =
//       "pk.eyJ1IjoibXVoYW1tYWRlc3Nha2FrYWtoZWw5NjYiLCJhIjoiY2x2aHZyeXFtMThmODJpcGUybTU4am92bSJ9.BvyI0TitDCFSTYDcPTLdVA";

//     mapInstance.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: "mapbox://styles/mapbox/light-v11",
//       center: [-86.8307025, 33.5623653],
//       zoom: 5,
//     });

//     return () => mapInstance.current.remove(); // Cleanup map instance on unmount
//   }, []);

//   useEffect(() => {
//     if (restaurants.length > 0 && mapInstance.current) {
//       restaurants.forEach((restaurant) => {
//         const marker = new mapboxgl.Marker()
//           .setLngLat([restaurant.lng, restaurant.lat])
//           .setPopup(
//             new mapboxgl.Popup().setHTML(`
//               <div>
//                 <h3>${restaurant.name}</h3>
//                 <p><strong>Address:</strong> ${restaurant.full_address}</p>
//                 <p><strong>Category:</strong> ${restaurant.category}</p>
//                 <p><strong>Avg Rating:</strong> ${restaurant.score}</p>
//               </div>
//             `)
//           )
//           .addTo(mapInstance.current);
//       });
//     }
//   }, [restaurants]); // Add markers whenever restaurant data changes

//   return <StyledContainer ref={mapContainer} />;
// };

// export default Map;
