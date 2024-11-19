import React, { useContext } from "react";
import { MapContext } from "../context/MapContext";

export default function PopupContent({ label }) {
  const { click } = useContext(MapContext);

  return (
    <div>
      <div>hello {label}</div>
      <button onClick={click}>click me</button>
    </div>
  );
}
