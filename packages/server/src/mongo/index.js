const mongoose = require("mongoose");

const mongoConn = async () => {
  try {
    await mongoose.connect('mongodb://root:example@localhost:27017/book_db?authSource=admin', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  } catch(err) {
    console.log(err);
    throw new Error("failed to connect to mongodb");
  }
}

module.exports = mongoConn;
