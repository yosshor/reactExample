import React, { useState, useEffect } from "react";
import "./styles.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [getAllImages, setGetAllImages] = useState(false);

  useEffect(() => {
    if (products.length >= 100  || loading) {
      setGetAllImages(true);
    }
  }, [products]);

  useEffect(() => {
    try {
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, [count]);

  function handleFetchMoreImages() {
    setCount((c) => c + 1);
  }

  async function fetchData() {
    const url = `https://dummyjson.com/products?limit=20&skip=
                    ${count === 0 ? 0 : count * 20}`;
    try {
      setLoading(true);
      const response = await fetch(url);
      const result = await response.json();

      if (result && result.products.length) {
        setProducts((preData) => [...preData, ...result.products]);
        setLoading(false);
      }
      console.log(products);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth", // Optional: Add smooth scrolling
    });
  };

  return (
    <div className="load-image-data">
      <div className="product-container">
        {loading ? (
          <div>
            <p>Loading Data! Please Wait..</p>
          </div>
        ) : products && products.length ? (
          products.map((image, index) => (
            <div className="product" key={index}>
              <img src={image.thumbnail} alt={image.title} />
              <p>
                {image.title} {image.id}
              </p>
            </div>
          ))
        ) : null}
      </div>
      <div class="down-arrow-container">
        <div class="down-arrow" onClick={scrollToBottom}></div>
      </div>
      <button
        disabled={getAllImages}
        onClick={handleFetchMoreImages}
        className="load-images"
      >
        Load More Images
      </button>
      <p>{getAllImages ? 'You Have Reached To 100 Products - Is The Max' : null }</p>
    </div>
  );
}
