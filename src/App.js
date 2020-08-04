import React from "react";
import "./styles.css"; //mira asi es una manera de traerte el css
import Keys from "./components/keys";
import Accesory from "./components/Accesory";
export default function App() {
  return (
    <div id="drum-machine">
      <Keys />
      <Accesory />
      <div id="madeBy">Hecho por Ilemar</div>
    </div>
  );
}
