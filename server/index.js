import express from 'express';
import mongoose, { connect } from 'mongoose';
import validator from 'validator';
import dotenv from 'dotenv';
import sendmessage from './model/sendmessage.js';

const app = express();
app.use(express.json());
import path from 'path';
const __dirname = path.resolve();
dotenv.config();

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL, () => {
    console.log('Connected to MongoDB');
})

app.post('/send',async(req,res)=>{
    const{name,email,mobile,message} = req.body;

    if(!validator.isEmail(email))

    {
        return res.json({
            success: false,
            message: "Please enter valid email",
            
        })
    } 

    if(!validator.isMobilePhone(mobile))
    {
        return res.json({
            success: false,
            message: "Mobile must contain 10 digit",
            
        })
    }

    const Message = new sendmessage({
        name : name,
        email : email,
        mobile : mobile,
        message : message
    })

    const savedMessage = await Message.save();

        res.json({
            success: true,
            message: "Message sent successfully",
            data: savedMessage
        })
   
})


app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
  });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
