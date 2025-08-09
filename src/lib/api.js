import axiosInstance from "./axiosInstance"

export const register = async (user) => {
    try {
        const register = await axiosInstance.post("/auth/register", {
            ...user
        });
        return register;
    } catch (error) {
        console.error("Error during registration:", error);
        throw error; 
    }
}


export const login = async (user) => {
    console.log('user', user);
    
    try {
        const login = await axiosInstance.post("/auth/login", {
            ...user
        });
        return login.data;
    } catch (error) {
        console.error("Error during registration:", error);
        throw error; 
    }
}

