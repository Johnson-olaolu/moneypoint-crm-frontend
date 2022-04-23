import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Router from "./routes/index.routes";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Router />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
