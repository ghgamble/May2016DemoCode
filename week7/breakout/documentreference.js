
var studentSchema = {
    name : String,
    grade : Number,
    teacherID : String,
}

var teacherSchema = {
    name : String,
    grade : Number,
    studentsIDs : [String]
}