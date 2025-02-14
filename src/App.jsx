import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import QuestionPage from "./pages/Question/QuestionPage";
import CountdownPage from "./pages/Countdown/CountdownPage";
import GalleryPage from "./pages/Gallery/GalleryPage";
import Rose1Page from "./pages/Rose1/Rose1Page";
import Rose2Page from "./pages/Rose2/Rose2Page";
import Rose3Page from "./pages/Rose3/Rose3Page";
import Question2Page from "./pages/Question2/Question2Page";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuestionPage />} />
        <Route path="/question" element={<Question2Page />} />
        <Route path="/rose1" element={<Rose1Page />} />
        <Route path="/rose2" element={<Rose2Page />} />
        <Route path="/rose3" element={<Rose3Page />} />
        <Route path="/countdown" element={<CountdownPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
