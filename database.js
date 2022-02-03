const mongoose = require("mongoose");

const connectDB = async () => {
  const PASSWORD = "MongoDb.c0m**";
  const DATABASE_NAME = "productsDB";
  const CONNECTION_URL = `mongodb+srv://DuaaAlk:${PASSWORD}@cluster0.l4z8z.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`;

  const conn = await mongoose.connect(CONNECTION_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log(`mongo connected: ${conn.connection.host}`);
};

module.exports = connectDB;
