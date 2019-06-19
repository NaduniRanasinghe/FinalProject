const mongodb = require('mongoose');

const schema = mongodb.Schema;

let Exam = new schema({

    assignmentNumber:{
        type:String
    },
    file:{
        type:String
    },
    endDate:{
        type:Date
    },
    subject:{
        type:String
    }

});

module.exports = mongodb.model('Exam', Exam);