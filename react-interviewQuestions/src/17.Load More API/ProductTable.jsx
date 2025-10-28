import React, { useEffect, useState } from "react";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [visualCOunt, setVisualCount] = useState(5);
  const [isLoading, setIsloading] = useState(true);

  console.log(products);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();

        setProducts(result);
        setIsloading(false);
      } catch (e) {
        console.log(e.message);
        setIsloading(false);
      }
    };

    fetchProductsData();
  }, []);

  if (isLoading) return <h1> Loading Products ....</h1>;

  const visiblePrducts = products.slice(0, visualCOunt);

  const handleLoadMore = () => {
    setVisualCount((prev) => prev + 5);
  };
  return (
    <div style={{ padding: "20px" }}>
      <h2>ProductTable</h2>
      <table
        border="1"
        cellPadding="10"
        style={{ borderCollapse: "collapse", width: "100%", textAlign: "left" }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Catogory</th>
            <th>Price($)</th>
          </tr>
        </thead>
        <tbody>
          {visiblePrducts.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button
          onClick={handleLoadMore}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default ProductTable;
