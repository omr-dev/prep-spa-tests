import { Routes, Route, Navigate } from "react-router-dom";
import { PageInfo } from "./sub-pages/PageInfo";
import { PageSpaTest1 } from "./sub-pages/spa1/PageSpaTest1";
import { PageSpaTest2 } from "./sub-pages/PageSpaTest2";
import { PageSpaTest3 } from "./sub-pages/PageSpaTest3";
import { PageSpaTest4 } from "./sub-pages/PageSpaTest4";
import { PageSpaTest5 } from "./sub-pages/PageSpaTest5";
import { PageSpaTest6 } from "./sub-pages/PageSpaTest6";

import "./App.scss";

import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <h1>SPA TESTS</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="info" replace />} />
        <Route path="info" element={<PageInfo />} />
        <Route path="spaTest1" element={<PageSpaTest1 />} />
        <Route path="spaTest2" element={<PageSpaTest2 />} />
        <Route path="spaTest3" element={<PageSpaTest3 />} />
        <Route path="spaTest4" element={<PageSpaTest4 />} />
        <Route path="spaTest5" element={<PageSpaTest5 />} />
        <Route path="spaTest6" element={<PageSpaTest6 />} />
      </Routes>
    </div>
  );
}

export default App;
