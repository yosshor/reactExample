import React, { useEffect, useState } from "react";
import "./styles.css";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    console.log(getUrl);
    try {
      setLoading(true);
      const request = await fetch(getUrl);
      const data = await request.json();
      console.log(data);
      setData(data.products);
      setLoading(false);
    } catch (e) {
      console.log(`Error ${e}`);
      setError(e);
      setLoading(false);
    }
  }

  function removeEventListener() {
    window.removeEventListener("scroll", () => {});
  }

  function handleScrolling() {
    const scorlled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const percentage = (scorlled / height) * 100;
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
        <h1 >Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="data-container">
        <div className="iphone"><h3 className="iphone-title" ><strong>get new Iphone</strong></h3></div>
        {loading ? <h3>Please Wait, Try to load data.</h3> : null}
        {error ? (
          <h3>Some Error Occurred. Please check your connection</h3>
        ) : null}
        {data && data.length > 0
          ? data.map((item) => <p key={item.id}>{item.title}</p>)
          : null}
      </div>
    </div>
  );
}
