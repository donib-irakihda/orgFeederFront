import React from "react";
import Dashboard from "../Dashboard";
import { useEffect } from "react";
import { getBoard } from "../../axios/axiosBoard";
import CreateBoard from "../Modals/CreateBoardModal";
import { useState } from "react";

const BoardOP = () => {
  const [boards, setBoard] = useState([]);
  useEffect(() => {
    try {
      return async () => {
        const res = await getBoard(localStorage.getItem("orgid"));
        if (res.status === 200) {
          console.log(res.data.boards);
          setBoard(res.data.boards);
        }
      };
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Dashboard>
      <main className="ml-5 mt-5">
        <div>
          {/* The button to open modal */}
          <label htmlFor="modal" className="btn bg-success2">
            <a href="#createboard">Create Board</a>
          </label>
        </div>
        <div className="grid grid-cols-3 gap-20">
          {boards?.length > 0
            ? boards.map((board, index) => (
                <div className="card w-72 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title ">
                      <span className="truncate">{board.name}</span>
                      {board.boardType === "feedback" ? (
                        <span className="badge badge-accent">
                          {board.boardType}
                        </span>
                      ) : board.boardType === "featureRequest" ? (
                        <span className="badge badge-accent">
                          {board.boardType}
                        </span>
                      ) : (
                        <span className="badge badge-accent">
                          {board.boardType}
                        </span>
                      )}
                    </h2>

                    <p className="truncate">{board.description}</p>

                    <div className="card-actions justify-end">
                      <button className="btn btn-success">Show More</button>
                    </div>
                  </div>
                </div>
              ))
            : " "}
        </div>
      </main>
      <CreateBoard />
    </Dashboard>
  );
};

export default BoardOP;
