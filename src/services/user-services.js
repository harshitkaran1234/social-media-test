const AppError = require('../utils/errors/app-error');
const { UserRepository } = require('../repositories');

const userRepo = new UserRepository();

async function signup(data){
    try {
        console.log(JSON.stringify(data), '>>>>>>>.');
        const user = await userRepo.create(data);
        return user;
    } catch(error) {
        console.log(error);
        throw new AppError('Cannot create user', 500);
    }
}

module.exports = {
    signup,
}