const mongoose = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1';
const conn_uri = `mongodb://${host}/travlr`;

const {seed} = require('./seed'); // Import seed.js



// Register models
require('./Trips'); 
require('./user');

mongoose.connection.on('connected', () => console.log('CONNECTED!'));
mongoose.connection.on('error', err => console.log(err));
mongoose.connection.on('disconnected', ()=> console.log('DISCONNECTED!'));


mongoose.set('strictQuery',false);

// kill MongoDB connections before existing app
const gracefulShutdown =(msg, callback) =>{
    mongoose.connection.close( ()=>{
        console.log(`Mongoose disconnected due to ${msg}`);
        callback();
    } );
}
process.once('SIGUSR2', () =>
    gracefulShutdown('nodemon restart',()=>process.kil(process.pid, 'SIGUSR2')));
    process.on('SIGINT',()=>
        gracefullShutdown('app termination',()=> process.exit(0)));
    
        async function main() {
            await mongoose.connect(conn_uri);
            await seed(); // Seed the database after connection
        }
        
   main().catch(console.log);

