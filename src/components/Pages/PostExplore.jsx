import React from "react";
import Dashboard from "../Dashboard";
import { useEffect, useState } from "react";
import {
  getPostId,
  patchComment,
  postcomment,
  votePost,
} from "../../axios/axiosBoard";
import { ToastContainer, toast } from "react-toastify";
import DeleteComment from "../Modals/DeleteComment";
import moment from "moment";
import voteico from "../../assets/uparrow.svg";
import commentico from "../../assets/comment.svg";
import avatar_man from "../../assets/avatar_man.svg";

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

  const [comment, setComment] = useState();
  const [commentId, setCommentId] = useState("");
  const [editComment, setEditComment] = useState("sad boy");
  const [toggleEdit, setToogleEdit] = useState(false);

  const commentPostHandler = async () => {
    try {
      const res = await postcomment({
        comment,
        post: localStorage.getItem("postID"),
      });

      res ? console.log(res) : "da sssd";
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditComment = async () => {
    try {
      const res = await patchComment({ id: commentId, comment: editComment });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const voteHandler = async () => {
    try {
      const id = localStorage.getItem("postID");
      const res = await votePost({ id });
      console.log(res.data);
      if (res.data?.message) {
        toast.success(res.data.message);
      }
    } catch (error) {
      // console.log(error.response.data.error);
      toast.error(error.response.data.error);
    }
  };

  return (
    <Dashboard>
      <ToastContainer theme="colored" autoClose={3000} />
      <div className="w-screen flex justify-center bg-[#f5f5f5]">
        <div className="w-5/6 flex flex-row bg-white p-8 border rounded-2xl mt-4 shadow-md">
          <div className="w-1/12 h-16 bg-[#fcfcfc]  rounded-md mr-4 justify-center">
            {" "}
            <img
              src={voteico}
              alt="voteicon"
              className="w-8 hover:scale-125"
              onClick={() => voteHandler()}
            />
            <p className="ml-2 text-sm font-bold">{post.vote}</p>
          </div>
          <div className="w-10/12">
            {" "}
            <div className="mb-8">
              <h1 className="font-semibold text-3xl">{post.title}</h1>{" "}
              <p className="text-sm font-normal italic">
                created at {moment(post.createdAt).fromNow()}
              </p>
              <div className="flex flex-row mr-4 mt-4">
                <h2 className="mr-4">Status :</h2>
                <p className="badge bg-orange-300 font-normal text-black px-4 py-3 mr-4">
                  {post.status}
                </p>
                <p className="badge bg-orange-300 font-normal text-black px-4 py-3 mr-4">
                  {post.priority}
                </p>
              </div>
              <p className="opacity-80 mt-8 ">{post.description}</p>
            </div>{" "}
            <p className="text-2xl mb-2"> Comment Here</p>{" "}
            <div>
              <textarea
                name=""
                id=""
                rows="8"
                className="border w-full mb-0 p-4"
                placeholder="Share Your Thoughts Here"
                onChange={(e) => {
                  setComment(e.target.value);
                }}
                value={comment}
              ></textarea>
              <div className="mt-0 flex justify-end">
                <button
                  className="btn"
                  onClick={() => {
                    commentPostHandler();
                    setComment("");
                  }}
                >
                  {" "}
                  Comment
                </button>
              </div>
            </div>
            <div>
              <div className="flex flex-row mb-4">
                <h1 className="text-2xl">Comments </h1>
                <img src={commentico} alt="" className="ml-4 w-8" />
              </div>

              <hr />
              {post.comments?.length > 0
                ? post.comments.map((comment) => (
                    <div className="flex flex-row mt-4">
                      <div className="w-1/12 ">
                        {" "}
                        <img
                          // src={comment.createdBy.avatar}
                          src={avatar_man}
                          alt="profile"
                          className="border rounded-full w-12"
                        />
                      </div>
                      <div className="w-10/12 ml-4">
                        {" "}
                        <p className="text-xs font-bold">
                          {comment.createdBy.username}
                          <span className="text-slate-400 font-normal ml-2">
                            {moment(comment.createdAt).fromNow()}
                          </span>
                        </p>
                        <div className="flex justify-between">
                          {comment._id == commentId ? (
                            <div>
                              <input
                                placeholder={comment.comment}
                                size={80}
                                onChange={() => setEditComment(e.target.value)}
                                className="border-[1px] rounded-md p-2 border-slate-600"
                              />
                              <br />
                              <button
                                className="bg-black text-white mt-2 rounded-md py-1 px-4"
                                onClick={() => handleEditComment(comment._id)}
                              >
                                Done
                              </button>
                            </div>
                          ) : (
                            <p className="font-normal">{comment.comment}</p>
                          )}

                          <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="m-1">
                              ⛓️
                            </label>
                            <ul
                              tabIndex={0}
                              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-36 "
                            >
                              <li
                                onClick={() => {
                                  setToogleEdit(true);
                                  setCommentId(comment._id);
                                }}
                              >
                                <a>⚒️ Edit</a>
                              </li>
                              <li
                                onClick={() => {
                                  setCommentId(comment._id);
                                  localStorage.setItem("commentID", commentId);
                                }}
                              >
                                <a href="#deleteComment">🗑️ Delete</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : "NO comments till now"}
            </div>
          </div>
        </div>
      </div>
      <DeleteComment id={commentId} />
    </Dashboard>
  );
};

export default PostExplore;
