const express = require('express');
const { getJoyas, getJoyasConFiltros } = require('./queries');

const app = express();
const port = 3000;

// Middleware para generar informes
app.use((req, res, next) => {
    console.log(`Consulta realizada a: ${req.path} con parámetros: ${JSON.stringify(req.query)}`);
    next();
});

// Ruta GET para obtener joyas con limitación, paginación y orden
app.get('/joyas', async (req, res) => {
    try {
        const joyas = await getJoyas(req.query);
        const hateoasJoyas = joyas.map(joya => ({
            ...joya,
            href: `http://localhost:3000/joyas/${joya.id}`
        }));
        res.json({
            total: hateoasJoyas.length,
            joyas: hateoasJoyas
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta GET para obtener joyas con filtros
app.get('/joyas/filtros', async (req, res) => {
    try {
        const joyas = await getJoyasConFiltros(req.query);
        const hateoasJoyas = joyas.map(joya => ({
            ...joya,
            href: `http://localhost:3000/joyas/${joya.id}`
        }));
        res.json({
            total: hateoasJoyas.length,
            joyas: hateoasJoyas
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
