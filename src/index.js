import express from 'express'
import routes from './routes.js'
import hablebars from 'express-handlebars'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import { authMiddleware } from './middlewares/authMiddleware.js'
import { errorMiddleware } from './middlewares/errorMiddleware.js'
const app = express()

//Setup database
try{
    await mongoose.connect('mongodb://127.0.0.1:27017', {   
        dbName: 'mind-blog',

    })
    console.log('Conected successfully');
}catch(err){
    console.log('Cannot connect to db' , err.message);

}
//Config handlebars
app.engine('hbs', hablebars.engine({
    extname: 'hbs',
    runtimeOptions:{
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    },
    //BONUS
    helpers:{
        setTitle(title){
            this.pageTitle = title 
        },
        gettitle(){
            return this.pageTitle || 'Friendly World'
        }
    }
}))
app.set('view engine', 'hbs')
app.set('views', 'src/views')

//Add static middleware
app.use(express.static('src/public'))
//Add cookie parser
app.use(cookieParser())
//Add body parser
app.use(express.urlencoded({extended:false}))

////////////////////////////////////////////////// REST API i v nqkoj ot kontrolerite da naprajm leko neshto
app.use(express.json())
//Use auth middleware
app.use(authMiddleware)
//Add routes
app.use(routes)
//Add global error handling
app.use(errorMiddleware)
app.listen(3000, () => console.log('Server is listening on http://localhost:3000...'));

