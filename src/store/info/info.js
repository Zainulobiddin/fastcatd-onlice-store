import { axiosReguest } from "@/utils/axios";
import { create } from "zustand";


export const useInfo = create((set) => ({
    infoProduct: [],
    getProductByID: async (id) => {
    try {
       const {data} =  await axiosReguest.get(`Product/get-product-by-id?id=${id}`) 
        set({infoProduct: data.data})     
    } catch (error) {
      console.error(error);
    }
  }
}))