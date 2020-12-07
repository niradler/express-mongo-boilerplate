const connect = require("../models/connect");
const ExampleModel = require("../models/Example");

class Example {
  static async all(req, res) {
    const skip = Number(req.query.skip) || 0;
    const limit = Number(req.query.limit) || 20;
    await connect();
    const examples = await ExampleModel.find({})
      .sort({ name: 1 })
      .skip(skip)
      .limit(limit);
    const count = await ExampleModel.count({});
    res.json({ data: examples, count });
  }

  static async add(req, res) {
    const example = req.body;
    await connect();
    await ExampleModel.create(example);

    res.json(example);
  }
}

module.exports = Example;
