import React, { useEffect, useState, useRef, useCallback } from "react";
import "./InfiniteScroll.css";

export default function InfiniteScroll() {
  const [data, setData] = useState([]);        // store fetched items
  const [page, setPage] = useState(1);         // current page number
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true); // stop if no more data
  const loaderRef = useRef(null);               // ref for the loader div

  // Fetch data whenever page changes
  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`);
        const result = await res.json();

        // if result is empty, stop loading further
        if (result.length === 0) {
          setHasMore(false);
        } else {
          setData((prev) => [...prev, ...result]); // append new data
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
      setLoading(false);
    };

    fetchImages();
  }, [page]);

  // Intersection Observer — triggers when loader is visible
  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore && !loading) {
        setPage((prev) => prev + 1);
      }
    },
    [hasMore, loading]
  );

  // Set up IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    });
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [handleObserver]);

  return (
    <div className="scroll-container">
      <h2>🧠 Infinite Scroll Example</h2>

      <div className="image-grid">
        {data.map((img) => (
          <div key={img.id} className="image-card">
            <img src={img.download_url} alt={img.author} />
            <p>{img.author}</p>
          </div>
        ))}
      </div>

      {loading && <p className="loading-text">Loading...</p>}
      {!hasMore && <p className="end-text">No more images to show.</p>}

      <div ref={loaderRef} className="loader"></div>
    </div>
  );
}
