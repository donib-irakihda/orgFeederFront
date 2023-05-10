import React from "react";
import Dashboard from "../Dashboard";
import { useEffect, useState } from "react";
import { getPostId } from "../../axios/axiosBoard";
import voteico from "../../assets/uparrow.svg";
import commentico from "../../assets/comment.svg";

const PostExplore = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    try {
      return async () => {
        const res = await getPostId(localStorage.getItem("postID"));
        if (res.status === 200) {
          // console.log(res.data.post);
          setPost(res.data.post);
        }
      };
    } catch (err) {
      console.log(err.response);
    }
  }, []);

  return (
    <Dashboard>
      <div className="w-screen flex justify-center bg-slate-300">
        <div className="w-5/6 flex flex-row bg-white p-8 border rounded-2xl mt-4 shadow-xl">
          <div className="w-1/12 h-16 bg-[#fcfcfc]  rounded-md mr-4 justify-center">
            {" "}
            <img src={voteico} alt="voteicon" className="w-10" />
            111
          </div>
          <div className="w-11/12">
            {" "}
            <div className="mb-8">
              <h1 className="font-semibold text-base">TITLTssssssssssss</h1>{" "}
              <p className="text-sm font-normal italic">created at :12345</p>
              <div className="flex flex-row ">
                <p className="mr-4">status</p>
                <p>priority</p>
              </div>
              <p className="opacity-80 mt-8">
                dsaddddhhhdakdbkajsbdnjkasdnbjasndjakdbadbakhbdakjbdkjabdjkabdjkadjkadakjdbadbasjkdbaskd
              </p>
            </div>
            <div className="flex flex-row mb-4">
              {" "}
              <img src={commentico} alt="" className="mr-2 w-5" />
              <span>112 comments</span>
            </div>
            <div>
              <textarea
                name=""
                id=""
                rows="10"
                className="border w-full mb-0"
              ></textarea>
              <div className="mt-0 flex justify-end">
                <button className="btn"> Comment</button>
              </div>
            </div>
            <div>
              <h1 className="text-2xl">Comments</h1>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default PostExplore;
