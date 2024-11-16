import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signInUser } from "../../store/Auth/authSlice";

function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const postLogin = async (e) => {
    e.preventDefault();
    try {
      e.preventDefault();
      dispatch(signInUser({ ...login })).then(({ payload }) => {
        navigate("/profile");
        console.log(payload);
        
      });
      setLogin({ email: "", password: "" });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <section className="login">
      <form className="login__form" onSubmit={postLogin}>
        <div className="login__form--title">Login</div>
        <p className="login__form--welcome">Welcome to platform!</p>
        <div className="login__form--name">
          {" "}
          <input
            type="email"
            placeholder="Login"
            id="login"
            name="email"
            value={login.email}
            onChange={onChangeHandler}
          />
        </div>
        <div className="login__form--password">
          <input
            type="password"
            placeholder="Parol"
            id="password"
            name="password"
            value={login.password}
            onChange={onChangeHandler}
          />
        </div>
        <button
          className="login__form--sign"
          type="submit"
        >
          Kirish
        </button>
        <p className="bottom">Don't have an account? <Link to="/register">Click here!</Link></p>
      </form>
      <ToastContainer />
    </section>
  );
}

export default Login;