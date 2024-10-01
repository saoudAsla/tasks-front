import React from "react";
import { deleteTask } from "../services/apiCalls";
import { useNavigate } from 'react-router'


const Task = ({
  taskId,
  taskTitle,
  taskDescription
}) => {
  const navigate = useNavigate()

  return (
    <>
      <div className="border-2 rounded overflow-hidden flex flex-col">
        <div className="flex flex-col p-4">
          <h4 className="mb-1 text-xl font-medium mt-5">{taskTitle}</h4>
          <p className="text-lg mb-4">{taskDescription}</p>
          <div>
            <div className="flex flex-col sm:flex-row items-center space-y-5 sm:space-y-0 sm:space-x-5 my-5">
              <button
                onClick={async () => {
                  await deleteTask(taskId)
                  console.log("Deleted")
                  navigate(0)
                }}
                className="uppercase border-gray-500 text-gray-500 w-full font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
