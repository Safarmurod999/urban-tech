import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const postLogin = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${BASE_URL}auth/login`, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      }).then(async (res) => {
        let response = await res.json();
        if (response.data) {
          toast.success("Login successfully !");
          setTimeout(() => navigate("/admin"), 1000);
          localStorage.setItem(
            "access_token",
            JSON.stringify(response.data["access_token"])
          );
          localStorage.setItem(
            "username",
            JSON.stringify(response.data["username"])
          );
          localStorage.setItem(
            "isSuperAdmin",
            JSON.stringify(response.data["isSuperAdmin"])
          );
        }else{
          toast.error("Wrong credentials !");
        }
      });
    } catch (error) {
      console.log(error.message);
    }
    setLogin({ username: "", password: "" });
  };
  return (
    <section className="login">
      <form className="login__form">
        <div className="login__form--title">Login</div>
        <p className="login__form--welcome">Welcome to platform!</p>
        <div className="login__form--name">
          {" "}
          <input
            type="text"
            placeholder="Login"
            id="login"
            name="username"
            value={login.username}
            onChange={onChangeHandler}
          />
        </div>
        <div className="login__form--password">
          <input
            type="text"
            placeholder="Parol"
            id="password"
            name="password"
            value={login.password}
            onChange={onChangeHandler}
          />
        </div>
        <Link to={"/admin"}>
          <button
            className="login__form--sign"
            type="submit"
            onClick={(e) => postLogin(e)}
          >
            Kirish
          </button>
        </Link>
      </form>
      <ToastContainer />
    </section>
  );
}

export default Login;