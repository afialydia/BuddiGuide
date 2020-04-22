import axios from 'axios';

 const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  // return an instance of axios
  return axios.create({
    baseURL: '/api/',
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;