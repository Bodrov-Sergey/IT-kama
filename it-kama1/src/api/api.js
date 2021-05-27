import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "66ac6b9a-22ef-4bd7-aad2-324b64bf3872"},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})



export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {return response.data;});
    },
    unfollowUser(id){
        return instance.delete(`follow/${id}`);
    },
    followUser(id){
        return instance.post(`follow/${id}`);
    },
    getUser(id){
        return instance.get(`profile/${id}`);
    },
    authMe(){
        return instance.get("auth/me");
    }
}
