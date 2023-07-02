import { Container } from "@aif-packages/layout";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const start = () => {
    navigate("/image-finder");
  };
  return (
    <Container className="h-100 d-flex flex-column justify-content-center align-items-center">
      <div>This is a placeholder for Home Page.</div>
      <div>
        <button className="btn btn-primary" onClick={start}>
          Click here to get start
        </button>
      </div>
    </Container>
  );
};
