
const DateOfBirth= "05/03/2003"


const GetStudentName = ()=> // arrow function
{
    return "Saifullah"
}
const GetCampusName = ()=> //arrow function
{
    return ("UEL Campus ")
}

exports.GetName=GetStudentName
exports.Location=GetCampusName
exports.dob=DateOfBirth

exports.StudentGrade=(marks)=>
{
    if (marks>50 && marks <70) return ("grade B")
    else 
        return ("grade A")
}
