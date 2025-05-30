const express=require('express');
const app1=express.Router();

app1.get('/', (req, res) =>{
    res.render('index', {
    titulo: 'index'
    })
})

app1.get('/clientes', (req, res) =>{
    res.render('clientes', {
        titulo:'clientes'
    });
})

app1.get('/contacto', (req, res) =>{
    res.render('contacto', {
        titulo:'contacto'
    });
})

app1.get('/empresa', (req, res) =>{
    res.render('empresa', {
        titulo:'empresa'
    });
})

app1.get('/preguntas', (req, res) =>{
    res.render('preguntas', {
        titulo:'preguntas'
    });
})

app1.get('/servicio', (req, res) =>{
    res.render('servicio', {
        titulo: 'servicio'
    });
})

module.exports=app1;
