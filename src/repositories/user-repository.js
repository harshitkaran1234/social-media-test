const CrudRepository = require('./crud-repository');
const user = require('../models/collections/user'); 

class UserRepository extends CrudRepository {
    constructor() {
        super(user);
    }
};

module.exports = UserRepository;