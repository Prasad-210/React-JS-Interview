import React, { useEffect } from "react";

const Fetch = () => {
  //   useEffect(() => {
  //     const final = fetch("https://jsonplaceholder.typicode.com/posts", {
  //       method: "POST",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         title: "testtest",
  //         body: "This is test post",
  //         userId: 1,
  //       }),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => console.log(data))
  //       .catch((err) => console.error(err));

  //     final();
  //   }, []);

  const url = "https://jsonplaceholder.typicode.com/posts";
  async function fetchData() {
    try {
      const response = await fetch(url,
    //     {
    //     method: "POST",
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       title: "testtest",
    //       body: "This is test post",
    //       userId: 1,
    //     }),
    //   }
      );
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      Hi
      <h1>hhh</h1>
    </div>
  );
};

export default Fetch;
