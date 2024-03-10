const db = require('../demo_db_connection')

module.exports.getAllEmployees = async () => {
    const [records] = await db.query("SELECT * FROM employees")
    return records;
}

module.exports.getEmployeeById = async (id) => {
    const [[record]] = await db.query("SELECT * FROM employees WHERE id = ?", [id])
    return record;
}

module.exports.deleteEmployee = async (id) => {
    const [{ affectedRows }] = await db.query("DELETE FROM employees WHERE id = ?", [id])
    return affectedRows;
}

module.exports.addOrEditEmployee = async (obj, id = 0) => {
    const [[[{affectedRows}]]] = await db.query("CALL usp_employee_add_or_edit(?,?,?,?)",
        [id, obj.name, obj.employee_code, obj.salary])
    return affectedRows;
}

module.exports.getEmployeeByEmpCode = async (EmpCode) => {
    const [[record]] = await db.query("SELECT * FROM employees WHERE employee_code = ?", [EmpCode])
    return record
}

module.exports.getAllUserDetails = async () => {
    const [record] = await db.query("SELECT * FROM user_details LIMIT 200")
    console.log('records',record);
    return record
}

module.exports.getAllOwnerDetails = async (userType) => {
    const [record] = await db.query("SELECT * FROM user_details where user_type = ? LIMIT 200", [userType])
    return record
}

module.exports.getOwnerUserDetailsById = async (userType,userDetailsId) => {
    const [record] = await db.query("SELECT full_name, user_id, user_details_id, email FROM user_details where user_type = ? and user_details_id = ?", [userType,userDetailsId])
    console.log('record',record);
    return record
}