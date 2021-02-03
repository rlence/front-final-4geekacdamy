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
			loginUser: async body => {},

			sendEmail: () => {
				console.log("enviando email");
				fetch("https://3000-a847b222-f90e-450e-8d17-f00f25f120eb.ws-eu03.gitpod.io/" + "test/token", {
					method: "GET",
					headers: {
						Authorization:
							" Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6ImxlbmNlcmljYXJkb0Bob3RtYWlsLmNvbSJ9LCJleHAiOjE2MTIzNTA1MTd9.mXuqjXeEcnxaUtXLICPr4JiG3eJoN0r15cB2bGZy2oM"
					}
				})
					.then(res => res.json())
					.then(data => console.log(data))
					.catch(err => console.log(err));
			}
		}
	};
};

export default getState;
