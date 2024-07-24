# Etapa 1: Construcción
FROM node:14 AS build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias necesarias para construir la aplicación
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Construye la aplicación de React para producción
RUN npm run build

# Etapa 2: Servir con Nginx
FROM nginx:alpine

# Copia los archivos construidos desde la fase de construcción
COPY --from=build /app/build /usr/share/nginx/html

# Copia el archivo de configuración de Nginx al directorio de configuración de sitios
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expon el puerto en el que el servidor estará escuchando
EXPOSE 80

# Comando para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]