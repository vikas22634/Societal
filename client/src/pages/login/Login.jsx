import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setErr(err.response.data);
    }
  };
  const handleLoginTest = async (e) => {
    e.preventDefault();

    setInputs({ username: "test20", password: "test20" });
    await login(inputs);
    navigate("/");
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left"></div>
        <div className="right">
          <div></div>
          <img src="/upload/Logo.png" alt="" style={{}} />
          <h1>Login</h1>
          <form>
            <label htmlFor="Email" className="label">
              Username
            </label>
            <input
              type="email"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <label htmlFor="Password" className="label">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <div>
              <span>
                Don't you have an account?
                <Link to="/register">Register</Link>
              </span>
            </div>

            {err && err}
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLoginTest}>
              Log In With Test Credentials{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
