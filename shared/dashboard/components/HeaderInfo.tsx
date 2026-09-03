export default function HeaderInfo({title,description}) {
  return (
            <div className="dashboard-info-header">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
  );
}