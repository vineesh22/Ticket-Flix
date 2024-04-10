import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Signin from "./Signin";

const Footer = () => {
  return (
    <nav className="navbar navbar-dark bg-dark bg-light justify-content-center">
      <button
        type="button"
        className="btn btn-danger me-5"
        data-bs-toggle="modal"
        data-bs-target="#admin"
      >
        Admin
      </button>
      <div
        class="modal fade"
        id="admin"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-dialog">
            <div class="modal-content">
              <div
                class="modal-header"
                style={{ backgroundColor: "#dc3545", color: "#ffffff" }}
              >
                <h1 class="modal-title fs-5" id="staticBackdropLabel">
                  Sign in
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form>
                <div
                  className="modal-body"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    class="form-floating mb-3"
                    style={{ marginBottom: "30px" }}
                  >
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Username"
                      required
                      style={{
                        width: "300px",
                        borderRadius: "10px",
                      }}
                    />
                    <label for="floatingInput">Username</label>
                  </div>
                  <div class="form-floating" style={{ marginBottom: "30px" }}>
                    <input
                      type="password"
                      class="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      required
                      style={{
                        width: "300px",
                        borderRadius: "10px",
                      }}
                    />
                    <label for="floatingPassword">Password</label>
                  </div>
                  <div>
                    <input
                      type="submit"
                      className="btn btn-outline-danger"
                      id="submit"
                    ></input>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
