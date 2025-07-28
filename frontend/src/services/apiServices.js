import axios from "axios";

const api = axios.create({
	baseURL: "https://localhost:8000/auth",
});

export const googleAuth = (code) => api.get(`/google?code=${code}`);
