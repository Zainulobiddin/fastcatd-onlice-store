import { create } from 'zustand';
import axios from 'axios';

const API = "http://37.27.29.18:8002/Category/get-categories"

export const useGetCategories = create((set) => ({
  categories: [],
  getCategories: async () => {
    try {
      const { data } = await axios.get(API);
      set({ categories: data.data });
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }
}));
