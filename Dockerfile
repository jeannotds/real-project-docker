# =====================
# Etape 1 : Dependencies
# =====================

FROM node:20-alpine AS dependencies

WORKDIR /app

COPY package*.json ./

# Installation uniquement des dépendances de production
RUN npm ci --omit=dev 

# =====================
# Etape 2 : Production
# =====================

FROM node:20-alpine AS production

WORKDIR /app

ENV NODE_ENV=production

# # Copier uniquement node_modules
# Copier uniquement les dépendances de production
COPY --from=dependencies /app/node_modules ./node_modules

# Copier le code de l'application
COPY . .

EXPOSE 3004

CMD [ "node", "index.js" ]
# CMD [ "npm", "start" ]
