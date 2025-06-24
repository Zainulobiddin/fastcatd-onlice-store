import axios from "axios";
import { create } from "zustand";
const APIProducs = 'http://37.27.29.18:8002/Product/get-products'
export const useProducts = create((set) => ({
    products: [],
    getProducts: async () => {
        try {
            const {data} = await axios.get(APIProducs)            
            set({products: data.data})
        } catch (error) {
            console.error(error);
        }
    }
}))