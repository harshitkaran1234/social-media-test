const { userService } = require('../services');
const { successResponse, errorResponse } = require('../utils/common');

async function signup(req, res) {
    try{
        // console.log(JSON.stringify(req), '+++++++');
        const user = await userService.signup({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
        });
        successResponse.data = user;
        return res.status(200).json(successResponse)
    } catch(error) {
        console.log(error);
        return res.status(500).json(errorResponse);
    }
}

module.exports = {
    signup,
};