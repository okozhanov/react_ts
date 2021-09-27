
import axios from "axios"
import {IUser} from "../interfaces/users.interfaces";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
});

export const getUsers = () => {
    return axiosInstance.get<IUser[]>('/users')
}