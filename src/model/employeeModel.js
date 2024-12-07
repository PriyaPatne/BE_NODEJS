const dbmodel = require ('../utilities/connection')
const employeeModel = {};

employeeModel.getEmployeeData = async () => {
    try {
            let employeeData = await dbmodel.getEmployeesSchema();
            let data = await employeeData.find();
            console.log('data ===',data);
            return data
    } catch (error) {
        throw new Error("Error in inserting form data: " + error.message);
    }
};

module.exports = employeeModel;