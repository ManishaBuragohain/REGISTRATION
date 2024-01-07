import React from "react";

const Login = () => {
  return (
    <>
      <div>
        <div>
          <form action="">
            <div className="mb-3">
              <label htmlFor="email" />
              <input type="email" placeholder="enter your mail" />
            </div>
            <div className="mb-3">
              <label htmlFor="paswword" />
              <input type="mail" placeholder="enter your password" />
            </div>
            <button className="btn btn-success">LOGIN</button>
            <p></p>
            <button className="btn btn-default success">Register</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
