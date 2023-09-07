import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const Request = {  
  post: (url: string, body: any) => {
    return axios
      .post(`${BASE_URL}/${url}`, body)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log("Error ::", error);
      });
  }
}
