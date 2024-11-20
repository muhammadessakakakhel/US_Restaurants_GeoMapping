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
      center: [-78.137343, 41.137451], // Map center coordinates
      zoom: 15 // Initial zoom level
    });
  
    // Add a marker at the map's center
    const marker = new mapboxgl.Marker()
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










///////////////////////////////////////////////////
// import React, { useContext, useEffect, useRef, useState } from "react";
// import mapboxgl from "mapbox-gl";
// import "mapbox-gl/dist/mapbox-gl.css";
// import styled from "styled-components";

// import { MapContext } from "../context/MapContext";
// import Popup from "./Popup";

// const StyledContainer = styled.div`
//   width: 100%;
//   height: 97vh; /* Full viewport height */
//   margin: 0;
//   padding: 0;
// `;

// const Map = () => {
//   const [content, setContent] = useState([]);
//   const [popupLngLat, setPopupLngLat] = useState(null);
//   const { setMap, map } = useContext(MapContext);
//   const mapContainer = useRef(null);

//   function onPopupClose() {
//     setContent([]);
//     setPopupLngLat(null);
//   }

//   useEffect(() => {
//     mapboxgl.accessToken =
//       "pk.eyJ1IjoibXVoYW1tYWRlc3Nha2FrYWtoZWw5NjYiLCJhIjoiY2x2aHZyeXFtMThmODJpcGUybTU4am92bSJ9.BvyI0TitDCFSTYDcPTLdVA";

//     const mapInstance = new mapboxgl.Map({
//       container: mapContainer.current, // Reference to the map container
//       style: "mapbox://styles/mapbox/streets-v12", // Base style
//       center: [-78.137343, 41.137451], // Map center coordinates
//       zoom: 5, // Initial zoom level
//     });

//     // Customize the map style
//     mapInstance.on("style.load", () => {
//       // Hide POIs and unnecessary terrain
//       mapInstance.setConfigProperty("basemap", "showPointOfInterestLabels", false);
//       mapInstance.setConfigProperty("basemap", "showPlaceLabels", true); // Keep relevant place labels
//       mapInstance.setConfigProperty("basemap", "show3dObjects", false); 
//       mapInstance.setConfigProperty("basemap", "showTransitLabels", false);// Hide 3D buildings/objects
//       mapInstance.setConfigProperty("basemap", "theme", "faded"); // Use a clean and neutral theme
//     });

//     // Dummy data for markers
//     const dummyData = [
//       {
//         name: "PJ Fresh",
//         category: "Burgers, American, Sandwiches",
//         address: "224 Daniel Payne Drive, Birmingham, AL, 35207",
//         rating: 4.7,
//         longitude: -78.137343,
//         latitude: 41.137451,
//       },
//       {
//         name: "Burgers and Fries",
//         category: "Burgers, Fast Food",
//         address: "123 Main Street, Dallas, TX, 75201",
//         rating: 4.2,
//         longitude: -97.7431,
//         latitude: 32.7767,
//       },
//       {
//         name: "Sushi Delight",
//         category: "Sushi, Japanese, Seafood",
//         address: "456 Ocean Blvd, Miami, FL, 33139",
//         rating: 4.9,
//         longitude: -80.191790,
//         latitude: 25.761680,
//       },
//     ];

//     // Add markers for each location in the dummy data
//     dummyData.forEach((location) => {
//       const marker = new mapboxgl.Marker()
//         .setLngLat([location.longitude, location.latitude])
//         .setPopup(
//           new mapboxgl.Popup().setHTML(
//             `<div>
//               <h3>${location.name}</h3>
//               <p><strong>Category:</strong> ${location.category}</p>
//               <p><strong>Address:</strong> ${location.address}</p>
//               <p><strong>Avg Rating:</strong> ${location.rating}</p>
//             </div>`
//           )
//         )
//         .addTo(mapInstance);
//     });

//     setMap(mapInstance);

//     return () => {
//       mapInstance.remove(); // Cleanup map instance on component unmount
//     };
//   }, [setMap]);

//   return (
//     <>
//       {popupLngLat && (
//         <Popup lngLat={popupLngLat} onClose={onPopupClose}>
//           {content}
//         </Popup>
//       )}
//       <StyledContainer ref={(el) => (mapContainer.current = el)} />
//     </>
//   );
// };

// export default Map;
