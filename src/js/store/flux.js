const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			post: []
		},
		actions: {
			registerUser: async body => {
				const url = "https://3000-be65198f-9c0b-48cb-acaf-1ed7f11e1b94.ws-eu03.gitpod.io/";

				const res = await fetch(url + "user/register", {
					method: "POST",
					body: JSON.stringify(body),
					headers: {
						"Content-Type": "application/json"
					}
				});
				const data = await res.json();
				if (data.msg == "User exist") {
					return Promise.reject(data.msg);
				}
				return Promise.resolve(true);
			},
			loginUser: async body => {}
		}
	};
};

export default getState;
