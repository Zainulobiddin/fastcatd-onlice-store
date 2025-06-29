import { axiosReguest } from "@/utils/axios";
import { API } from "@/utils/config";
import axios from "axios";
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

  deleteProductFromCart: async (id) => {
    try {
      await axiosReguest.delete(
        `${API}/Cart/delete-product-from-cart?id=${id}`,
        {}
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
