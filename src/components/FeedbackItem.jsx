import { FaTimes } from "react-icons/fa";
import Card from "./shared/Card";

function FeedbackItem({ item, handleDelete }) {
  return (
    <Card>
      <button onClick={() => handleDelete(item.id)}>
        {" "}
        <FaTimes color="blue" />
      </button>
      <div className="num-display">{item.rating}</div>
      <div className="text-disply">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
