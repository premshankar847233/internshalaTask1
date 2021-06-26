const mongoose = require('mongoose')

const connectDatabase = () => {
    mongoose.connect('mongodb://localhost:27017/Internshala', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify:false,
    }).then(con => {
        console.log(`MongoDB Database connected with HOST: ${con.connection.host}`)
    })
}

module.exports = connectDatabase