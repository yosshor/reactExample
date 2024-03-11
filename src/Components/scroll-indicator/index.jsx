import React, { useEffect, useState } from "react";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [scrollPersentage, setScrollPersentage] = useState(0);

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
    const persentage = (scorlled / height) * 100;
    console.log(persentage);
    setScrollPersentage(persentage)
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
      <h1>Custom Scroll Indicator</h1>
      <div className="data-container">
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
