import mongoose from 'mongoose';
import config from '.';

mongoose.connect(config.database_url as string);

mongoose.connection.on('connected', () => {
    console.log('Mongodb connected successfully')
});

mongoose.connection.on('reconnected', () => {
    console.log('Mongodb reconnected successfully')
})

mongoose.connection.on('error', (error) => {
    console.log('mongodb connection error', error)
    mongoose.disconnect()
})

mongoose.connection.on('disconnected', () => {
    console.log('mongodb disconnected')
})