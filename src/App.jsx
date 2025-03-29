import { Route, Routes } from "react-router-dom";
import ShaderLayouts from "./components/ShaderLayouts/ShaderLayouts.jsx";
import { lazy } from "react";
const Home = lazy(() => import("./components/pages/Home"));
const Feedback = lazy(() => import("./components/pages/Feedback"));
const Contacts = lazy(() => import("./components/pages/Contacts"));
const Gallery = lazy(() => import("./components/pages/Gallery"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ShaderLayouts />}>
        <Route index element={<Home />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="gallery" element={<Gallery />} />
      </Route>
    </Routes>
  );
};

export default App;
