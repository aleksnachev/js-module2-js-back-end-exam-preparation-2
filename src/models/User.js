import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = new Schema({
    email:{
        type:String,
        required: [true, 'User email is reqiuired'],
        minLength: [10, 'Emial is too short']
    },
    password:{
        type:String,
        required: [true, 'User password is reqiuired'],
        minLength: [4, 'Password is too short']
    },
    username:{
        type:String,
        required: [true, 'Username is reqiuired'],
        minLength: [2, 'Username is too short']
    }
})
userSchema.pre('save', async function(){
    this.password = await bcrypt.hash(this.password, 12)
})
const User = model('User', userSchema)

export default User