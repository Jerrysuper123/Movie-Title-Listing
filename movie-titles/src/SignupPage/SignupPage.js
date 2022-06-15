import React from "react";
import { useNavigate, Link } from "react-router-dom";
export default function SignupPage() {
  return (
    <React.Fragment>
      <main className="d-flex justify-content-center adminFormContainer align-items-center">
        <section className="userText p-3 m-5 d-none d-md-block text-center">
          <h1 className="loginCTA">
            <span>Start trial today </span>
          </h1>
          <h2 className="mt-3">Zero $ for 14 day</h2>
        </section>

        <div className="m-5 d-flex flex-column justify-content-center align-items-center adminForm px-3 py-5 m-4 animate__animated animate__bounce">
          <h1 className="text-primary text-center">DEMO Streaming</h1>
          <h3 className="text-center mb-3 mt-4">Sign up today!</h3>
          <input
            type="text"
            placeholder="email"
            className="form-control mt-1"
            // onChange={handleEmail}
          />
          <input
            type="text"
            placeholder="password"
            className="form-control mt-3"
            // onChange={handlePassword}
          />

          <input
            type="text"
            placeholder="confirm password"
            className="form-control mt-3"
            // onChange={handlePassword}
          />

          <div className="text-center">
            <input
              type="submit"
              className="mt-3 userBtn"
              value="Signup"
              // onClick={fetchAccessToken}
            />
          </div>

          <section>
            <div className="mt-2 userFormFooter">
              {/* New Users? <Link to="/register">Sign up</Link> */}
            </div>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
}
