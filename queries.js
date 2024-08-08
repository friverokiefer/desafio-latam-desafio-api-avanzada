const { Pool } = require('pg');

const pool = new Pool({
    user: 'feliperiverokiefer',
    host: 'localhost',
    password: '9807',
    database: 'joyas',
    port: 5432,
    allowExitOnIdle: true
});

const getJoyas = async ({ limits, page, order_by }) => {
    const values = [];
    let query = "SELECT * FROM inventario";

    if (order_by) {
        query += ` ORDER BY ${order_by.replace('_', ' ')}`;
    }

    if (limits) {
        values.push(limits);
        query += ` LIMIT $${values.length}`;
    }

    if (page) {
        values.push((page - 1) * limits);
        query += ` OFFSET $${values.length}`;
    }

    const { rows } = await pool.query(query, values);
    return rows;
};

const getJoyasConFiltros = async ({ precio_min, precio_max, categoria, metal }) => {
    const values = [];
    let query = "SELECT * FROM inventario WHERE 1=1";

    if (precio_min) {
        values.push(precio_min);
        query += ` AND precio >= $${values.length}`;
    }

    if (precio_max) {
        values.push(precio_max);
        query += ` AND precio <= $${values.length}`;
    }

    if (categoria) {
        values.push(categoria);
        query += ` AND categoria = $${values.length}`;
    }

    if (metal) {
        values.push(metal);
        query += ` AND metal = $${values.length}`;
    }

    const { rows } = await pool.query(query, values);
    return rows;
};

module.exports = {
    getJoyas,
    getJoyasConFiltros
};
