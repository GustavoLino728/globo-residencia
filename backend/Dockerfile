FROM node:20-alpine

RUN apk add --no-cache \
    ffmpeg \
    python3 \
    make \
    g++

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

RUN mkdir -p uploads tmp_audio

EXPOSE 8000

CMD ["node", "dist/server.js"]