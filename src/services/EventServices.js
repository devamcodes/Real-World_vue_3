import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/devamcodes/Real-World_vue_3",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "content-Type": "application/json",
  },
});

export default {
  getEvents() {
    return apiClient.get("/events");
  },
  getEvent(id) {
    return apiClient.get("/events/" + id);
  },
};
