import React, { useState } from "react";
import './style.css';
const TaskRegistration = () => {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    assignedTo: "",
    priority: "",
    status: "",
    dueDate: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData({
      ...taskData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedTasks =
      JSON.parse(localStorage.getItem("tasks")) || [];

    const newTask = {
      ...taskData,
      taskId: Math.floor(Math.random() * 9000) + 1000,
      createdAt: new Date().toLocaleString()
    };

    storedTasks.push(newTask);

    localStorage.setItem("tasks", JSON.stringify(storedTasks));

    alert("Task created successfully");

    setTaskData({
      title: "",
      description: "",
      assignedTo: "",
      priority: "",
      status: "",
      dueDate: ""
    });
  };

  return (
    <div className="task-container">
      <div className="task-card">
        <h2>Create Task</h2>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Task Title</label>
            <input
              type="text"
              name="title"
              value={taskData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={taskData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Assigned To</label>
            <input
              type="text"
              name="assignedTo"
              value={taskData.assignedTo}
              onChange={handleChange}
              placeholder="Enter username"
              required
            />
          </div>

          <div className="form-group">
            <label>Priority</label>
            <select
              name="priority"
              value={taskData.priority}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div className="form-group">
            <label>Status</label>
            <select
              name="status"
              value={taskData.status}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="form-group">
            <label>Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={taskData.dueDate}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Create Task</button>

        </form>
      </div>
    </div>
  );
};

export default TaskRegistration;