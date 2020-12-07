const mongoose = require("mongoose");

let con;

module.exports = async (uri = process.env.MONGO_URI) => {
  if (con) return con;
  con = await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return con;
};
