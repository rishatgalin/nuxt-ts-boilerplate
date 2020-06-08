import axios from 'axios';

export const instance = axios.create({
	baseURL: '',
	responseType: 'json',
	headers: {
		'Access-Content-Allow-Origin': '*',
		'Content-Type': 'application/json',
		Accept: 'application/json'
	}
});

instance.interceptors.response.use(
	(res) => { return res; },
	(error) => {
		return Promise.reject(error.response);
	} 
)

export default instance;