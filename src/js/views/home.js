import React, { useState, useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

function Home(props) {
	const { store, actions } = useContext(Context);

	const [state, setState] = useState({
		email: "",
		password: ""
	});

	const [loading, setLoad] = useState(false);

	const handelSubmit = e => {
		e.preventDefault();
		setLoad(true);
		actions.registerUser(state);
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

export default Home;
