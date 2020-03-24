const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://yasaman:Ehsanshiraz1!@coffeebreak-emebf.azure.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
