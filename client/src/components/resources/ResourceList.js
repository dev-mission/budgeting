function ResourceList(props) {
  return (
    <article className="single__resource mb-4 mr-auto container d-flex flex-column w-50">
      <div className="pt-4 pb-2 m-auto">{props.children}</div>
      <div>
        <h2>{props.title}</h2>
        <p className="resource__paragraph">{props.desc}</p>
      </div>
    </article>
  );
}

export default ResourceList;
