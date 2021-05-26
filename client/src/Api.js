import axios from "axios";

const instance = axios.create({
  headers: {
    Accept: "application/json",
  },
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.location = "/login";
    }
    return Promise.reject(error);
  }
);

const Api = {
  auth: {
    login(email, password) {
      return instance.post("/api/auth/login", { email, password });
    },
    logout() {
      return instance.get("/api/auth/logout");
    },
    register(data) {
      return instance.post("/api/auth/register", data);
    },
  },
  passwords: {
    reset(email) {
      return instance.post("/api/passwords", { email });
    },
    get(token) {
      return instance.get(`/api/passwords/${token}`);
    },
    update(token, password) {
      return instance.patch(`/api/passwords/${token}`, { password });
    },
  },
  users: {
    me() {
      return instance.get("/api/users/me");
    },
  },
  budget: {
    index() {
      return instance.get("/api/budget");
    },
    create(data) {
      return instance.post("/api/budget", data); //M
    },
    get(id) {
      return instance.get(`/api/budget/${id}`); //M
    },
    update(id, data) {
      return instance.patch(`/api/budget/${id}`, data); //M
    },
    delete(id) {
      return instance.delete(`/api/budget/${id}`); //M
    },
  },
  expenses: {
    index() {
      return instance.get("/api/expenses");
    },
    create(data) {
      return instance.post("/api/expenses", data); //M
    },
    get(id) {
      return instance.get(`/api/expenses/${id}`); //M
    },
    update(id, data) {
      return instance.patch(`/api/expenses/${id}`, data); //M
    },
    delete(id) {
      return instance.delete(`/api/expenses/${id}`); //M
    },
  },
  categories: {
    index() {
      return instance.get("/api/categories");
    },
    create(data) {
      return instance.post("/api/categories", data); //M
    },
    get(id) {
      return instance.get(`/api/categories/${id}`); //M
    },
    update(id, data) {
      return instance.patch(`/api/categories/${id}`, data); //M
    },
    delete(id) {
      return instance.delete(`/api/categories/${id}`); //M
    },
  },
  resources: {
    index() {
      return instance.get("/api/resources");
    },
    create(data) {
      return instance.post("/api/resources", data); //M
    },
    get(id) {
      return instance.get(`/api/resources/${id}`); //M
    },
    update(id, data) {
      return instance.patch(`/api/resources/${id}`, data); //M
    },
    delete(id) {
      return instance.delete(`/api/resources/${id}`); //M
    },
  },
};

export default Api;
