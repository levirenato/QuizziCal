FROM node:21.4-alpine

RUN mkdir /project
WORKDIR /project

RUN npm install -g @angular/cli@13

COPY . .
RUN npm install

CMD ["ng", "serve"]