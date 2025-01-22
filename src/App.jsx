import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Vans from "./pages/Vans.jsx";
import VanDetail from "./pages/VanDetail.jsx";
import Layout from "./components/Layout.jsx";
import Dashboard from "./pages/Host/Dashboard.jsx";
import Income from "./pages/Host/Income.jsx";
import Reviews from "./pages/Host/Reviews.jsx";
import HostLayout from "./components/HostLayout.jsx";
import HostVans from "./pages/Host/HostVans.jsx";
import HostVanDetails from "./pages/Host/HostVanDetails.jsx";

import HostVanInfo from "./pages/Host/HostVanInfo.jsx";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="about" element={<About></About>}></Route>
          <Route path="vans" element={<Vans></Vans>}></Route>
          <Route path="vans/:id" element={<VanDetail></VanDetail>}></Route>
          <Route path="host" element={<HostLayout></HostLayout>}>
            <Route index element={<Dashboard></Dashboard>}></Route>
            <Route path="income" element={<Income></Income>}></Route>
            <Route path="reviews" element={<Reviews></Reviews>}></Route>
            <Route path="vans" element={<HostVans></HostVans>}></Route>
            <Route path="vans/:id" element={<HostVanDetails></HostVanDetails>}>
              <Route index element={<HostVanInfo></HostVanInfo>}></Route>
              <Route
                path="pricing"
                element={<HostVanPricing></HostVanPricing>}
              ></Route>
              <Route
                path="photos"
                element={<HostVanPhotos></HostVanPhotos>}
              ></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
      {/* <footer>#VANLIFE 2025</footer> */}
    </BrowserRouter>
  );
}
export default App;
