const express = require('express');
const isPalindrome = require('is-palindrome')
const app = express();


app.get('/', (req, res)=> {
res.send('Test')

}); app.get("/comprobar", (req, res)=>{
        // 1. Extraer la información de la query string y quedarnos con el valor del parámetro "palabra"
        const palabra = req.query.palabra;
    
        // 2. si es palindromo enviar un mensaje y si no lo es, pues 
        if (isPalindrome(palabra)) {
            res.send(`La palabra ${palabra} es un palíndromo`);
        } else {
            res.send(`La palabra ${palabra} <strong>NO</strong> es un palíndromo`);
        }
    });

app.listen(3000, ()=> {
    console.log('Escuchando en port 3000')
})