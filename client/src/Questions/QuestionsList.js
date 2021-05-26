import { useState, useEffect } from "react";
import Api from "../../Api";
import { Link } from "react-router-dom";
const QuestionsList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    Api.questions.index().then((response) => setQuestions(response.data));
  }, []);

  const onDelete = (questions) => {
    if (window.confirm(`Are you sure you want to delete ${questions.topic}?`)) {
      // delete button from the API
      Api.questions.delete(questions.id).then(() => {
        // We are fukterunf gthe section list, keeping every section that does not match the one we're deleting
        const newQuestions = questions.filter((s) => s.id !== question.id);
        setQuestions(newQuestions);
      });
    }
  };
  return (
    <main>
      <h2>The Quesitons List</h2>
      <ul>
        {questions.map((questions) => (
          <li>
            <p>
              <Link to={`/question/${question.id}/edit`}>
                {question.topic}, {question.url}
              </Link>
            </p>
            <p>
              <button
                onClick={() => onDelete(question)}
                type="button"
                className="btn btn-sm btn-danger"
              >
                Delete
              </button>
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default QuestionsList;