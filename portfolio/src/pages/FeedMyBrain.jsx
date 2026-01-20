import axios from "axios";
import "./FeedMyBrain.css";
import { useState, useEffect } from "react";
import { Plus, X } from "lucide-react";

export default function FeedMyBrain() {
  const [comments, setComments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newComment, setNewComment] = useState({
    name: "",
    comment: "",
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
    setNewComment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newComment.name.trim() || !newComment.comment.trim()) return;

    try {
      const res = await axios.post(
        "http://localhost:3000/comments",
        newComment
      );

      setComments((prev) => [...prev, res.data.comment]);

      setNewComment({ name: "", comment: "" });
      setIsModalOpen(false);
    } catch (err) {
      console.error("POST failed:", err.response?.data || err.message);
    }
  };

  return (
    <div style={{ padding: "16rem" }}>
      <h1>Feed My Brain</h1>

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
              required
            />

            <label>Comment:</label>
            <input
              name="comment"
              value={newComment.comment}
              onChange={handleInputChange}
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
          <div className="COMMENT-DIV" key={comment._id}>
            <strong>{comment.name}</strong>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
