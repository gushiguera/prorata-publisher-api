# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7

ARG NODE_VERSION=20.16.0
FROM node:${NODE_VERSION}-alpine

ENV PORT 8080
ENV HOST 0.0.0.0

COPY package.json package.json
COPY prisma ./prisma/ 
 
RUN yarn install

COPY . .

CMD yarn server:dev
