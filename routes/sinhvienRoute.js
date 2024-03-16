const express=require('express');
const router=express.Router();
const sinhvien=require('../models/sinhvienModel');
//get(select)
//http:localhost:5000/sinhvien
router.get('/',async(req,res)=>{
    try {
        const sinhviens=await sinhvien.find();//lấy về toàn bộ sinh viên có trong bảng
        // res.json(sinhviens)
        res.render('sinhviens',{sinhviens:sinhviens});//trả về file ejs
        console.log(sinhviens);
    } catch (error) {
        console.error(error);
        res.json({error: error});
    }
});
//Post (new)
router.post('/sinhvien',async(req,res)=>{
    try {
        const {id,name}=req.body;//lấy dữ liệu người dùng nhập từ react
      const sinhvien1= new sinhvien({id,name});//tạo đối tượng mới với dữ liệu user nhập
      await sinhvien1.save();//lưu vào bảng dữ liệu
      res.json(sinhvien1);//trả về kết quả
      console.log(sinhvien1);
    } catch (error) {
        console.error(error);
        res.json({error: error});
    }
});
//PUT (update)
//http://localhost:5000/sinhvien/:_id
router.put('/sinhvien/:_id', async(req,res)=>{
    try {
        const _id=req.params._id; // Sử dụng req.params.id thay vì req.params._id
        const {id,name}=req.body;
        const updateSinhvien=await sinhvien.findByIdAndUpdate(_id,{id,name},{new:true});
        res.json(updateSinhvien);
        console.log(updateSinhvien);
        
    } catch (error) {
        console.error(error);
        res.json({error: error});
    }
});
//delete 
//http:localhost:500/sinhvien/:_id
router.delete('/sinhvien/:_id',async(req,res)=>{
    try {
        const _id=req.params._id;
        const deleteSinhvien= await sinhvien.findByIdAndDelete(_id);
        res.json(deleteSinhvien);
        console.log(deleteSinhvien);
        
    } catch (error) {
        console.error(error);
        res.json({error: error});
    }
})

module.exports=router;