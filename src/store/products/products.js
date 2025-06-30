import { axiosReguest, axiosStandart } from "@/utils/axios";
import { create } from "zustand";
let wishlistProduct = localStorage.getItem("wishlistProduct");
if (wishlistProduct) {
  wishlistProduct = JSON.parse(localStorage.getItem("wishlistProduct"));
} else {
  localStorage.setItem("wishlistProduct", []);
  wishlistProduct = [];
}

export const useProducts = create((set, get) => ({
  countProducts: 0,
  products: [],
  brands: [],
  search: '',
  setSearch: ((state) => ({search: state.search})),


  getProducts: async () => {
    try {
      const { data } = await axiosStandart.get("/Product/get-products");
      set({ products: data.data });
    } catch (error) {
      console.error(error);
    }
  },

 
  priceRange: async (minPrice, maxPrice) => {
    try {
     const {data} = await axiosReguest.get(`/Product/get-products/?MinPrice=${minPrice}&MaxPrice=${maxPrice}`)
     await get().getProducts()
     set(() => ({products: data?.data}))
    } catch (error) {
      console.error(error);
    }
  },

  categotyByID: async (id) => {
    try {
     const {data} = await axiosReguest.get(`/Product/get-products?CategoryId=${id}`)      
      set(() => ({products: data?.data}))
    } catch (error) {
      console.error(error);
    }
  },

  getBrand: async () => {
    try {
        const {data} = await axiosReguest.get(`/Brand/get-brands`)      
        set(() => ({brands: data?.data}))
    } catch (error) {
      console.error(error);
    }
  },

  getBrandByID: async (id) => {
    try {
        const {data} = await axiosReguest.get(`/Product/get-products?BrandId=${id}`)      
        set(() => ({products: data?.data}))
    } catch (error) {
      console.error(error);
    }
    JSON.stringify
  },

  searchProductName: async (productName) => {
      try {
          const {data} = await axiosReguest.get(`/Product/get-products?ProductName=${productName}`)        
          set(() => ({products: data?.data}))
      } catch (error) {
        console.error(error);
      }
  }






}));
