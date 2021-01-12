import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Login(props) {
	const { store, actions } = useContext(Context);

	const [state, setState] = useState({
		email: "",
		password: ""
	});

	const [err, setErr] = useState("");

	const [loading, setLoad] = useState(false);

	const handelSubmit = e => {
		e.preventDefault();
		setLoad(true);
	};

	const handelChange = e => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	return (
		<div className="container-fluid">
			<p>Login</p>
			<form className="card card-rg" onChange={handelChange} onSubmit={handelSubmit}>
				<div className="card-body inp-reg">
					<input className="form-control" name="email" type="email" placeholder="Email" />
					<input className="form-control" name="password" type="password" placeholder="Pasword" />
					<p>
						Registrate <Link to="/registro">aqui</Link>
					</p>
					{!loading ? (
						<button type="submit" className="btn btn-primary">
							{" "}
							Send{" "}
						</button>
					) : (
						<button className="btn btn-primary" type="button" disabled>
							<span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />
							Loading...
						</button>
					)}
				</div>
			</form>
		</div>
	);
}

Login.propTypes = {
	history: PropTypes.object
};

export default Login;
