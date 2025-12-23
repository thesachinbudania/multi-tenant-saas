import axios from 'axios';
import { useAuthStore } from '../store/useAuthStore';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        const token = useAuthStore.getState().accessToken;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export const authApi = {
    signUp: async (data: any) => {
        return api.post('/signUp', data);
    },
    googleSignUp: async (token: string) => {
        console.log(token, 'this is the token')
        return api.post('/signUp/google', { token });
    },
    login: async (data: any) => {
        return api.post('/login', data);
    },
    googleLogin: async (token: string) => {
        return api.post('/login/google', { token });
    },
    verifyOtp: async (data: { email: string; otp: number }) => {
        return api.post('/otp/verify', data);
    },
    resendOtp: async (email: string) => {
        return api.post('/otp/resend', { email });
    },
};

export default api;
