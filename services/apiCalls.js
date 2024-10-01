import axios from "axios";

export const getTasks = async () => {
  try {
    const res = await axios.get("http://localhost:8081/tasks/");
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const addTask = async (task) => {
  try {
    const res = await axios.post("http://localhost:8081/tasks/", task);
    return res.data;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};

export const deleteTask = async (taskId) => {
  try {
    const res = await axios.delete(
      "http://localhost:8081/tasks/" + taskId
    );
    return res.data;
  } catch (err) {
    return { error: err };
  }
};
