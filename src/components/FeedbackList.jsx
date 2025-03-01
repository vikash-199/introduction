import FeedbackItem from "./FeedbackItem";
function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  return (
    <div>
      {feedback.map((item) => (
        <FeedbackItem handleDelete={handleDelete} key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedbackList;
