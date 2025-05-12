const http = require('http');
const url = require('url');
const esPalindromo = require('./function');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    if (pathname === '/') {
        res.end(`
          <!DOCTYPE html>
          <html lang="es">
          <head>
            <meta charset="UTF-8">
            <title>Comprobar Palíndromo</title>
          </head>
          <body>
            <h1>¿Es un palíndromo?</h1>
            <form action="/comprobar" method="GET">
              <label for="word">Introduce una palabra o frase:</label><br>
              <input type="text" id="palabra" name="palabra" required>
              <button type="submit">Comprobar</button>
            </form>
          </body>
          </html>
        `);
        return;
    }

  if (pathname === '/comprobar') {
    const palabra = query.palabra;

    if (!palabra) {
        res.end(`<h1>Por favor introduce una palabra.</h1>`);
        return;
    }

    const resultado = esPalindromo(palabra);
    const mensaje = `Palabra: "${palabra}" - ¿Es palíndromo?: ${resultado}\n`;

    fs.appendFile('consultas.txt', mensaje, (err) => {
        if (err) {
            console.error('Error al guardar en el archivo:', err);
            res.end(`<h1>Hubo un error al guardar la consulta.</h1>`);
            return;
        }

        res.end(`
          <h1>La palabra "${palabra}" ${resultado ? 'es' : 'NO es'} un palíndromo.</h1>
        `);
    });
    return;
}

    res.end(`<h1>Ruta no válida.</h1>`);
});

server.listen(3000, () => {
    console.log('Listening on port 3000...');
});


