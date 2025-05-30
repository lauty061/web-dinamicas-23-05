const express=require('express');
const puerto=4000;
const app=express();
const path=require('path')

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const paginas=require('./rutas/paginas.js');
app.use(paginas);

app.listen(puerto, () =>{
    console.clear();
    console.log(`Servidor en el puerto ${puerto}`);
});
