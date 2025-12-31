// Exemplo de user services

import api from './api';

export interface User {
    id: number;
    name: string;
    email: string;
}

export const userService = {
    getUsers: async (): Promise<User[]> => {  //obter usuarios
        const response = await api.get<User[]>('/users');
        return response.data;
    },

    getUserById: async (id: number): Promise<User> => {  //obter usuario por id
        const response = await api.get<User>(`/users/${id}`);
        return response.data;
    },

    createUser: async (user: Omit<User, 'id'>): Promise<User> => {  //criar usuario
        const response = await api.post<User>('/users', user);
        return response.data;
    },
};
