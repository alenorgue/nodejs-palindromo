# Amad a la dama: El servidor que comprueba palíndromos

Queremos crear un servidor que ofrece un servicio que se encarga de comprobar si una palabra es un palíndromo.

[Vídeo demo aplicación](https://oscarm.tinytake.com/tt/NTQxODQ0OF8xNjk0NDM5Ng)

# Requisito 1

Crea un endpoint, de nombre '/comprobar'; que comprueba si una palabra es palíndromo o no.

Dicha palabra es pasado como QueryString a través del parámetro 'palabra'

```
http://localhost:3000/comprobar?palabra=patata
```

Debe devolver una respuesta del tipo 'text/plain'. Si la palabra resulta ser un palíndromo, devolverá el mensaje "La palabra {palabra} es un palíndromo". En caso contrarío, debe devolver un mensaje "La palabra {palabra} NO es un palíndromo"

BONUS: Serías capaz de utilizar el módulo 'querystring' en vez del módulo 'url' para obtener los parámetros de la QueryString? [Ayuda](https://www.javatpoint.com/nodejs-query-string)

# Requisito 2

Queremos ofrecer al usuario la posibilidad de introducir el mismo la palabra mediante el uso de un formulario.

Modifica tu servidor para que, si el usuario una una petición a 'http://localhost:3000'; devolvamos un formulario HTML **debidamente configurado**.

Dicho formulario debe hacer una petición GET al endpoint, y pasarle como parámetro dinámico de la URL la palabra introducida por el usuario

Recuerda todos los puntos que debes tener en cuenta a la hora de configurar un formulario HTML:

1. Tipo de petición (GET? POST?)
2. Atributo HTML que permite establecer el endpoint al que el formulario hace la petición
3. Los atributos necesarios en el tag \<input> para pasar los valores del control en la petición al servidor. 

No necesitas realizar ningun tipo de código JavaScript en tu formulario para hacerlo funcionar.

En resumen debe pasar lo siguiente:

1. El usuario introduce en el navegador 'http://localhost:3000'
2. El servidor devuelve un HTML simple; con un formulario, debidamente configurado
3. El usuario introduce la palabra en el formulario y la da al botón de 'Enviar' (o botón de __submit__)
4. El formulario hace una petición GET al endpoint '/comprobar'; pasándole correctamente los parámetros por la QueryString
5. El servidor devuelve un valor, true o false, igual que en el requisito 1.

## Solución

Propiesta de solución con comentaríos por [Ignacio Spadavecchia](https://github.com/Ignacio-Spadavecchia/node-servidor-palindroma)
