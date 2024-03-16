const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const sinhvienRoute = require('./routes/sinhvienRoute');

const app = express();//tạo đối tượng mới
//kết nối mongo

mongoose.connect('mongodb://localhost:27017/and103', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('kết nối thành công server');
}).catch((err) => {
    console.error(err);
})
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
//sử dụng route
app.use('/', sinhvienRoute);
//gọi đến file ejs
app.set('view engine', 'ejs');
//tạo port
const PORT = process.env.PORT || 5000;
//chạy server
app.listen(PORT, () => {
    console.log('server đang chạy ở cổng 4000');
})