const mongoose = require('mongoose')

const mongoURI = 
process.env.NODE_ENV === "production"
?process.env.DB_URL
:DB_URL= 'mongodb+srv://ddobrose01:wqYqNmWhaXjOfI19@cluster0.k8ekp.mongodb.net/everySet?retryWrites=true&w=majority'

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((instance) =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch((error) => console.log('Connection failed!', error));

  module.exports = mongoose