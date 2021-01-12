import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./views/home";
import Login from "./views/Login.jsx";
import CreatePost from "./views/CreatePost.jsx";
import Perfil from "./views/Perfil.jsx";

import injectContext from "./store/appContext";

import NavBar from "./component/navbar";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const path = window.location.pathname;

	console.log(path);

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					{path == "/" || path == "/registro" ? null : <NavBar />}
					<Switch>
						<Route exact path="/" component={Login} />
						<Route exact path="/registro" component={Home} />
						<Route exact path="/create/post" component={CreatePost} />
						<Route exact path="/perfil" component={Perfil} />
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
