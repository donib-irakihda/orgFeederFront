import { useEffect, useRef, useState } from "react";
import { getPostId, patchComment, postcomment } from "../axios/axiosBoard";
import { ToastContainer, toast } from "react-toastify";

const useComment = () => {
  const [post, setPost] = useState({});
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
  // const [editComment, setEditComment] = useState(" ");
  const editComment = useRef(null);
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
      // console.log(editComment.current);
      const res = await patchComment({
        id: commentId,
        comment: editComment.current,
      });
      // console.log(res.data.message);
      toast.success(res.data.message);
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
  return {
    post,
    setPost,
    comment,
    setComment,
    commentId,
    setCommentId,
    editComment,
    toggleEdit,
    setToogleEdit,
    commentPostHandler,
    handleEditComment,
    voteHandler,
    toast,
  };
};

export default useComment;
