import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { signUpUser } from '../../store/Auth/authSlice';

const Register = () => {
  const [register, setRegister] = useState({
    username: "",
    password: "",
    email: "",
    firstname: "",
    lastname: "",
    location: "",

  });
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const postLogin = async (e) => {
    e.preventDefault();
    try {
      e.preventDefault();
      dispatch(signUpUser({ ...login })).then(({ payload }) => {
        console.log(payload)
      });
      setRegister({ email: "", password: "", firstname: "", lastname: "", location: "", username: "" });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <section className="register">
      <form className="register__form" onSubmit={postLogin}>
        <div className="register__form--title">Register</div>
        <p className="register__form--welcome">Welcome to platform!</p>
        <div className="register__form--name">
          {" "}
          <input
            type="text"
            placeholder="Username"
            id="login"
            name="username"
            value={register.username}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="register__form--email">
          {" "}
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            value={register.email}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="register__form--firstname">
          {" "}
          <input
            type="text"
            placeholder="Firstname"
            id="firstname"
            name="firstname"
            value={register.firstname}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="register__form--lastname">
          {" "}
          <input
            type="text"
            placeholder="Lastname"
            id="lastname"
            name="lastname"
            value={register.lastname}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="register__form--location">
          {" "}
          <input
            type="text"
            placeholder="Location"
            id="location"
            name="location"
            value={register.firstname}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="register__form--role">
          <select name="role" id="role" onChange={(e) => setRegister({ ...register, role: e.target.value })}>
            <option value="participant">Participant</option>
            <option value="mentor">Mentor</option>
            {/* <option value="startup">Startup</option> */}
          </select>
        </div>
        <button
          className="register__form--sign"
          type="submit"
        >
          Kirish
        </button>
        <p className="bottom">Already have an account? <Link to="/login">Click here!</Link></p>

      </form>
      <ToastContainer />
    </section>)
}

export default Register