const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			post: []
		},
		actions: {
			registerUser: async body => {
				console.log("hacinedo el llamado");
				const res = await fetch("https://3000-be65198f-9c0b-48cb-acaf-1ed7f11e1b94.ws-eu03.gitpod.io/user", {
					method: "POST",
					body: JSON.stringify(body),
					headers: {
						"Content-Type": "application/json"
					}
				});

				const data = await res;
			}
		}
	};
};

export default getState;
