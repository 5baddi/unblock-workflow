import axios from "axios";
import { PUBLIC_URL } from "../../src/settings";
import {useAuthUser} from "@frontegg/react";

const API = axios.create({
  baseURL: `${PUBLIC_URL}/api/`,
});

export default API;