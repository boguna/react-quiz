import Question from "./components/Question";
function Questions({ questions }) {
  return (
    <div>
      {questions.map((question) => (
        <Question question={question} />
      ))}
    </div>
  );
}

export default Questions;
