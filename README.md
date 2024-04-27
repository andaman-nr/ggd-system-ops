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
### view details of the generated app
```bash
npx nx show project url-shortener-mcs-fastify --web
```