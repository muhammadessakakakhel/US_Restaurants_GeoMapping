import "./style.css";
import "mapbox-gl/dist/mapbox-gl.css";

import { MapProvider } from "./context/mapContext";
import Map from "./components/Map";


function App() {
  return (
    <MapProvider>
      <div className="App">
        <Map />
       
      </div>
    </MapProvider>
  );
}

export default App;
