import { Router } from "express";
import { userService } from "../services/index.js";
import { isAuth, isGuest } from "../middlewares/authMiddleware.js";
import { getErrorMesage } from "../utils/errorUtils.js";

const userController = Router()

userController.get('/register', isGuest,(req,res) => {
    res.render('users/register')
})

userController.post('/register', isGuest,async (req,res) => {
    const {email,username,password,repeatPassword} = req.body
    try{
        const token = await userService.register(email,username,password,repeatPassword)
        res.cookie('auth', token)
        res.redirect('/')  
    }catch(err){
        res.render('users/register', { 
            error: getErrorMesage(err),
            user: {email, username}
        })
    }
})

userController.get('/login', isGuest,(req,res) => {
    res.render('users/login')
})

userController.post('/login',isGuest, async (req,res) => {
    const {email,password} = req.body

    try{
        const token = await userService.login(email,password)
        res.cookie('auth', token)

        res.redirect('/')
    }catch(err){
        res.status(404).render('users/login',{
            error:getErrorMesage(err),
            user: {email}
        })
    }
})

userController.get('/logout', isAuth, (req,res) => {
    res.clearCookie('auth')
    res.redirect('/')

})

export default userController