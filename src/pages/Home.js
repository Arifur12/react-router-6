import { useNavigate } from "react-router-dom";

export default function Home() {
  // useNavigate instead of useHistory
  const navigate = useNavigate();

  return (
    <div className="content">
      <h1>Welcome..</h1>
      <p>Quality Clothing for Quality Ninjas</p>
      <img src="https://via.placeholder.com/1200x200" alt="site banner" />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima animi
        nulla eveniet. At non consequuntur perferendis id voluptatem sapiente
        dolor animi exercitationem, commodi officiis eveniet laudantium quidem
        dolore labore sit.
      </p>
      <button onClick={() => navigate("/products")}>onClick go products</button>
    </div>
  );
}
