const userModel=require("../models/userModel");

exports.signup = async (req, res) =>
{
    const data=req.body;
    try {
        if(req.body.isAdmin) {
            return res.status(401).json({
                status: "error",
                message: "You cannot create a admin account."
            })
        }

        const newUser=new userModel(data);
        await newUser.save()

        res.status(200).json({
            message: "SignUp done successfully 😌",
            data: data,
        })
    } catch(error) {
        console.log(error);
        res.status(400).json({
            status: "failed",
            message: error
        });
    }
}

exports.login=async (req, res) =>
{
    const {mailId, passWord}=req.body;
    if(!mailId||!passWord) {
        res.status(400).json({
            status: "Login Failed !",
            message: "Provide both Mail Id & Password"
        });
    }
    try {
        var userData = await userModel.findOne({mailId: mailId});

        res.status(200).json({
            status: "Login Success",
            data: userData
        })
    }
    catch(error) {
        console.log(error)
        res.status(402).json({
            status: "Error",
            error: {error}
        });
    }

}