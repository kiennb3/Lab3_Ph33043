//npm i jsonwebtoken
//thu vien
const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
//tao app
const app = express();
//ho tro nhan du lieu json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//mang users
const users = [{ id: 1, username: 'user001', password: 'pd001' },//dung de login

];
//token bi mat
const tokenBimat = '123456';

//hma toa token
function hamTaoToken(user) {
    return jwt.sign(user, tokenBimat, { expiresIn: '15m' });//co gia tri trong 15 phut
}
//tien hanh login (goi qua postman , khong ho tro goi qua trinh duyet)
app.post('/login', (req, res) => {
    const { username, password } = req.body;//nhna gia tri truyen tu postman
    console.log('Thong tin nhan duoc');
    console.log(username);
    console.log(password);//in ra console
    //tim kiem trong mang xem cos user nhu nguoi dung nhap khong??
    const user = users.find((u) => u.username === username && u.password === password);//so sanh
    if (!user) {//neu nhap sai user ,password
        console.log('sai user or password');
        return;
    }
    //neu nhap dung tao token
    const tokeCongkhai = hamTaoToken(
        {id: user.id, username: user.username }
        );
        //tra token cho nguoi dung
        res.json(tokeCongkhai);
        console.log("Token sinh ra: "+ tokeCongkhai);
})
app.listen(3307,()=>{
    console.log('server dang chay');
})
