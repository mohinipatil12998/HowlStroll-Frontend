import axiosInstance from "./axiosInstance"

export const register = async (user) => {
    try {
        const register = await axiosInstance.post("/user", {
            ...user
        });
        return register;
    } catch (error) {
        console.error("Error during registration:", error);
        throw error; 
    }
}


export const login = async (user) => {
    try {
        const login = await axiosInstance.get("/user", {
            ...user
        });
        return login.data;
    } catch (error) {
        console.error("Error during registration:", error);
        throw error; 
    }
}

