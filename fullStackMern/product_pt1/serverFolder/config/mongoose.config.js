const mongoose = require("mongoose");
const dbName= "productManager"

mongoose.connect('mongodb+srv://Jaime:Kaikai10@cluster0.ew3p7.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( () => console.log('Connected to DB') )
.catch( (err) => console.log("Error connecting to DB", err) );