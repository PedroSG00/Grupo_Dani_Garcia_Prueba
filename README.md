# Prueba Técnica - Grupo Dani García

Dadas estas 2 APIs:
- https://catfact.ninja/fact - Cat Random Facts
- https://developers.giphy.com/docs/ - Giphy API

Selecciona un dato sobre gatos usando la primera API.
De ese dato, usa las tres primeras palabras y busca un gif usando la API de Giphy.

El resultado se tiene que mostrar con una imagen a la izquierda y el texto a la derecha, todo
centrado verticalmente, junto con un botón que genere otro dato distinto aleatoriamente.

Demuestra tus habilidades de diseño mediante la producción de un diseño de unidad de
componente atractivo e intuitivo.

Demuestra tus habilidades de codificación en todos los
niveles, desde el manejo de APIs hasta el código de la aplicación

Comparte tu código a través de un repositorio git.
Documente en el README, todos los pasos que crea necesarios para poder ver su código
en funcionamiento.

## Descripción general

Este proyecto consiste en una aplicación web que permite a los usuarios obtener un dato curioso sobre los gatos y un gif relacionado con las tres primeras palabras del dato. La aplicación está construida con un servidor Node.js y un cliente React.


## Servidor

### Descripción

El servidor se encarga de manejar las solicitudes HTTP y proporcionar respuestas utilizando una API REST. Utiliza dos APIs externas para obtener un hecho curioso de gatos y un gif relacionado.

### Tabla de endpoints

| Método | Endpoint         | Descripción                         |
|--------|------------------|--------------------------------------|
| GET    | /api/fact-and-gif    | Obtiene un dato curioso de gatos y un gif relacionado |

### Variables de entorno

Para poder ejecutar el servidor, es necesario tener las siguientes variables de entorno en un archivo `.env`:

* `PORT`: Especifica el puerto en el que quieres que trabaje el servidor.
* `ORIGIN`: Especifica la URL del cliente.
* `API_KEY_GIPHY`: La clave de la API de Giphy.

### Tecnologías empleadas:

* `Node.js`
* `ExpressJS`
* `Cat Random Facts API`
* `Giphy API`
* `Axios`
* `Postman`


## Cliente

### Descripción

El cliente es una aplicación React que se encarga de mostrar la interfaz de usuario y manejar la interacción del mismo. Utiliza la API proporcionada por el servidor para obtener los datos necesarios y mostrarlos en la pantalla.

### Variables de entorno

Para poder ejecutar el cliente, es necesario tener las siguientes variables de entorno en un archivo `.env`:
* `REACT_APP_API_URL`: La URL de la API del servidor.

### Tecnologías empleadas:

* `ReactJs`
* `JavaScript (ES6)`
* `HTML`
* `CSS`
* `React Boostrap`
* `Axios`


## Instalación

Para instalar y ejecutar el proyecto, siga estos pasos:
1. Clonar el repositorio: git clone https://github.com/PedroSG00/Grupo_Dani_Garcia_Prueba.git
2. Instalar las dependencias en el servidor: Acceder a la carpeta server y ejecutar el comando: npm install
3. Instalar las dependencias en el cliente: Acceder a la carpeta client y ejecutar el comando: npm install
4. Crear un archivo .env en cliente y en servidor con las variables de entorno necesarias
5. Iniciar el servidor: Acceder a la carpeta server y ejecutar el comando: npm start o npm run dev
6. Iniciar el cliente: Acceder a la carpeta client y ejecutar el comando: npm start
7. Abrir http://localhost:3000 en el navegador

De existir cualquier problema o duda en la ejecución del código puedes contactar conmigo por correo electrónico: suarezgallardopedro@gmail.com

## Bibliografía

* [`Giphy API`](https://developers.giphy.com/docs/)
* [`React Bootstrap`](https://react-bootstrap.netlify.app/)
* [`MDN`](https://developer.mozilla.org/es/docs/Web/JavaScript)


