import React, { useEffect, useState } from "react";
import "./styles.css";
import { useHref } from "react-router-dom";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

// +  /**
// +   * Fetches data from the specified URL and updates the component state with the fetched data.
// +   *
// +   * @param {string} getUrl - The URL to fetch data from.
// +   * @return {Promise<void>} A promise that resolves when the data has been fetched and the component state has been updated.
// +   */
  //   async function fetchData(getUrl){
  //    console.log(getUrl);
  //    try {
  //      setLoading(true);
  //      const request = await fetch(getUrl);
  //      const data = await request.json();
  //      console.log(data);
  //      setData(data.products);
  //      setLoading(false);
  //    } catch (e) {
  //      console.error(`Error ${e}`);
  //      setError(e);
  //      setLoading(false);
  //    }
  //  }

   const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error);
      setLoading(false);
    }
  };

  function removeEventListener() {
    window.removeEventListener("scroll", () => {});
  }

  function handleScrolling() {
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const percentage = (scrolled / height) * 100;
    console.log(percentage);
    setScrollPercentage(percentage);
  }

   useEffect(() => {
    console.log(url);
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrolling);

    return removeEventListener();
  }, []);

  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="iphone">
        <h3 className="iphone-title">
          <a href="https://www.google.com">
            <strong>get new Iphone</strong>
          </a>
        </h3>
      </div>
      <div className="data-container">
          <div className="product-container">
            {loading ? <h3>Please Wait, Try to load data.</h3> : null}
            {error ? (
              <h3>Some Error Occurred. Please check your connection</h3>
            ) : null}
            {data && data.length > 0
              ? data.map((image, index) => (
                  <div className="product" key={index}>
                    <img src={image.thumbnail} alt={image.title} />
                    <p>
                      {image.title} {image.id}
                    </p>
                  </div>
                ))
              : null}
          </div>
        </div>
    </div>
  );
}
