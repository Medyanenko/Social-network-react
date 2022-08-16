import axios from "axios";

const istance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY" : "927b759c-26f4-4bf0-a411-cffbde530e8b"
      }
})

export const usersAPI = {
    getUsers(currentPage, pageSize){
        return istance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
       },
    unfollow(id){
        return istance.delete(`follow/${id}`)
          .then(response => response.data);
    },
    follow(id){
        return istance.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {})
          .then(response => response.data);
    },
    getProfile(userId){
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId){
        return istance.get(`profile/` + userId)
    },
    getStatus(userId){
        return istance.get(`profile/status/` + userId)
    },
    updateStatus(status){
        return istance.put(`profile/status`, {status:status})
    },
    savePhoto(photoFile){
        const formData = new FormData();
        formData.append("image", photoFile);
        return istance.put(`profile/photo`, formData, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile){
        return istance.put(`profile`, profile)
    }
}


export const authAPI = {
    me(){
        return istance.get(`auth/me`).then(response => response.data);
    },
    login(email, password, rememberMe = false){
        return istance.post(`auth/login`, {email, password, rememberMe}).then(response => response.data);
    },
    logout(){
        return istance.delete(`auth/login`).then(response => response.data);
    },
}




