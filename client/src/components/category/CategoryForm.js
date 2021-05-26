import React, { useState, useEffect } from "react";
import Api from "../../Api";
import { useHistory, useParams } from "react-router-dom";

function CategoryForm() {
  const history = useHistory();
  const { id } = useParams();
  const [category, setCategory] = useState({
    categoryName: "",
    limit: 0.0,
    spend: 0.0,
  });

  useEffect(() => {
    if (id) {
      Api.categories.get(id).then((response) => setCategory(response.data));
    }
  }, [id]);

  const onChange = (e) => {
    const { name, value } = e.target;
    const newCategory = { ...category };
    newCategory[name] = value;
    setCategory(newCategory);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (id) {
        await Api.categories.update(id, category);
      } else {
        await Api.categories.create(category);
      }
      history.push("/categories");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <h1>Category Forms</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="categoryName"
            value={category.categoryName}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label>limit</label>
          <input
            className="form-control"
            type="text"
            name="limit"
            value={category.limit}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label>spend</label>
          <input
            className="form-control"
            type="text"
            name="spend"
            value={category.spend}
            onChange={onChange}
          />
        </div>
        <button className="btn, btn-primary" type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}

export default CategoryForm;
