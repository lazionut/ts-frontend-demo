import { AxiosError } from "axios";
import { axiosInstance } from "../api/instance";
const loginService = {
    async login(email: string, password: string): Promise<any> {
        try{
            const resp = await axiosInstance.post("http://localhost:3000/api/login", { email, password });
            localStorage.setItem("token",resp.request);
            console.log(resp.request);
            return resp.data;
        }catch{
            return "error";
        }
        
        
    },
    logout() {
        localStorage.removeItem("token");
    }
}


export default loginService
