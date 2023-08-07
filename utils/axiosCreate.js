import axios from "axios";

export const intense = axios.create({
  baseURL: process.env.BASE_URL || 'http://127.0.0.1:1337',
  headers: {
    Authorization: `Bearer TOKEN`
  }
})