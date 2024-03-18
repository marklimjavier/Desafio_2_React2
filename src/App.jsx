import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";

import Home from "../views/Home";
import Favoritos from "../views/Favoritos";
import PhotoProvider from "../context/PhotoContext";

const PHOTO_URL = "/photos.json";

const App = () => {
  return (
    <PhotoProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Favoritos" element={<Favoritos />} />
      </Routes>
    </PhotoProvider>
  );
};
export default App;
