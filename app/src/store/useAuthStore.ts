import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
    first_name?: string;
    last_name?: string;
    email: string;
}

interface AuthState {
    accessToken: string | null;
    refreshToken: string | null;
    user: User | null;
    isLoading: boolean;
    setAuth: (accessToken: string, refreshToken: string, user: User) => void;
    logout: () => void;
    setLoading: (isLoading: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            accessToken: null,
            refreshToken: null,
            user: null,
            isLoading: false,
            setAuth: (accessToken, refreshToken, user) => set({ accessToken, refreshToken, user }),
            logout: () => set({ accessToken: null, refreshToken: null, user: null }),
            setLoading: (isLoading) => set({ isLoading }),
        }),
        {
            name: 'auth-storage',
            partialize: (state) => ({ accessToken: state.accessToken, refreshToken: state.refreshToken, user: state.user }),
        }
    )
);
