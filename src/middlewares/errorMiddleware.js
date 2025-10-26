import { getErrorMesage } from "../utils/errorUtils.js"

export function errorMiddleware(err,req,res,next){
    const status = err.stautsCode || 500
    const message = getErrorMesage(err)

    res.status(status).render('404', {error: message})
}