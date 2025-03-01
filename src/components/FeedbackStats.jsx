function FeedbackStats({ feedback }) {
  let avgRating =
    feedback.reduce((sum, item) => (sum = sum + item.rating), 0) /
    feedback.length;
  avgRating = avgRating.toFixed(2);
  return (
    <div>
      <p>{`Total items : ${feedback.length}`}</p>
      <p>{`Average ratings of all the feedbacks : ${avgRating}`}</p>
    </div>
  );
}

export default FeedbackStats;
