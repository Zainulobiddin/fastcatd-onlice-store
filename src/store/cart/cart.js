import { axiosReguest } from "@/utils/axios";
import { API } from "@/utils/config";
import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

export const useCart = create((set, get) => ({
  cartProducts: [],
  quantity: 0,

  getCart: async () => {
    try {
      const { data } = await axiosReguest.get(
        `/Cart/get-products-from-cart`,
        {}
      );
      console.log(data);
      set({ cartProducts: data.data });
    } catch (error) {
      console.error(error);
    }
  },

   setAddToCart: async (id) => {
      try {
       const {data} =  await axiosReguest.post(`/Cart/add-product-to-cart?id=${id}`);
        set((state) => ({ countProducts: state.countProducts + 1 }));
        await get().getCart();
        toast.success(`${data.data}`)
      } catch (error) {
        toast.error(`${error.response.data.errors[0]}`)
        console.error(error);
      }
    },
  

  deleteProductFromCart: async (id) => {
    try {
      await axiosReguest.delete(
        `/Cart/delete-product-from-cart?id=${id}`,
      );
      get().getCart();
    } catch (error) {
      console.error(error);
    }
  },

  clearCart: async () => {
    const token = localStorage.getItem("token");

    try {
      await axios.delete(`${API}/Cart/clear-cart`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      get().getCart();
    } catch (error) {
      console.error(error);
    }
  },

  increment: async (id) => {
    try {
      await axiosReguest.put(`Cart/increase-product-in-cart?id=${id}`);
      set((state) => ({ quantity: state.quantity + 1 }));
      get().getCart();
    } catch (error) {
      console.error(error);
    }
  },

  decrement: async (id) => {
    try {
      await axiosReguest.put(`Cart/reduce-product-in-cart?id=${id}`);
      set((state) => ({quantity: state.quantity - 1}))
      get().getCart();
    } catch (error) {
      console.error(error);
    }
  },
}));
