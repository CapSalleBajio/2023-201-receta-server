import bodyParser from 'body-parser';
import { config } from 'dotenv';
import express from 'express';

const app = express();
const port = 3000;

/**
 * GET -> /hola
 * POST -> /hola
 */
app.get('/hola/mundo', (req, res) => {
    res.send('Hola desde mi servidor con GET');
});

app.post('/hola', (req, res) => {
    res.send('Hola desde mi servidor con POST');
});

app.patch('/hola', (req, res) => {
    res.send('Hola desde mi servidor con PATCH');
});

app.delete('/hola', (req, res) => {
    res.send('Hola desde mi servidor con DELETE');
});



app.listen(port, () => {
    console.log('Servidor ejecutandose en el puerto', port);
    console.log('Todo estará bien');
});