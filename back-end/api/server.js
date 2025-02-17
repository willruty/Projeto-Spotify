// Requisições: POST / GET / PUT / DELETE
// CRUD - CREATE / READ / UPDATE / DELETE
// Middleware

import express from 'express';
import cors from 'cors';
import { db } from './connect.js';

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/', (request, response) => {
    response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs' ");
})

app.get('/artists', async (request, response) => {
    response.send(await db.collection('artists').find({}).toArray());
})

app.get('/songs', async (request, response) => {
    response.send(await db.collection('songs').find({}).toArray());
})

app.listen(PORT, () => {
    console.log(`Servidor está usando a porta ${PORT}`);
});
