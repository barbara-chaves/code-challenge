import qs from "qs";
import axios from "axios";

const http = axios.create({
  baseURL: "https://raw.githubusercontent.com/Vizzuality/front-end-code-challenge/",
  paramsSerializer(params) {
    return qs.stringify(params, {
      encode: false,
    });
  },
});

export default http;
