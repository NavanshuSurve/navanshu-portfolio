// FeedMyBrain.js
import axios from "axios";
import "./FeedMyBrain.css";
import { useState, useEffect } from "react";
import { Plus, X, Calendar, Tag, AlertCircle } from "lucide-react";
export default function FeedMyBrain() {
  const postComment = (comment) => {
    axios
      .post("http://localhost:3000/comments", comment)
      .then((response) => console.log("Success:", response.data))
      .catch((error) => console.error("Error:", error));
  };

  const [comments, setComments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newComment, setNewComment] = useState({
    name: "",
    text: "",
  });

  useEffect(() => {
    const fetchComments = async () => {
        try {
      const response = await axios.get("http://localhost:3000/comments");
      setComments(response.data);
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    }
    };
    fetchComments();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment((prevComment) => ({ ...prevComment, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.name.trim()) {
      const taskToAdd = {
        ...newComment,
        
      };

      setComments((prev) => [...prev, taskToAdd]);

      postComment(taskToAdd);

      setNewComment({
        name: "",
        text: "",
      });
      setIsModalOpen(false);
    }
  };

  return (
    <div style={{ padding: "16rem" }}>
      <h1>Feed My Brain</h1>
      <p>This is the FeedMyBrain page.</p>
      <p>this is still under construction(a metaphor for growth)</p>
      <button onClick={() => setIsModalOpen(true)}>
        <Plus />
      </button>
      {isModalOpen && (
        <div className="MODAL">
          <form className="Form" onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
              name="name"
              value={newComment.name}
              onChange={handleInputChange}
              placeholder="Anonymous Kirby"
              required
            />
            <label>Comment:</label>
            <input
              name="text"
              value={newComment.text}
              onChange={handleInputChange}
              placeholder="Type your thoughts"
              required
            />
            <button className="POST" type="submit">
              Post
            </button>
          </form>
          <button className="closeBtn" onClick={() => setIsModalOpen(false)}>
            <X size={28} />
          </button>
        </div>
      )}

      <div>
        {comments.map((comment) => (
          <div className="COMMENT-DIV" key={comment.id}>
            <strong>{comment.name}</strong>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
