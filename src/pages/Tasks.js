import React, { useEffect, useState } from "react";
import Task from "../components/Task";
import { getTasks } from "../services/apiCalls";
import { Link } from "react-router-dom";
const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchTasks = async () => {
      const { data, error } = await getTasks();
      if (error) {
        console.log(error);
      } else {
        setTasks(data);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div className="container py-10 w-full max-w-5xl">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text--title">Tasks list</h2>
        <Link to="/addTask">
          <button>Add Tasks</button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 gap-y-6 md:gap-6">
        {tasks.length > 0 ? (
          tasks.map((task) => {
            return <Task key={task.taskId} {...task} />;
          })
        ) : (
          <p>No tasks Found.</p>
        )}
      </div>
    </div>
  );
};

export default Tasks;
