import "./Questions.scss";

function Questions() {
  return (
    <main className="container">
      <section className="questions__header">
        <div className="row">
          <h2 className="question__title offset-1 col-md-10 pt-4">
            Get all your questions about Bulga answered here!
          </h2>
        </div>
        <div className="row mb-2 single__question">
          <h3 className="question__title offset-1 col-md-10 pt-4">
            Will my budget be saved when I log out?
          </h3>
          <p className="question__subtitle offset-1  col-md-10">
            Yes, your budget is saved automatically
          </p>
        </div>
        <div className="row mb-2 single__question">
          <h3 className="question__title offset-1 col-md-10 pt-4">
            Do I have to pay to use Bulga?
          </h3>
          <p className="question__subtitle offset-1  col-md-10">
            No, Bulga is completely free to use, we just want to help you save!
          </p>
        </div>
        <div className="row mb-5 single__question">
          <h3 className="question__title offset-1 col-md-10 pt-4">
            Will you sell my information?
          </h3>
          <p className="question__subtitle offset-1  col-md-10">
            No, your information will be kept private.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Questions;
