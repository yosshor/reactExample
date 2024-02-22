import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./styles.css";

export default function ImageSlider(url) {
  const [error, setError] = useState(null);
  const [loading, setLoding] = useState(false);
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [limit, setLimit] = useState(url.limit);
  const [page, setPage] = useState(url.page);

  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url.url]);

  async function fetchImages(urlLink) {
    try {
      setLoding(true);
      const fullUrl = `${urlLink.url}?page=${page}&limit=${limit}`;
      console.log(fullUrl);
      const response = await fetch(fullUrl);
      const data = await response.json();
      console.log(data);

      if (data) {
        setImages(data);
        setLoding(false);
      }
    } catch (e) {
      setError(e.message);
      setLoding(false);
      console.log(error);
    }
  }

  if (loading) {
    <div>The Data Is Loading! Please Wait!</div>;
  }
  if (error) {
    <div>Erorr occurd! {error}</div>;
  }
  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }
  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  const handlePageNum = (event) => {
    setPage(event.target.value);
  };
  const handleLimit = (event) => {
    setLimit(event.target.value);
  };
  function handleChangeLimition() {
    if (page > 0 && limit > 0) fetchImages(url);
  }

  return (
      <div className="form-container">
        <label for="pageInput">Insert your page:</label>
        <input
          type="number"
          id="pageInput"
          placeholder="Insert your page number"
          onChange={handlePageNum}
        />

        <label for="limitInput">Insert your images limit:</label>
        <input
          type="number"
          id="limitInput"
          placeholder="Insert your images limitation"
          onChange={handleLimit}
        />
        <input type="submit" value="Submit" onClick={handleChangeLimition} />
      <div>
        <div className="container">
          <BsArrowLeftCircleFill
            onClick={handlePrevious}
            className="arrow arrow-left"
          />
          {images && images.length
            ? images.map((image, index) => (
                <img
                  key={image.id}
                  alt={image.author}
                  src={image.download_url}
                  className={
                    currentSlide === index
                      ? "current-image"
                      : "current-image hide-current-image"
                  }
                />
              ))
            : null}
          <BsArrowRightCircleFill
            onClick={handleNext}
            className="arrow arrow-right"
          />
          <span className="circle-indicators">
            {images && images.length
              ? images.map((image, index) => (
                  <button
                    key={index}
                    className={
                      currentSlide === index
                        ? "current-indicator"
                        : "current-indicator inactive-indicator"
                    }
                    onClick={() => setCurrentSlide(index)}
                  ></button>
                ))
              : null}
          </span>
        </div>
      </div>
    </div>
  );
}
