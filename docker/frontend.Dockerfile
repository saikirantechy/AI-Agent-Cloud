FROM node:20-alpine

WORKDIR /app

COPY frontend/package.json ./package.json
RUN npm install

COPY frontend ./frontend

ENV NODE_ENV=production
WORKDIR /app/frontend

RUN npm run build
CMD ["npm", "run", "start"]
