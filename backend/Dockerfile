#getting base image ubuntu

FROM node:16.13.1
WORKDIR .
EXPOSE 8000
COPY . .
RUN npm install
CMD ["npm","start"]