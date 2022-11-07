const express = require('express');


// file是标签名
// 前端要设请求头的：'multipart/form-data'
exports.uploadImage = (req, res) => {
    // //接收前台POST过来的base64
    // const imgData = req.body.imageData;
    // const imgName = req.body.imageName;
    // //过滤data:URL
    // const base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
    // //  var dataBuffer = new Buffer(base64Data, 'base64'); // 解码图片
    // const filename = path.join(process.cwd(), '/public/uploads/images', imgName);
    // const dataBuffer = Buffer.from(base64Data, 'base64'); // 这是另一种写法
    // fs.writeFile(filename, dataBuffer, (err) => {
    //     if (err) {
    //         return res.send('写入失败');
    //     }
    //     return res.send({
    //         Code: 200,
    //         msg: '上传成功！',
    //         data: `http://127.0.0.1:${config.port}/uploads/images/${imgName}`
    //     }); // 成功信息
    // })
}

exports.verifyAttachment = async (req, res) => {
    //     // const data = await resolvePost(req);
    //     const { fileName, chunkHashName } = req.body;
    //     const ext = extractExt(fileName)
    //     const filePath = path.resolve(STATIC_TEMP, `${chunkHashName}${ext}`);
    //     // 文件是否已存在
    //     let uploaded = false;
    //     let uploadedList = [];
    //     if (fst.existsSync(filePath)) {
    //         uploaded = true;
    //     } else {
    //         uploadedList = await getUploadedList(path.resolve(STATIC_TEMP, chunkHashName));
    //     }
    //     return res.send({
    //         Code: 200,
    //         msg: '上传成功！',
    //         data: {
    //             uploaded,
    //             uploadedList // 过滤诡异的隐藏文件
    //         }
    //     }); // 成功信息
    // }
    // exports.uploadChunk = (req, res) => {
    //     const multipart = new multiparty.Form();
    //     multipart.parse(req, async (err, field, file) => {
    //         if (err) {
    //             console.log(err);
    //             return;
    //         }
    //         const [chunk] = file.chunk;
    //         const [chunkName] = field.chunkName;
    //         const [fileName] = field.fileName;
    //         const [fileHash] = field.fileHash;
    //         const filePath = path.resolve(STATIC_TEMP, `${fileHash}/${chunkName}`);
    //         const mergePath = path.resolve(STATIC_FILES, `${fileHash}/${chunkName}`);
    //         const chunkDir = path.resolve(STATIC_TEMP, fileHash);

    //         if (fst.existsSync(filePath) || fst.existsSync(mergePath)) {
    //             return res.send({
    //                 Code: 200,
    //                 msg: '文件已存在！',
    //                 data: {}
    //             }); // 成功信息
    //         }

    //         if (!fst.existsSync(chunkDir)) {
    //             await fst.mkdirs(chunkDir)
    //         }
    //         await fst.move(chunk.path, `${chunkDir}/${chunkName}`);
    //         return res.send({
    //             Code: 200,
    //             msg: '文件分片已上传',
    //             data: {}
    //         }); // 成功信息;
    //     })
}

const mergeFileChunk = async (filePath, fileHash, size) => {
    // const chunkDir = path.resolve(STATIC_TEMP, fileHash);
    // if (fst.existsSync(filePath)) {
    //     return;
    // }
    // // 读chunkDir当前路径下的内容
    // let chunkPaths = await fst.readdir(chunkDir)
    // // 根据切片下标进行排序
    // // 否则直接读取目录的获得的顺序可能会错乱
    // chunkPaths
    //     .sort((a, b) => a.split("-")[1] - b.split("-")[1])
    // chunkPaths = chunkPaths.map(cp => path.resolve(chunkDir, cp)) // 转成文件路径
    // await mergeFiles(chunkPaths, filePath, size);
}

exports.mergeChunk = async (req, res) => {
    // // const data = await resolvePost(req)
    // const { fileHash, fileName, size } = req.body;
    // const ext = extractExt(fileName)
    // const filePath = path.resolve(STATIC_FILES, `${fileHash}${ext}`);
    // const tempDir = path.resolve(STATIC_TEMP, fileHash);
    // await mergeFileChunk(filePath, fileHash, size);
    // // if (fs.existsSync(tempDir)) {
    // //     // 删除分片目录
    // //     fs.rmdirSync(tempDir);
    // // }
    // return res.send({
    //     Code: 200,
    //     msg: '文件已上传',
    //     data: {}
    // }); // 成功信息;
}

exports.mergeUpload = async (req, res) => {
    // // const data = await resolvePost(req)
    // const { fileHash, fileName, size } = req.body;
    // const ext = extractExt(fileName)
    // const filePath = path.resolve(STATIC_FILES, `${fileHash}${ext}`);

    // await mergeFileChunk(filePath, fileHash, size);
    // if (fs.existsSync(tempDir)) {
    //     // 删除分片目录
    //     fs.rmdirSync(tempDir);
    // }
    // return res.send({
    //     Code: 200,
    //     msg: '文件已上传',
    //     data: {}
    // }); // 成功信息;
}

exports.deleteFile = async (req, res) => {
    // const { id, hash, type } = req.query;
    // // const deleteFilePath = path.resolve(this.STATIC_FILES, `${hash}.${type.split('/')[1]}`);
    // // if (fst.existsSync(deleteFilePath)) {
    // //     fs.unlinkSync(deleteFilePath);
    // // }
    // if (Util.isUndefinedOrNullOrWhiteSpace(id)) {
    //     return res.send({ status: 400, message: '当前文件不存在！' });
    // }

    // fileModel.deleteOne({ Id: id }, (err, results) => {
    //     if (err) {
    //         console.log('删除失败！');
    //     }
    //     if (results.deletedCount === 1) {
    //         res.send({
    //             Code: 200,
    //             Message: '删除成功！',
    //             Data: true,
    //         })
    //     }
    // })
}

exports.saveFile = async (req, res) => {
    // const attachmentInfo = req.body;
    // if (Util.isUndefinedOrNullOrWhiteSpace(attachmentInfo.Id)) {
    //     // 实现Id的自增
    //     const ids = await idsModel.findOneAndUpdate({ "Name": "File" }, { $inc: { 'Id': 1 } })
    //     attachmentInfo.Id = ids.Id;
    //     attachmentInfo.CreateTime = new Date();
    //     fileModel.create(attachmentInfo, function (err, results) {
    //         if (err) {
    //             console.log('添加失败!');
    //         }
    //         return res.send({
    //             Code: 200,
    //             Message: '添加成功！',
    //             Data: results,
    //         });
    //     })
    // } else {
    //     fileModel.updateOne({ Id: attachmentInfo.Id }, { $set: attachmentInfo }, function (err, results) {
    //         if (err) {
    //             console.log('更新失败!');
    //         }
    //         return res.send({
    //             Code: 200,
    //             Message: '更新成功！',
    //             Data: results,
    //         });
    //     })
    // }
}

exports.getFileList = async (req, res) => {
    // const page = req.body;
    // const curPage = page.curPage;
    // const pageSize = page.pageSize;
    // const skipData = (curPage - 1) * pageSize;
    // const filterValue = page.filters;
    // const requestData = page.requestData;
    // const totalDataLength = await fileModel.find(requestData).count();
    // fileModel.find(requestData, (err, results) => {
    //     if (err) {
    //         console.log('获取列表失败！');
    //     } else {
    //         res.send({
    //             Code: 200,
    //             Message: '获取列表成功！',
    //             Data: {
    //                 Data: results,
    //                 Total: totalDataLength
    //             },
    //         })
    //     }
    // }).skip(skipData).limit(pageSize)
}
