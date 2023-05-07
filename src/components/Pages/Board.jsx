import React, { useEffect, useState } from "react";
import CreatePost from "../board/CreatePost";

import Posts from "../board/Posts";
import { getPosts } from "../../axios/axiosBoard";

const Board = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    try {
      return async () => {
        const res = await getPosts("64537bd5b4ca2a5e575f382a");
        if (res.status === 200) {
          console.log("Posts retrive succesfully");
          setPosts(res.data.posts);
          // console.log(res.data.posts);x
        }
      };
    } catch (err) {
      console.log(err.response);
    }
  }, []);

  return (
    <div className="mx-5 my-5 flex flex-row w-4/5 bg-white">
      <div className="mx-5">
        <CreatePost />
      </div>
      <div>
        {posts?.length > 0
          ? posts.map((post, index) => <Posts post={post} key={index} />)
          : "NO POSTS"}
      </div>
    </div>
  );
};

export default Board;
