import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);

 const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

  const fetchTickets = async () => {
    try {
      const res = await axios.get(`${API}/tickets`);
      setTickets(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  // Submit ticket
  const handleSubmit = async () => {
    if (!message) return;

    setLoading(true);

    try {
      const res = await axios.post(`${API}/tickets/analyze`, {
        message,
      });

      setResult(res.data);
      setMessage("");
      fetchTickets();

    } catch (err) {
      alert("Error submitting ticket");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>AI Ticket Triage</h1>

      {/* Input */}
      <textarea
        rows="4"
        placeholder="Enter your issue..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Analyzing..." : "Submit Ticket"}
      </button>

      {/* Result Panel */}
      {result && (
        <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
          <h3>Analysis Result</h3>
          <p><b>Category:</b> {result.category}</p>
          <p><b>Priority:</b> {result.priority}</p>
          <p><b>Urgency:</b> {result.urgency ? "Yes" : "No"}</p>
          <p><b>Confidence:</b> {result.confidence}</p>
          <p><b>Keywords:</b> {result.keywords.join(", ")}</p>
        </div>
      )}

      {/* Ticket List */}
      <h3 style={{ marginTop: "30px" }}>Previous Tickets</h3>

      <ul>
        {tickets.map((t) => (
          <li key={t._id} style={{ marginBottom: "10px" }}>
            <b>{t.message}</b><br />
            {t.category} | {t.priority}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;