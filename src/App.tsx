import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Router from "./routes/index.routes";

const queryClient = new QueryClient()

function App(): JSX.Element {
  return (
    <QueryClientProvider client={ queryClient}>
      <BrowserRouter>
      <Routes>
        <Route path="*" element={<Router />} />
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
    
  );
}

export default App;
