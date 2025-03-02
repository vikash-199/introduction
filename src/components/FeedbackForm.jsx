import { useState } from "react";
import Card from "./shared/Card";
import RatingSelect from "./RatingSelect";
function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at lest 10 characters");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };
  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim().length > 10) {
      setMessage("Text must be at least 10 characters");
      return;
    }
  }
  return (
    <Card>
      <form onSubmit={handleSubmit} style={{ backgroundColor: "lightyellow" }}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <button type="submit" disabled={btnDisabled}>
            Send
          </button>
        </div>
        {message && <div className="message">{message}</div>}
        <br />
      </form>
    </Card>
  );
}

export default FeedbackForm;
