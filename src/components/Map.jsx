// import React, { useContext, useEffect, useRef, useState } from "react";
// import mapboxgl from "mapbox-gl";
// import "mapbox-gl/dist/mapbox-gl.css";
// import styled from "styled-components";


// import { MapContext } from "../context/MapContext";
// import Popup from "./Popup";
// import PopupContent from "./PopupContent";

// const StyledContainer = styled.div`
//   width: 100%;
//   height: 97vh; /* Full viewport height */
//   margin:  0;
//   padding:0;
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
//       style: "mapbox://styles/mapbox/light-v11", // Map style
//       center: [-98.5795, 39.8283], // Approximate geographical center of the USA
//       zoom: 3.5 ,// Lower zoom level to show the entire country
//       projection: "mercator", // Set the map projection to flat
//     });
  
// // Create a custom dot element for the marker
// const dotElement = document.createElement('div');
// dotElement.style.width = '10px';
// dotElement.style.height = '10px';
// dotElement.style.backgroundColor = '#ff0000'; // Red color for the dot
// dotElement.style.borderRadius = '50%'; // Makes it circular
// dotElement.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.3)'; // Optional shadow for better visibility

// // Make the cursor a clickable hand by default
// dotElement.style.cursor = 'pointer'; // Automatically shows a hand-click icon when hovered

// // Add the custom dot marker to the map
// const marker = new mapboxgl.Marker({ element: dotElement })
//   .setLngLat([-78.137343, 41.137451]) // Set the marker coordinates
//   .setPopup(
//     new mapboxgl.Popup().setHTML(
//       `<div>
//          <h3>PJ Fresh </h3>
//          <p><strong>Address:</strong> 224 Daniel Payne Drive, Birmingham, AL, 35207</p>
//          <p><strong>Category:</strong> Burgers, American, Sandwiches</p>
//          <p><strong>Avg Rating:</strong> 4.7</p>
//        </div>`) // Attach a popup
//   )
//   .addTo(mapInstance); 
  
//     // // Optional: Open the popup by default
//     // marker.getPopup().addTo(mapInstance);
//   }, []);




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








// data is coming real time from AWS RDS

///////////////////////////////////////////////////
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


///////////////////////////////////////////Third trial, shwing in clustring 
// import React, { useContext, useEffect, useRef } from "react";
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

//     // Initialize the Map
//     mapInstance.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: "mapbox://styles/mapbox/light-v11",
//       center: [-86.8307025, 33.5623653],
//       zoom: 5,
//     });

//     if (restaurants.length > 0) {
//       const geojsonData = {
//         type: "FeatureCollection",
//         features: restaurants.map((restaurant) => ({
//           type: "Feature",
//           geometry: {
//             type: "Point",
//             coordinates: [restaurant.lng, restaurant.lat],
//           },
//           properties: {
//             name: restaurant.name,
//             address: restaurant.full_address,
//             category: restaurant.category,
//             rating: restaurant.score,
//           },
//         })),
//       };

//       mapInstance.current.on("load", () => {
//         mapInstance.current.addSource("restaurants", {
//           type: "geojson",
//           data: geojsonData,
//           cluster: true,
//           clusterMaxZoom: 14, // Maximum zoom level for clustering
//           clusterRadius: 50, // Radius of each cluster
//         });

//         mapInstance.current.addLayer({
//           id: "clusters",
//           type: "circle",
//           source: "restaurants",
//           filter: ["has", "point_count"],
//           paint: {
//             "circle-color": [
//               "step",
//               ["get", "point_count"],
//               "#51bbd6",
//               100,
//               "#f28cb1",
//               750,
//               "#f1f075",
//             ],
//             "circle-radius": ["step", ["get", "point_count"], 15, 100, 20, 750, 25],
//           },
//         });

//         mapInstance.current.addLayer({
//           id: "cluster-count",
//           type: "symbol",
//           source: "restaurants",
//           filter: ["has", "point_count"],
//           layout: {
//             "text-field": "{point_count_abbreviated}",
//             "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
//             "text-size": 12,
//           },
//         });

//         mapInstance.current.addLayer({
//           id: "unclustered-point",
//           type: "circle",
//           source: "restaurants",
//           filter: ["!", ["has", "point_count"]],
//           paint: {
//             "circle-color": "#11b4da",
//             "circle-radius": 6,
//             "circle-stroke-width": 1,
//             "circle-stroke-color": "#fff",
//           },
//         });

//         mapInstance.current.on("click", "unclustered-point", (e) => {
//           const coordinates = e.features[0].geometry.coordinates.slice();
//           const { name, address, category, rating } = e.features[0].properties;

//           new mapboxgl.Popup()
//             .setLngLat(coordinates)
//             .setHTML(
//               `<h3>${name}</h3><p><strong>Address:</strong> ${address}</p><p><strong>Category:</strong> ${category}</p><p><strong>Rating:</strong> ${rating}</p>`
//             )
//             .addTo(mapInstance.current);
//         });
//       });
//     }

//     return () => mapInstance.current.remove();
//   }, [restaurants]);

//   return <StyledContainer ref={mapContainer} />;
// };

// export default Map;




import React, { useContext, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styled from "styled-components";
import { DataContext } from "../context/DataProvider";

const StyledContainer = styled.div`
  width: 100%;
  height: 97vh;
  margin: 0;
  padding: 0;
`;

const Map = () => {
  const { restaurants } = useContext(DataContext); // Fetch restaurant data
  const mapContainer = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibXVoYW1tYWRlc3Nha2FrYWtoZWw5NjYiLCJhIjoiY2x2aHZyeXFtMThmODJpcGUybTU4am92bSJ9.BvyI0TitDCFSTYDcPTLdVA";

    // Initialize the Map
    mapInstance.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [-86.8307025, 33.5623653],
      zoom: 5,
    });

    if (restaurants.length > 0) {
      const geojsonData = {
        type: "FeatureCollection",
        features: restaurants.map((restaurant) => ({
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [restaurant.lng, restaurant.lat],
          },
          properties: {
            name: restaurant.name,
            address: restaurant.full_address,
            category: restaurant.category,
            rating: restaurant.score,
          },
        })),
      };

      mapInstance.current.on("load", () => {
        mapInstance.current.addSource("restaurants", {
          type: "geojson",
          data: geojsonData,
        });

        mapInstance.current.addLayer({
          id: "points",
          type: "circle",
          source: "restaurants",
          paint: {
            "circle-color": "red", // Color of the points
            "circle-radius": 5, // Radius of the points
            "circle-stroke-width": 1,
            "circle-stroke-color": "#fff",
          },
        });

        mapInstance.current.on("click", "points", (e) => {
          const coordinates = e.features[0].geometry.coordinates.slice();
          const { name, address, category, rating } = e.features[0].properties;

          new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(
              `<h3>${name}</h3><p><strong>Address:</strong> ${address}</p><p><strong>Category:</strong> ${category}</p><p><strong>Rating:</strong> ${rating}</p>`
            )
            .addTo(mapInstance.current);
        });

        // Change the cursor to a pointer when hovering over points
        mapInstance.current.on("mouseenter", "points", () => {
          mapInstance.current.getCanvas().style.cursor = "pointer";
        });

        // Change the cursor back to default when leaving points
        mapInstance.current.on("mouseleave", "points", () => {
          mapInstance.current.getCanvas().style.cursor = "";
        });
      });
    }

    return () => mapInstance.current.remove();
  }, [restaurants]);

  return <StyledContainer ref={mapContainer} />;
};

export default Map;


