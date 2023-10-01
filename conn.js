const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/short-url')
    .then(() => {
        console.log("Mongo Connected");
    }).catch((e) => {
        console.log(e);
    })
