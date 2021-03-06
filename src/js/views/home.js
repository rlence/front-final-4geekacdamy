import React, { useState, useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Home(props) {
	const { store, actions } = useContext(Context);

	const [state, setState] = useState({
		email: "",
		password: ""
	});

	const [loading, setLoad] = useState(false);
	const [err, setErr] = useState("");

	const handelSubmit = e => {
		e.preventDefault();
		setLoad(true);
		actions
			.registerUser(state)
			.then(ok => props.history.push("/"))
			.catch(err => {
				setErr(err);
				setLoad(false);
			});
	};

	const handelChange = e => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	return (
		<div className="container-fluid">
			<p>Registro</p>
			<form className="card card-rg" onChange={handelChange} onSubmit={handelSubmit}>
				<div className="card-body inp-reg">
					<input className="form-control" name="email" type="email" placeholder="Email" />
					<input className="form-control" name="password" type="password" placeholder="Pasword" />
					<p>
						Ya tienen cuenta, inicia sessión <Link to="/">aqui</Link>
					</p>
					{err != "" ? <p>{err}</p> : null}
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

Home.propTypes = {
	history: PropTypes.object
};

export default Home;
