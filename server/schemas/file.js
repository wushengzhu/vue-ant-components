const mongoose = require('../db/index');
const Schema = mongoose.Schema;
const fileSchema = new Schema({
    Id: Number,
    ObjectId: String,
    ModCode: String,
    FileHash: String,
    FileName: String,
    OriginName: String,
    FileType: String,
    FileByteLength: String,
    FileSize: String,
    Remark: String,
    Creator: String,
    CreateTime: String,
});
// 映射到集合上去
const fileModel = mongoose.model("train_file", fileSchema);
module.exports = fileModel;