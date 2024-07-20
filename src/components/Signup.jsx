import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [userData, setUserData] = useState({
    name: "",
    password: "",
  });
  let { name, password } = userData;

  function handleOnchange(e) {
    return setUserData({ ...userData, [e.target.name]: e.target.value });
  }
  function handleSignUp(e) {
    e.preventDefault();
    const user = localStorage.setItem("user", JSON.stringify(userData));
    console.log(user);
    alert("Sucessfully Sign up");
  }
  return (
    <div>
      <div className="container  d-flex justify-content-around p-5 flex-wrap">
        <div>
          <form
            className="form-control p-5 h-100 w-100 m-2 shadow-lg "
            style={{ background: "#bee1e6" }}
            onSubmit={handleSignUp}
          >
            <h1 className="text-center mb-4">Signup</h1>
            <label htmlFor="name" className="form-label">
              UserName
            </label>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={handleOnchange}
            />
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={handleOnchange}
            />

            <button
              style={{ background: "#a0c4ff" }}
              className="form-control my-3 text-white"
              type="submit"
            >
              Sign up
            </button>
            <p className="text-center">or</p>
            <button
              style={{ background: "white" }}
              className="form-control my-3 text-white"
              type="button"
            >
              <Link className="text-black text-decoration-none" to={"/login"}>
                login
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
