import React, { useState, useEffect } from "react";

export default function DisplayTasks() {

  const [tasks, setTasks] = useState([]);
  const [deleteMessage, setDeleteMessage] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  const handleDelete = (taskId) => {

    if (window.confirm(`Delete task with ID ${taskId}?`)) {

      const updatedTasks = tasks.filter(task => task.taskId !== taskId);

      setTasks(updatedTasks);

      localStorage.setItem("tasks", JSON.stringify(updatedTasks));

      setDeleteMessage(`Task ${taskId} deleted successfully`);

      setTimeout(() => setDeleteMessage(""), 3000);
    }
  };

  return (
    <div style={{ padding: "20px" }}>

      <h2>Task List</h2>

      {deleteMessage && (
        <div
          style={{
            color: "#155724",
            background: "#d4edda",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "4px"
          }}
        >
          {deleteMessage}
        </div>
      )}

      {tasks.length === 0 ? (
        <p>No tasks created yet.</p>
      ) : (
        <div style={{ overflowX: "auto" }}>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              background: "#fff",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}
          >

            <thead>
              <tr style={{ background: "#f8f9fa" }}>
                <th style={{ padding: "10px" }}>ID</th>
                <th style={{ padding: "10px" }}>Title</th>
                <th style={{ padding: "10px" }}>Assigned To</th>
                <th style={{ padding: "10px" }}>Priority</th>
                <th style={{ padding: "10px" }}>Status</th>
                <th style={{ padding: "10px" }}>Due Date</th>
                <th style={{ padding: "10px" }}>Created</th>
                <th style={{ padding: "10px" }}>Action</th>
              </tr>
            </thead>

            <tbody>
              {tasks.map((task) => (

                <tr key={task.taskId} style={{ borderBottom: "1px solid #ddd" }}>

                  <td style={{ padding: "10px" }}>{task.taskId}</td>

                  <td style={{ padding: "10px" }}>{task.title}</td>

                  <td style={{ padding: "10px" }}>{task.assignedTo}</td>

                  <td style={{ padding: "10px" }}>{task.priority}</td>

                  <td style={{ padding: "10px" }}>{task.status}</td>

                  <td style={{ padding: "10px" }}>{task.dueDate}</td>

                  <td style={{ padding: "10px", fontSize: "12px" }}>
                    {task.createdAt}
                  </td>

                  <td style={{ padding: "10px" }}>
                    <button
                      onClick={() => handleDelete(task.taskId)}
                      style={{
                        background: "#804c51",
                        color: "#fff",
                        border: "none",
                        padding: "6px 12px",
                        borderRadius: "4px",
                        cursor: "pointer"
                      }}
                    >
                      Delete
                    </button>
                  </td>

                </tr>

              ))}
            </tbody>

          </table>

        </div>
      )}

    </div>
  );
}