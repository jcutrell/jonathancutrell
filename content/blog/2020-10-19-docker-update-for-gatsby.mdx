---
title: 'Using Docker for Gatsby local development'
date: 2020-10-19T12:00:00+04:00
author: Jonathan Cutrell
templateKey: blog-post
---

After fighting a bit with my work-issued computer not wanting to build my Gatsby site, I finally decided to bite the bullet and
build out a Docker image.

For those who are interested, image transformation was somehow tripping the malware blocker, causing a `SIGKILL`.

After trying (and failing) to fix this, I finally decided to fix the problem with a more permanent solution.

However, the "official" Docker image for Gatsby is a bit behind and hasn't been updated.

Here's the Dockerfile I'm using (named `Dockerfile.dev`).

```docker
FROM node:alpine

# Also exposing VSCode debug ports
EXPOSE 8000 9929 9230

RUN \
  apk add --no-cache python3 make g++ && \
  apk add vips-dev fftw-dev --update-cache \
  --repository http://dl-3.alpinelinux.org/alpine/edge/community \
  --repository http://dl-3.alpinelinux.org/alpine/edge/main \
 && rm -fR /var/cache/apk/*

RUN apk add automake autoconf libtool nasm

RUN npm install -g gatsby-cli

WORKDIR /app
COPY ./package.json .
RUN yarn install && yarn cache clean
COPY . .
CMD ["yarn", "develop", "-H", "0.0.0.0" ]
```

And here's the `docker-compose.yml`:

```yaml
version: '3'
services:
  web:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "8000:8000"
      - "9929:9929"
      - "9230:9230"
    volumes:
      - /app/node_modules
      - .:/app
    environment:
      - NODE_ENV=development
      - GATSBY_WEBPACK_PUBLICPATH=/
```


This pulls almost directly from Daniel Stout's setup, which I found [here](https://dev.to/stoutlabs/my-docker-setup-for-gatsbyjs-and-nextjs-5gao).
(Turns out Daniel is also somehwere in TN.)

Running the image:

```
docker-compose up --build
```

Note, I had to go through some fiddly things that required installing the automake stuff. You may not need that line, but I did.


I plan to keep this `Dockerfile` updated as I continue to invest in this site, which is [open source](https://github.com/jcutrell/jonathancutrell).
