import {Schema, model} from "mongoose"

const messageSchema = new Schema({
  name : String,
  email : String,
  mobile : String,
  message : String,
}, { timestamps: true },{Location:true})

const sendmessage = model("sendmessage", messageSchema)

export default sendmessage