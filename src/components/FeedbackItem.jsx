import { useState } from "react";

function FeedbackItem() {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState("This is an example of a feedback item");
  function handleClick() {
    setRating((pre) => pre + 1);
  }

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-disply">{text}</div>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

export default FeedbackItem;
