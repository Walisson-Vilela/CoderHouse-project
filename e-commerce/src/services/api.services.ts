import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
console.log(BASE_URL);

export async function get(url) {
  return axios.get(BASE_URL + url);
}

export async function post(url, data) {
  return axios.post(url, data, {
    headers: {
      Token: "walisson.vilela@hotmail.com",
    },
  });
}

export async function put(url, data) {
  return axios.put(url, data);
}

export async function deleteData(url) {
  return axios.delete(url);
}

export async function patch(url, data) {
    return axios.patch(url, data);
  }
  
