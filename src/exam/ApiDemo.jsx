import React, { useState, useEffect } from "react";
import axios from "axios";
//import "./apidemo.css";
import './style.css';

export default function ApiDemo() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://dummy-json.mock.beeceptor.com/posts")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="api-container">
      <h2>Posts Data</h2>

      {loading ? (
        <p>Loading data...</p>
      ) : (
        <table className="api-table">
          <thead>
            <tr>
              <th>userId</th>
              <th>ID</th>
              <th>Title</th>
              <th>body</th>
              <th>Link</th>
              <th>Commentcount</th>
            </tr>
          </thead>

          <tbody>
            {users.map((post) => (
              <tr key={post.id}>
                <td>{post.userid}</td>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>{post.link}</td>
                <td>{post.comment_count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}