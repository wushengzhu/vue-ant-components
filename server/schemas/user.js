const mongoose = require('../db/index');
const Schema = mongoose.Schema;
const idsSchema = new Schema({
    Id: Number,
    Account: String,
    // Password: String,
    UserName: String,
    Gender: {
        type: Number,
        default: 0,
    },
    Image: String,
    Email: String,
    Remark: String,
    CreateTime: String,
    IsActive: {
        type: Boolean,
        default: true,
    },
});
// 映射到集合上去
const userModel = mongoose.model("train_users", idsSchema);
module.exports = userModel;