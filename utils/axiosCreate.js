import axios from "axios";
import { TOKEN_API } from "./urls";

export const intense = axios.create({
  baseURL: process.env.BASE_URL || 'http://127.0.0.1:1337',
  headers: {
    Authorization: `Bearer 189bdd2a7090dda3da667887c390d0a6b6a49d1df2cea9da9b47d3a3ca8c25486143e49952469d2963cd1f0bf445a27a1d10853bcd11321cb4b876a9435f6ea8dbea2e0d99252f3b97bc2a8231d94693146c2ac17ff2fb5d50699e8e7145e5b33f222e3c2539601f05524c07261f42f30f19fe0970094a0f77358a667dac79ca`
  }
})