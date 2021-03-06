import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { startLogin } from "../actions/auth";

const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensologist</h1>
      <p>React.js Demo App - Expenses Manager</p>
      <button className="button" onClick={startLogin}>
        Log In with Google
      </button>
      <div>
        <Link className="small-link" to="/about">
          about
        </Link>
        {" - "}
        <Link className="small-link" to="/privacy">
          privacy
        </Link>
        {" - "}
        <Link className="small-link" to="/cookies">
          cookies
        </Link>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

export { LoginPage };
