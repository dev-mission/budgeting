import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Api from "../../Api";

const ResourceForm = () => {
  const history = useHistory();
  const { id } = useParams();
  const [resource, setResource] = useState({
    topic: "",
    url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newResource = { ...resource };
    newResource[name] = value;
    setResource(newResource);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id) {
        await Api.resources.update(id, resource);
      } else {
        await Api.resources.create(resource);
      }
      history.push("/resource");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      Api.resources.get(id).then((response) => setResource(response.data));
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
            value={resource.topic}
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
            value={resource.url}
            onChange={handleChange}
          />
        </label>
      </div>
      <button>Submit</button>
    </form>
  );
};

export default ResourceForm;
