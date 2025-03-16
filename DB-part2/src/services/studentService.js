const StudentModel = require('../models/studentModel');

const UserService = {
    createStudent: async (name, age) => {
        return await StudentModel.createStudent(name, age)
    }
};

module.exports = UserService ;