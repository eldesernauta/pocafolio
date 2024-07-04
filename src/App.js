import * as React from "react";
import { Routes, Route } from "react-router-dom";
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';
import Cursor from "./components/Cursor/cursor";

import Layout from "./pages/Layout"; // Optional, but useful
import Home from "./pages/Home";
import QuienSoy from "./pages/QuienSoy";
import Contacto from "./pages/Contacto";
import Trabajo from "./pages/Trabajo";
import Avianca from "./pages/Avianca";
import LaCima from "./pages/LaCima";
import Mastercard from "./pages/Mastercard";
import Extras from "./pages/Extras";

function App() {
  return (
    <>
      <CustomCursor
        targets={['.link-hover']}
        customClass='custom-cursor'
        dimensions={30}
        fill='#BDFA00'
        smoothness={{
          movement: 0.2,
          scale: 0.1,
          opacity: 0.2,
        }}
        targetOpacity={1}
      />
      <Cursor />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/trabajo" element={<Trabajo />} />
          <Route path="/quien-soy" element={<QuienSoy />} />
          <Route path="/conectemos" element={<Contacto />} />
          <Route path="/trabajo/avianca" element={<Avianca />} />
          <Route path="/trabajo/la-cima" element={<LaCima />} />
          <Route path="/trabajo/mastercard" element={<Mastercard />} />
          <Route path="/trabajo/extras" element={<Extras />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;