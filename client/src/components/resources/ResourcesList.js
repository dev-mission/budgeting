import { useState, useEffect } from "react";
import Api from "../../Api";
import { Link } from "react-router-dom";
const ResourcesList = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    Api.resources.index().then((response) => setResources(response.data));
  }, []);

  const onDelete = (resource) => {
    if (window.confirm(`Are you sure you want to delete ${resource.topic}?`)) {
      // delete button from the API
      Api.resources.delete(resource.id).then(() => {
        // We are fukterunf gthe section list, keeping every section that does not match the one we're deleting
        const newResources = resources.filter((s) => s.id !== resource.id);
        setResources(newResources);
      });
    }
  };
  return (
    <main>
      <h2>The Resource List</h2>
      <ul>
        {resources.map((resource) => (
          <li>
            <p>
              <Link to={`/resource/${resource.id}/edit`}>
                {resource.topic}, {resource.url}
              </Link>
            </p>
            <p>
              <button
                onClick={() => onDelete(resource)}
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

export default ResourcesList;
