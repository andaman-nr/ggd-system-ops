# ggd-system

# url-shortener
## setup nx workspace
### create new nx workspace
```bash
npx create-nx-workspace@latest --pm pnpm
```
### add @nx/node to workspace
```bash
npx nx add @nx/node
```
### generate node app
```bash
npx nx g @nx/node:application url-shortener-mcs-fastify --directory apps/url-shortener/mcs-fastify
```
### generate node lib
```bash
npx nx g @nx/node:library url-shortener-core --directory libs/url-shortener-core
npx nx g @nx/node:library url-shortener-service --directory libs/url-shortener-service
npx nx g @nx/node:library store-prisma --directory libs/store-prisma
```
### view details of the generated app
```bash
npx nx show project url-shortener-mcs-fastify --web
```
### add dependencies
```bash
pnpm add @fastify/cors @fastify/swagger @fastify/swagger-ui
```