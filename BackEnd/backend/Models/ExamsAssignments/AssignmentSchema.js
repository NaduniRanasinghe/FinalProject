const mongodb = require('mongoose');

const schema = mongodb.Schema;

let Assignment = new schema({

    assignmentNumber:{
        type:String
    },
    assignmentFile:{
        type:String
    },
    endDate:{
        type:Date
    },
    subject:{
        type:String
    }

});

module.exports = mongodb.model('Assignment', Assignment);