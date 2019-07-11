const http = require('http')

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Tipe': 'Aplication/json' })
        let salida = {
            nombre: 'Manuel',
            edad: 32,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080);

console.log('Escuchando puerto 8080');