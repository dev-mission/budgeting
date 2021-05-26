import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Api from "../../Api";

const QuestionForm = () => {
  const history = useHistory();
  const { id } = useParams();
  const [questions, setQuestions] = useState({
    topic: "",
    url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newQuuestions = { ...questions };
    newQuestions[name] = value;
    setQuestions(newQuestions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id) {
        await Api.questions.update(id, questions);
      } else {
        await Api.questions.create(questions);
      }
      history.push("/questions");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      Api.questions.get(id).then((response) => setQuestions(quesions.data));
    }
  }, [id]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="topic">
          Topic
          <input
            type="text"
            name="topic"
            id="topic"
            value={questions.topic}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label htmmlFor="url">
          URL
          <textarea
            name="url"
            id="url"
            value={questions.url}
            onChange={handleChange}
          />
        </label>
      </div>
      <button>Submit</button>
    </form>
  );
};

export default QuestionForm;