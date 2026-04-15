import axios from "axios";

export default axios.create({
  baseURL: "http://212.128.154.26:3000/api/", // Alesandro IP
  headers: {
    "Content-type": "application/json"
  }
});
