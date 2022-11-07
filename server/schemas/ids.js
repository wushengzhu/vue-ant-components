const mongoose = require('../db/index');
const Schema = mongoose.Schema;
const idsSchema = new Schema({
    Id: Number,
    Name: String,
});
// 映射到集合上去
const idsModel = mongoose.model("train_ids", idsSchema);
module.exports = idsModel;