import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NoMatch from "./pages/NoMatch/NoMatch";
import Apartment from "./pages/Apartment/Apartment";

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="apartment/:id" element={<Apartment />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}
