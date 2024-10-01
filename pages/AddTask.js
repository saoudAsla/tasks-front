import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  addTask
} from "../services/apiCalls";

const BASE_API_URL = "http://localhost:8081";
const AddTask = () => {
  const { id } = useParams();
  const [defaultValue, setDeafaultValue] = useState({
    taskTitle: "",
    taskDescription: ""
  });
  const navigate = useNavigate();


  const {
    taskTitle,
    taskDescription,
    taskId,
  } = defaultValue;
  console.log(taskId);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target);
    let formData = new FormData(e.target);
    let fileFormData = new FormData();
    const values = Object.fromEntries(formData.entries());
    const tId = !taskId
      ? values.taskTitle.toLowerCase().replaceAll(/[\s\t]+/g, "-")
      : taskId;
    fileFormData.append("taskId", tId);
    try {
      if (tId) {
        let formValues = {
          taskId: tId,
          ...values,
        };
        let { data, error } = await addTask(formValues);
        if (error) throw new Error(error);
        else navigate(-1);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container max-w-5xl py-10">
      <div className="flex space-x-6 mb-10 items-center">
        <button
          onClick={() => navigate(-1)}
          className="h-10 leading-none text-xl"
        >
          {"<"}
        </button>
        <h2 className="text--title">
          Add Task
        </h2>
      </div>
      <div className="flex flex-col">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>Task Title</label>
            <input
              defaultValue={taskTitle || ""}
              name="taskTitle"
              placeholder="Enter Task Title..."
              type="text"
            />
          </div>
          <div className="mb-4">
            <label>Task Description</label>
            <textarea
              defaultValue={taskDescription || ""}
              name="taskDescription"
              className="resize-none"
              rows={5}
            ></textarea>
          </div>

          <div className="flex items-center mb-5">
            <button className="w-full">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
