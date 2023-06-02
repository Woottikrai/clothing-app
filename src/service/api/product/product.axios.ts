import endpoint, { endpoints } from "../../api.endpoint";
import axios, { throwResponse } from "../../../config/axios/axios.config";
import { IProduct } from "../../../interface/IProduct";
// import {
//   IColor,
//   IProduct,
//   ISize,
//   IProducttype,
//   IStock,
//   ISuitability,
// } from "./IProduct";
const statusSuccess = [200, 201];

export async function getAllColor() {
  const res = await axios.get(`${endpoints.product.getColorAll}`);
  return !statusSuccess.includes(res.status) ? throwResponse(res) : res.data;
}

export async function getProducttypeAll() {
  const res = await axios.get(`${endpoints.product.getProducttypeAll}`);
  return !statusSuccess.includes(res.status) ? throwResponse(res) : res.data;
}

export async function getSizeAll() {
  const res = await axios.get(`${endpoints.product.getSizeAll}`);
  return !statusSuccess.includes(res.status) ? throwResponse(res) : res.data;
}

export async function getSuitabilityAll() {
  const res = await axios.get(`${endpoints.product.getSuitabilityAll}`);
  return !statusSuccess.includes(res.status) ? throwResponse(res) : res.data;
}

export async function addProduct(params?: IProduct) {
  const res = await axios.post(`${endpoints.product.addProduct}`, params);
  return !statusSuccess.includes(res.status) ? throwResponse(res) : res.data;
}

export const productApi = {
  getAllColor,
  getProducttypeAll,
  getSizeAll,
  getSuitabilityAll,
  addProduct,
};
