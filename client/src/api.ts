import axios from "axios";
import { PUBLIC_URL } from "../../src/settings";

const API = axios.create({
  baseURL: `${PUBLIC_URL}/api/`,
});

export default API;