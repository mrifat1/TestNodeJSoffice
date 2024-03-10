const express = require('express'),
    router = express.Router()

const service = require('../services/employee.service')

//http://localhost:3000/api/employees/
router.get('/', async (req, res) => {
    let empcode = req.query.empcode
    if(empcode){
        const employees = await service.getEmployeeByEmpCode(empcode)
        res.send(employees)
    }
    else{
        const employees = await service.getAllEmployees()
        res.send(employees)
    }
})

router.get('/getAllUserDetails',async (req,res) => {
    const userDetails = await service.getAllUserDetails()

    console.log('userDetailsLog',userDetails);

    if(userDetails ==  undefined){
        res.status(404).json('No data has been found')
    }
    else{
        res.send(userDetails)
    }

})

router.get('/getAllOwnerDetails',async (req,res) => {
    if(req.query.userType){
        
        const userDetails = await service.getAllOwnerDetails(req.query.userType)
        
        if(userDetails ==  undefined){
            res.status(404).json('No data has been found')
        }
        else{
            res.send(userDetails)
        }
    }
    else{
        const errorResponse = {
            status: '2000',
            errorMessage: 'Please insert proper userType'
        }
        res.status(404).json(errorResponse)
    }

})
router.get('/getOwnerUserDetailsById',async (req,res) => {
    if(req.query.userDetailsId && req.query.userType){
        
        const userDetails = await service.getOwnerUserDetailsById(req.query.userType,req.query.userDetailsId)
        
        if(userDetails ==  undefined){
            res.status(404).json('No data has been found')
        }
        else{
            res.send(userDetails)
        }
    }
    else{
        const errorResponse = {
            status: '2000',
            errorMessage: 'Please insert proper userDetailsId, userType'
        }
        res.status(404).json(errorResponse)
    }

})

router.get('/:id', async (req, res) => {
    const employee = await service.getEmployeeById(req.params.id)
    if (employee == undefined)
        res.status(404).json('no record with given id1 : ' + req.params.id)
    else
        res.send(employee)
})

router.delete('/:id', async (req, res) => {
    const affectedRows = await service.deleteEmployee(req.params.id)
    if (affectedRows == 0)
        res.status(404).json('no record with given id2 : ' + req.params.id)
    else
        res.send('deleted successfully.')
})

router.post('/', async (req, res) => {
    try {
        await service.addOrEditEmployee(req.body)
    
        res.status(201).send('created successfully.')
    } catch (error) {
        
        console.log('errorofAdd',error);
        const errorResponse = {
            status: error.errno,
            errorMessage: error?.sqlMessage
        }
        res.status(404).send(errorResponse)

    }
})

router.put('/:id', async (req, res) => {
    const affectedRows = await service.addOrEditEmployee(req.body, req.params.id)
    if (affectedRows == 0)
        res.status(404).json('no record with given id 3: ' + req.params.id)
    else
        res.send('updated successfully.')
})



module.exports = router;