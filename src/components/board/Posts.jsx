import React from "react";
import voteico from "../../assets/uparrow.svg";
import commentico from "../../assets/comment.svg";

const Posts = ({
  post: { title, email, description, status, priority, vote, comments },
}) => {
  return (
    <>
      <div className="flex flex-row w-full justify-between  p-4 bg-white ">
        <div className="w-10 h-16 bg-[#fcfcfc]  rounded-md mr-4 justify-center">
          {" "}
          <img src={voteico} alt="voteicon" className="" />
          <span className="p-2">{vote}</span>
        </div>
        <div className="">
          {" "}
          <h1 className="font-semibold text-base">{title}</h1>{" "}
          <p className="text-sm opacity-60">{description}</p>
        </div>
        <div className="flex flex-row">
          <img src={commentico} alt="commentico" className="w-4 h-4 mx-2" />
          <span className="text-sm">{comments.length}</span>
        </div>
      </div>
    </>
  );
};

export default Posts;
