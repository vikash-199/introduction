import { FaTimes } from "react-icons/fa";
import Card from "./shared/Card";
import { LiaGhostSolid } from "react-icons/lia";

function FeedbackItem({ item, handleDelete }) {
  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <button onClick={() => handleDelete(item.id)}>
        {" "}
        <FaTimes color="blue" />
      </button>
      <div className="num-display">{item.rating}</div>
      <div className="text-disply">{item.text}</div>
      <br />
    </div>
  );
}

export default FeedbackItem;
