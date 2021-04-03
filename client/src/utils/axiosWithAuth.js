import axios from "axios";

const axiosWithAuth = () => {
	const token = localStorage.getItem("authenticate");
	// return an instance of axios
	return axios.create({
		baseURL: "/api/",
		headers: {
			authenticate: token,
		},
	});
};

export default axiosWithAuth;
