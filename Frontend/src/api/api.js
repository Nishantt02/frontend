// import axios from "axios";

// const api = axios.create({
//     baseURL: import.meta.env.VITE_API_URL,
//     headers: {
//         "Content-Type": "application/json",
//         "authentication-token": import.meta.env.VITE_AUTH_TOKEN,
//     },
// });

// export default api;


import axios from "axios";

const api = axios.create({
  baseURL: "https://karix-application.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;