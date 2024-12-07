const dbservice = require('../model/employeeModel')
const userService = {};

userService.getEmpData = async () => {
    try {
        let insertForm = await dbservice.getEmployeeData();
        console.log('service ====', insertForm);
        return insertForm
    } catch (error) {
        throw new Error("Error in inserting data: " + error.message);
    }
};

module.exports = userService;