import axios from "axios";

const defaultURL =
  "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json";
const baseUrl = axios.create({
  baseURL: defaultURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default baseUrl;
