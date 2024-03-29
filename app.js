const express = require('express')  ;
const hbs     = require('hbs')      ;
require('dotenv').config()          ;

const app     = express()           ;
const port    = process.env.PORT    ;

//Nuevo puerto
//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials', function( err ){} );


app.use( express.static( './public' ) );



app.get('/' , ( req, res ) =>{
    res.render('home', {
        nombre: 'Jurgen Sanclemente',
        titulo: 'Curso de node'
    });
});



app.get('/generic' , ( req, res ) =>{
    res.render('generic', {
        nombre: 'Jurgen Sanclemente',
        titulo: 'Curso de node'
    });
});

app.get('/elements' , ( req, res ) =>{
    res.render('elements', {
        nombre: 'Jurgen Sanclemente',
        titulo: 'Curso de node'
    });
});


app.get('*' , ( req, res ) =>{
    res.sendFile( __dirname + '/public/404.html');
});



app.listen( port, () =>{
    console.log("Aplicacion corriendo en puerto: ", port );
})