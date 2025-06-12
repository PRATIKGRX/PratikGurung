import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MouseFollower from "./components/MouseFollow";

// Lazy load pages for code-splitting
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Project = lazy(() => import("./pages/Project"));
const Contact = lazy(() => import("./pages/Contact"));

const App = () => {
  return (
    <>
      <MouseFollower />
      <Header />
      <main>
        <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};
export default App;