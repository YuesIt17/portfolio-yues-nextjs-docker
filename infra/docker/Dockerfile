# build app
FROM node:20.16-alpine as build
WORKDIR /app
COPY . /app
RUN yarn
RUN echo "Build is ok! Go to next layer!"
RUN yarn deploy

# build server
FROM nginx:alpine as normal
# copy the build folder from react to the root of nginx
COPY --from=build /app/build /usr/share/nginx/html
COPY infra/docker/conf.d /etc/nginx/nginx.conf
RUN echo "Nginx is ok!"
# expose port 3000 to the outer world
EXPOSE 3000
# start nginx
CMD ["nginx", "-g", "daemon off;"]
