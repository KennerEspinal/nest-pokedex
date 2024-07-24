<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejectutar en desarrollo

1. Clonar el repositorio
2. Ejecutar

```
yarn install
```

3. Tener Nest CLI instalado

```
npm i -g @nest/cli
```

4. Levantar base de datos

```
docker compose up -d
```

5. Clonar el archivo `.env.template` y renombrar a `.env`

6. Llenar las variables de entorno en el `.env`

7. Ejecutar la aplicación en dev:

```
yarn start:dev
```

8. Reconstruir o crear DB con la semilla

```
http:localhost:3000/api/seed
```

## Stack

- Nest
- MongoDB
