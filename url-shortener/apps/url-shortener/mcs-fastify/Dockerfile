FROM docker.io/node:20-alpine

ENV HOST=0.0.0.0
ENV PORT=3000

WORKDIR /app

RUN addgroup --system url-shortener-mcs-fastify && \
    adduser --system -G url-shortener-mcs-fastify url-shortener-mcs-fastify

COPY dist/apps/url-shortener/mcs-fastify url-shortener-mcs-fastify
RUN chown -R url-shortener-mcs-fastify:url-shortener-mcs-fastify .

CMD [ "node", "url-shortener-mcs-fastify" ]
