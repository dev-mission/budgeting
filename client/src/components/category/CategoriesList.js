import { useState, useEffect } from "react";

import Api from "../../Api";
import { Link } from "react-router-dom";

function CategoriesList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Api.categories.index().then((response) => setCategories(response.data));
  }, []);

  const onDelete = (category) => {
    if (
      window.confirm(
        `Are you sure you want to delete ${category.categoryName}?`
      )
    ) {
      // delete button from the API
      Api.categories.delete(category.id).then(() => {
        // We are fukterunf gthe section list, keeping every section that does not match the one we're deleting
        const newCategories = categories.filter((s) => s.id !== category.id);
        setCategories(newCategories);
      });
    }
  };

  return (
    <main className="container">
      <div>Categories List</div>
      <ul>
        {categories.map((c) => (
          <li key={c.id}>
            {console.log(c.id)}
            <p>
              <Link to={`categories/${c.id}/edit`}>
                {c.categoryName}, {c.limit}, {c.spend}
              </Link>
            </p>
            <p>
              <button
                onClick={() => onDelete(c)}
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
}

export default CategoriesList;
