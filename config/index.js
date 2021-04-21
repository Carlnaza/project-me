module.exports = require('mongoose').connect(process.env.MONGODB_URI || process.env.LOCAL_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  