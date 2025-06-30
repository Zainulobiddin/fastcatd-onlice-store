import { create } from 'zustand';
import { axiosReguest } from '@/utils/axios';

const API = "http://37.27.29.18:8002/Category/get-categories"

export const useGetCategories = create((set) => ({
  categories: [],
  subCategory: [],
  productsByID: [],
  
  getCategories: async () => {
    try {
      const { data } = await axiosReguest.get(`/Category/get-categories`);
      set({ categories: data.data });
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  },


  getCategoryByID: async (id) => {
    try {
        const {data} = await axiosReguest.get(`/Product/get-products?CategoryId=${id}`)      
        set(() => ({productsByID: data?.data.products}))
    } catch (error) {
      console.error(error);
    }
  },

  getSubCategory: async (id) => {
    try {
        const  {data} = await axiosReguest.get(`/Category/get-category-by-id?id=${id}`)      
        set(() => ({subCategory: data?.data.subCategories}))
    } catch (error) {
      console.error(error);
    }
  },

  subCategoryByID: async (id) => {
    try {
      const {data} = await axiosReguest.get(`/Product/get-products?SubcategoryId=${id}`)
      set(() => ({productsByID: data?.data?.products ?? []}))
    } catch (error) {
      console.error(error);
      // set(() => ({productsByID: []}))
    }
  }




}));
