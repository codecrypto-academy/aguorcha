import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { Home } from "./Home";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="balance" element={<p>Balance</p>} />
        <Route path="tx" element={<p>Tx</p>} />
        <Route path="bloque" element={<p>Bloque</p>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
