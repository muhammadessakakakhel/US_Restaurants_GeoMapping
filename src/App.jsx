// import "./style.css";
// import "mapbox-gl/dist/mapbox-gl.css";

// import { MapProvider } from "./context/MapContext";
// import Map from "./components/Map";


// function App() {
//   return (
//     <MapProvider>
//       <div className="App">
//         <Map />
       
//       </div>
//     </MapProvider>
//   );
// }

// export default App;





// Data is coming real time from AWS RDS

//////////////////////////////////////////////
import React from "react";
import DataProvider from "./context/DataProvider";
import Map from "./components/Map";

const App = () => {
  return (
    <DataProvider>
      <Map />
    </DataProvider>
  );
};

export default App;

