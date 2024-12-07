const { Schema } = require('mongoose');
const mongoose = require('mongoose')


const employeesSchema = Schema({  
    empName: String,
    salary: Number, 
}, { versionKey: false });

const collection = {};

collection.getEmployeesSchema = async () => {
    try {
        const users = new mongoose.model('employees', employeesSchema);
        return users;
    } catch (error) {
        const err = new Error("Could not add the data");
        err.status = 500;
        throw err;
    }
};


module.exports = collection;