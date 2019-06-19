const express = require('express');
let Assignment = require('../Models/ExamsAssignments/AssignmentSchema')

const assignmentRoutes = express.Router();
assignmentRoutes.route('/').get(function(req,res){
    Assignment.find(function (err,assignments) {
        if(err){
            console.log(err);
        }else {
            res.json(assignments);
        }
    });

});

assignmentRoutes.route('/:id').get(function (req,res) {
    let id = req.params.id;
    Assignment.findById(id, function (err,assignment) {
        res.json(assignment);
    });

});

assignmentRoutes.route('/add').post(function (req,res) {

    let assignment = new Assignment(req.body);
    assignment.save()
        .then(assignment => {
            res.status(200).json({'todo':'todo added successfully'});
        })
        .catch(assignment => {
            res.status(400).send('adding new todo failed');
        });
});

assignmentRoutes.route('/update/:id').put(function (req,res) {

    let id = req.params.id;
    Assignment.findById(id, function (err,assignment) {
        if(!assignment)
            res.status(404).send('data is not found');
        else
            assignment.assignmentNumber = req.body.assignmentNumber;
        assignment.assignmentFile = req.body.assignmentFile;
        assignment.endDate = req.body.endDate;
        assignment.subject = req.body.subject;

        assignment.save()
            .then(todo => {
                res.json('Todo Updated');
            })
            .catch(err =>{
                res.status(400).send("Update not possible");
            });

    });

});

module.exports = assignmentRoutes;