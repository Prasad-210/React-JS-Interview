import { useEffect, useState } from "react";
import "./pagination_style.css";
import Pagination from "./Pagination";

export default function Post() {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  // console.log("result data",data)

  useEffect(() => {
    const FetchPostData = async () => {
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${pageNo}&limit=5`
      );
      const result = await response.json();
      // console.log(result)
      setData(result);
    };

    FetchPostData();
  }, [pageNo]);

  return (
    <div className="container">
      <div className="post-container">
        {data.map((item, index) => {
          return <img key={item.id || index} src={item.download_url} />;
        })}
      </div>
      <Pagination pageNo={pageNo} setPageNo={setPageNo} />
    </div>
  );
}
