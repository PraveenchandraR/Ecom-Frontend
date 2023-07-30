import React, { useEffect } from "react";
import Policy from "./Policy";
import "./../Styles/Home.css";
import { useState } from "react";
import iphone from "./../../Images/iphone_6_plus.png";
import Spiner from "../Compo/Spiner";
const LazyLoadMore = React.lazy(() => import("./LoadMorePage"));
// import LoadMorePage from './LoadMorePage';

const Home = () => {
  const images = [
    "https://drive.google.com/uc?export=view&id=1O866pXt7WTYBvZh8wGFMUXUG0HRWg-OM",
    "https://drive.google.com/uc?export=view&id=1d4Z-ao7AK_XCuO2oi97k43yW0aaTydp0",
    "https://drive.google.com/uc?export=view&id=1dkXGg8wd5nreQWHeymTO5P3zGMgZV_z_",
  ];

  const [CurrentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(
        images[Math.floor(Math.random() * images.length) % images.length]
      );
    }, 2500);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="carousel">
        <img className="carouselImg" src={`${CurrentImage}`} alt="go away" />
      </div>
      <React.Suspense fallback={<Spiner />}>
        <LazyLoadMore />
      </React.Suspense>
      <div className="carouse2">
        <img src={`${iphone}`} className="" alt="iphone" />
        <h3>iPhone 6 Plus</h3>
        <p>Performance and design. Taken right to the edge.</p>
      </div>

      <Policy />
    </>
  );
};

export default Home;