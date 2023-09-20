import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import MainGallery from "./components/MainGallery";
import { images } from "./images/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="gallery" element={<MainGallery images={ images} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
