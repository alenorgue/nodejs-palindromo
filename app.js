const http = require('http')
const querystring = require('querystring')

const app = http.createServer((req, res) => {

    if (req.url.includes('/comprobar?palabra=')) {
        const query = querystring.parse(req.url.split('?')[1]);
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

        let esPalindromo = palindrome(query.palabra)
        let mensaje = `La palabra ${query.palabra} ${esPalindromo? '': 'NO '} es un palíndromo.` 
        res.write(mensaje);
        res.end();
    }

    else {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.write(`
        <!DOCTYPE html>
        <html>
        <title>W3.CSS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <body>

        <div class="w3-container w3-blue">
        <h2>The Palindrome</h2>
        </div>

        <form action="/comprobar" class="w3-container">
        <p>
        <label>Palabra a comprobar</label>
        <input name="palabra" class="w3-input" type="text">
        </p>
        <input type="submit" class="w3-btn w3-padding w3-teal" style="width:120px"></input>
        </form>

        </body>
        </html> 

        `);
        res.end();

    }
})

function palindrome(str) {
    let i, j
    i = 0
    // Todo lo que no sea un carácter, ya sea mayúscula o mínuscula, lo eliminas
    str = str.replace(/[^a-z]+/gi, "");
    str = str.toLowerCase()
    j = str.length - 1
    let esPalindromo = true

    while (i < j && esPalindromo) {
        esPalindromo = str[i] == str[j]
        i++
        j--;
    }

    return esPalindromo;
}
app.listen(3000);