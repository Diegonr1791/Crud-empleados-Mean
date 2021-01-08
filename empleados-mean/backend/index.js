const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

//importamos solo mongoose de database.js(solo la conexion)
const {moongose} = require('./database')

//settings
//elejimos puerto(se elije el del servidor o por defecto el 3000)
app.set('port', process.env.PORT || 3000);


//Middlewares
//por aca va a pasar todo y devuelve los metodos utilizados(get, post ,put, delete)
app.use(morgan('dev'));
//entender formato json
app.use(express.json())
//activamos cors para poder comunicarnos entre server 3000(back) y 4200(front)
app.use(cors({ origin: 'http://localhost:4200'}))


//routes
app.use('/api/empleados',require('./routes/empleados.routes'));

//inicializar servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})