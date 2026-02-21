import { useNavigate } from "react-router-dom";

export default function Login({ setAuth }) {
  const navigate = useNavigate();

  const login = () => {
    setAuth(true);
    navigate("/profile");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={login}>Login</button>
    </div>
  );
}