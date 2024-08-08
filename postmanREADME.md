
### Pruebas en postman para validación

#### a. Estructura HATEOAS

* **URL:** `http://localhost:3000/joyas`
* **Método:** GET
* **Descripción:** Devuelve todas las joyas con estructura HATEOAS.

#### b. Parámetros en query string:

* **URL:** `http://localhost:3000/joyas?limits=3&page=1&order_by=stock_ASC`
* **Método:** GET
* **Descripción:** Devuelve joyas limitadas a 3 por página, ordenadas por stock en orden ascendente.

### 2. Ruta GET /joyas/filtros:

* **URL:** `http://localhost:3000/joyas/filtros?precio_min=10000&precio_max=30000&categoria=aros&metal=oro`
* **Método:** GET
* **Descripción:** Filtra las joyas por precio mínimo, precio máximo, categoría y metal.

### Ejemplo en Postman:

1. **GET /joyas**
   * **URL:** `http://localhost:3000/joyas`
   * **Method:** GET
   * **Response:** Deberías ver un JSON con todas las joyas y sus respectivos `href`.
2. **GET /joyas con parámetros en query string**
   * **URL:** `http://localhost:3000/joyas?limits=3&page=1&order_by=stock_ASC`
   * **Method:** GET
   * **Response:** Deberías ver un JSON con las joyas limitadas a 3 por página, ordenadas por stock en orden ascendente.
3. **GET /joyas/filtros**
   * **URL:** `http://localhost:3000/joyas/filtros?precio_min=10000&precio_max=30000&categoria=aros&metal=oro`
   * **Method:** GET
   * **Response:** Deberías ver un JSON con las joyas que cumplen con los filtros especificados.

### Resumen de las verificaciones:

1. **GET /joyas:**
   * **Sin parámetros:** Devuelve todas las joyas con estructura HATEOAS.
   * **Con parámetros:** Limita, pagina y ordena las joyas según los parámetros especificados.
2. **GET /joyas/filtros:**
   * **Con filtros:** Filtra las joyas según los parámetros de precio mínimo, precio máximo, categoría y metal.
