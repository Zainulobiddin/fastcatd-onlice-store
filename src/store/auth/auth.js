import { axiosStandart } from "@/utils/axios";
import { saveToken } from "@/utils/other";
import { create } from "zustand";

export const useAuth = create(() => ({
  postRegister: async (newUser) => {
    try {
      const response = await axiosStandart.post(`/Account/register`, newUser);
      localStorage.setItem(
        "user",
        JSON.stringify({
          userName: newUser.userName,
          phoneNumber: newUser.phoneNumber,
          email: newUser.email,
          password: newUser.password,
          confirmPassword: newUser.confirmPassword,
        })
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  },

  postLogIn: async (newUser) => {
    console.log(newUser);
    try {
      const data = await axiosStandart.post("/Account/login", newUser);
      saveToken(data.data.data);
      console.log(data.data.errors);
      return data;
    } catch (error) {
      console.error(error.response.data.errors[0]);
      return error.response.data.errors[0];
    }
  },
}));
