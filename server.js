const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs')


app.get('/', (req, res) => {
    // res.send('Hola Mundo')

    //res.send(salida);
    res.render('home', {
        nombre: 'Manuel',
        anio: new Date().getFullYear()
    })

})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`)
})