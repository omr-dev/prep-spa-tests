import { useEffect, useState } from "react";
import axios from "axios";
export const PageSpaTest5 = () => {
  const [postCount, setPostCount] = useState(0);
  useEffect(()=>{
    (async () => {
    const postsLengthInApi = (
      await axios.get("https://jsonplaceholder.typicode.com/posts")
    ).data;
    setPostCount(postsLengthInApi.length);
  })()},[])
  return (
    <div className="sub-page page-spaTest5">
      <h2>{postCount > 0 ? `There are ${postCount} posts` : "Loading..."}</h2>
    </div>
  );
};
