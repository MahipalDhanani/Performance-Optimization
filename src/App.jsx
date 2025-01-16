import {lazy, React, Suspense } from "react";
import "./App.css";
// import About from "./Components/About";
// import Home from "./Components/Home";

const Home = lazy(() => import("./Components/Home.jsx"));
const About = lazy(() => import("./Components/About.jsx"));
function App() {
  return (
    <>
      <div className="p-4 flex justify-center items-center  flex-col">
        <h1>React.lazy and Suspense</h1>
        <Suspense fallback={<h1 className="text-red-500">Home component is Loading......</h1>}>
          <Home />
        </Suspense>
        <Suspense fallback={<h1 className="text-red-500">About component is Loading......</h1>}>
          <About />
        </Suspense>
      </div>
    </>
  );
}

export default App;
