import "./Loader.css";

export const Loader = () => {
  return (
    <div
      data-testid="loader"
      className="loader d-flex justify-content-center align-items-center"
    >
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
