import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { Home } from "./Home";
import { Balance } from "./Balance";
import { Tx } from "./Tx";
import { Bloque } from "./Bloque";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="balance/:address" element={<Balance />} />
        <Route path="tx/:tx" element={<Tx />} />
        <Route path="bloque/:bloque" element={<Bloque />} />
        <Route
          path="noencontrada"
          element={<h2>el dato no se puede procesar</h2>}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
