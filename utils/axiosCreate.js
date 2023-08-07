import axios from "axios";

export const intense = axios.create({
  baseURL: process.env.BASE_URL || 'http://127.0.0.1:1337',
  headers: {
    Authorization: `Bearer 2a6ba8cc28250ae703187702367b00bb9f010c81f97cdbd71990a3606d8d38d578a5f9eb0f393064767ff883d4d53adc680c9f22fce77bc8e86dc54839e54afb4151280ac9140880272f748d34ee0f8fa0d0807c48e2d07cc2a083a21bc0a782953f85ea0e5030bdb22287f03bf1e480aae2209fe1678a6a89a0e6315823b90b`
  }
})