import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
      const originalRequest = error.config;
      if (error.response?.status === 401 && !originalRequest._retry) {
          console.warn("⏳ Токен просрочен. Пытаемся обновить...");
          originalRequest._retry = true;
          try {
              await refreshToken();
              originalRequest.headers.Authorization = `Bearer ${sessionStorage.getItem("access_token")}`;
              return api(originalRequest);
          } catch (refreshError) {
              console.error("❌ Ошибка при обновлении токена:", refreshError.response?.data || refreshError.message);
              throw refreshError;
          }
      }
      return Promise.reject(error);
  }
);

export const register = async (username, password) => {
  return api.post("/register", {username, password}, {headers: {"Content-Type": "application/json"}});
};

// 📌 Логин
export const auth = async (username, password) => {
  console.log("📨 Отправляем запрос на сервер:", {username, password});
  console.log(api)
  try {
      const response = await api.post("/login",
          {username, password},
          {headers: {"Content-Type": "application/json"}}
      );
      console.log("✅ Ответ сервера:", response.data);
      sessionStorage.setItem("access_token", response.data.access_token);
      return response.data;
  } catch (error) {
      console.error("❌ Ошибка авторизации:", error.response?.data || error.message);
      throw error;
  }
};

// 📌 Обновление токена
export const refreshToken = async () => {
  try {
      const response = await api.post("/refresh");
      sessionStorage.setItem("access_token", response.data.access_token);
      console.log("🔄 Токен успешно обновлён.");
      return response.data;
  } catch (error) {
      console.error("❌ Ошибка при обновлении токена:", error.response?.data || error.message);
      throw error;
  }
};

// 📌 Выход (Logout)
export const logout = async () => {
  try {
      await api.post("/logout");
      sessionStorage.removeItem("access_token");
      console.log("🚪 Выход выполнен успешно.");
  } catch (error) {
      console.error("❌ Ошибка при выходе:", error.response?.data || error.message);
  }
};

// 📌 Доступ к защищённому эндпоинту
export const getProtectedData = async () => {
  const token = sessionStorage.getItem("access_token");
  if (!token) throw new Error("No access token found");

  return api.get("/protected", {
      headers: {Authorization: `Bearer ${token}`},
  });
};

// 📌 Проверка аутентификации
export const isAuthenticated = () => {
  const token = sessionStorage.getItem("access_token");
  return !!token;
};

// 📌 Получить список всех пользователей
export const getAllUsers = async () => {
  const token = sessionStorage.getItem("access_token");

  return api.get("/users/", {
    headers: {Authorization: `Bearer ${token}`},
});
};

// 📌 Получить список туров
export const getAllTours = async () => {
  return api.get("/tours/");
};

// 📌 Создать новый тур
export const createTour = async (tourData) => {
  return api.post("/tours/", tourData);
};

export const getTourById = async (id) => {
  return api.get(`/tours/${id}`);
}

// 📌 Обновить тур
export const updateTour = async (id, tourData) => {
  return api.put(`/tours/${id}`, tourData);
};

// 📌 Удалить тур
export const deleteTour = async (id) => {
  return api.delete(`/tours/${id}`);
};

export const updateTourInfo = async (id, tourData) => {
  return api.put(`/tours/${id}`, tourData);
};

// 📌 Получение списка всех заявок по Пику Ленина
export const getAllApplications = async () => {
  return api.get("/applications/");
};

// 📌 Получение заявки по ID
export const getApplicationById = async (id) => {
  return api.get(`/applications/${id}`);
};

export const getTourInfo = async (id) => {
  return api.get(`/tours/${id}`)
}

// 📌 Создание новой заявки
export const createApplication = async (applicationData) => {
  return api.post("/applications/", applicationData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// 📌 Удаление заявки
export const deleteApplication = async (id) => {
  return api.delete(`/applications/${id}`);
};
