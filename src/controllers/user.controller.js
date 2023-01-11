const UserModel = require('../model/user.model');

const handleRegister = async (req, res) => {
    try{
        // return console.log(typeof req.body)
        let newUser = new UserModel(req.body);
        newUser = await newUser.save();
        return res.status(201).json({
            message: "Registration Successful!",
            success: true,
            newUser,
            statusCode: 201
        });
    }catch(error){
        // return console.log(error)
        const statusCode = error.code === 11000 ? 409 : 500;
        const message = error.code === 11000 ? "Username or email already exists" : "Registration unsuccessful!";
        res.status(statusCode).json({
            message,
            success: false,
            error,
            statusCode
        });
    }

}

async function handleLogin(req, res){
    try{          
        const { username, password } = req.body;
         
        const user = await UserModel.login(username, password);
        return res.status(200).json({
            message: "Login Successful",
            user,
            statusCode: 200,
            success: true
        });
    }catch(error){
        return res.status(401).json({
            message: "Login Unsuccessful",
            error,
            statusCode: 401,
            success: false
        });
       
    }

}

module.exports = {
    handleRegister,
    handleLogin
};