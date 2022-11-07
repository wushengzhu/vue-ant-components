import { get, post } from "./http"

export const saveUser = (data) =>
    post('/api/Train/User/Save', data);

export const getUserList = (data) =>
    post('/api/Train/User/GetList', data);


export const getUserById = (params) =>
    get('/api/Train/User/GetById', { userId: params });

export const deleteUser = (params) =>
    get('/api/Train/User/Delete', { userId: params });
