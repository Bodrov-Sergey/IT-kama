import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "66ac6b9a-22ef-4bd7-aad2-324b64bf3872"},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        });
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`);
    },
    followUser(id) {
        return instance.post(`follow/${id}`);
    },
    getUser(id) {
        return instance.get(`profile/${id}`);
    }
}

export const profileAPI = {
    getUser(id) {
        return instance.get(`profile/${id}`);
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`)
    },
    updateStatus(status){
        debugger
        return instance.put(`profile/status`, {status})
    },
    uploadAvatar(ava){
        const formData= new FormData();
        formData.append("image", ava)
        return instance.put('profile/photo', formData, {headers: {'Content-Type': 'multipart/form-data'}})
    },
    updateContactInfo(profile){
        return instance.put(`profile`, profile)
    }

}
export const authAPI = {
    authMe() {
        return instance.get("auth/me");
    },
    getMe(id) {
        return instance.get(`profile/${id}`)
    },
    login(email, password, rememberMe= false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }

}


