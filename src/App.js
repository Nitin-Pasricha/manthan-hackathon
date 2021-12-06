import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Auth from "./pages/Auth/Auth";
import NotFound from "./pages/NotFound/NotFound";
import Profile from "./pages/Profile/Profile";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route path="/signup" element={<Auth signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
