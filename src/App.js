import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";

// import Home from "./Components/Home";
import Root from "./Components/Root";
// import Tracks from "./Components/Tracks";
// import Playlist from "./Components/Playlist";
// import Artists from "./Components/Artists";
import { lazy, Suspense } from "react";
import Loading from "./Components/Loading";
const Broadcast = lazy(() => import("./Components/broadcast"));
const Tracks = lazy(() => import("./Components/Tracks"));
const Playlist = lazy(() => import("./Components/Playlist"));
const Artists = lazy(() => import("./Components/Artists"));
const Trindy = lazy(() => import("./Components/Trendy"));

export default function App() {
  return (
    <Routes>
      <Route element={<Root />}>
        <Route element={<SuspenseLayout />}>
          <Route path="/" element={<Trindy />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/broadcast" element={<Broadcast />} />
        </Route>
      </Route>
    </Routes>
  );
}
const SuspenseLayout = () => (
  <Suspense fallback={<Loading />}>
    <Outlet />
  </Suspense>
);
