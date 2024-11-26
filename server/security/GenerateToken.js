const jwt=require('jsonwebtoken')

// Default login 
exports.generateToken=(payload,passwordReset=false)=>{
    return jwt.sign(payload,'CNPM',{expiresIn:passwordReset?'1h':'15m'})
}