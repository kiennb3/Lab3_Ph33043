//npm i nodemailer
const express= require('express');
const nodemailer=require('nodemailer')
//tao sever
const app=express();
//cau hinh gui mail
let guiEmail=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'kiendtph33043@fpt.edu.vn',
        pass:'rvie wdlr dqty iycg'
    }
});
//thiet lap noi dung
let noidung={
    from:'kiendtph33043@fpt.edu.vn',
    to: 'kiendtph33043@fpt.edu.vn',
    subject:'Test mail',
    text: 'day la mail cua toiioii'
};
//gui
guiEmail.sendMail(noidung,(err,info)=>{{
    if (err) {
        console.log('Loi: '+err);
    }else{
        console.log('Da gui thanh cong : '+info);
    }
}});
app.listen(3005,()=>{
    console.log('server dang chay');
})