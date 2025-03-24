# Стадия сборки Vue-приложения
FROM node:22 as build-stage
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build

# Стадия деплоя на Nginx
FROM nginx:alpine as production-stage

# Копируем собранные файлы в стандартную директорию Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Копируем кастомный конфиг Nginx, если он есть
COPY nginx.conf /etc/nginx/nginx.conf

# Создаем директорию для логов
RUN mkdir -p /var/log/nginx

# Открываем порты
EXPOSE 80
EXPOSE 443

# Запускаем Nginx в режиме демона
CMD ["nginx", "-g", "daemon off;"]
