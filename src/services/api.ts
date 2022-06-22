import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://api-cotacao-b3.labdo.it/api/',
});
