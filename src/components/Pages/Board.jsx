import React, { useEffect, useState } from "react";
import CreatePost from "../board/CreatePost";
import { getPosts } from "../../axios/axiosBoard";
import Dashboard from "../Dashboard";
import Posts from "../board/Posts";

const BoardFeat = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    try {
      return async () => {
        const res = await getPosts(localStorage.getItem("boardID"));
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
    <Dashboard>
      <div className="my-4 flex flex-row bg-white w-full">
        <div className="mx-4 w-2/6">
          <CreatePost />
        </div>
        <div className="w-4/6 mx-8">
          {posts?.length > 0
            ? posts.map((post, index) => <Posts post={post} key={index} />)
            : "NO POSTS"}
        </div>
      </div>
    </Dashboard>
  );
};

export default BoardFeat;
