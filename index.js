
//Creating an arrow function using "const variableName=()=>{}"
const EmpSkills= (Skills)=> {
    console.log("You are an expert in "+ Skills, "\n")
}
//we did not have to use the "var" command to parse parameters for our function
EmpSkills("Java")


const student= require( './StudentInfo')
const person= require('./Person')

//"GetName" is a function so we use ()
console.log("Student Name: "+ student.GetName())
console.log(student.Location())
//dob is a variable so we do not have to use ()
console.log(student.dob)
console.log(student.StudentGrade())
console.log("Grade is "+ student.StudentGrade(55))

//creating a new person
Person1= new person ("Saifullah", "21", "u2840501@uel.ac.uk")
console.log("using Person Module", Person1.GetPersonInfo())
console.log("Program ended\n")

//Exercise 4 
//displays the device's information to the terminal. 
os=require("os")
const util=require('util')
console.log("temporary directory"+ os.tmpdir() )
console.log("hostname: "+ os.hostname())
console.log("OS : " + os.platform() +"release:"+ os.release())
console.log("Uptime"+ (os.uptime())/3600 +" hours")
console.log("userInfo" + util.inspect(os.userInfo()))
console.log("Memory "+ os.totalmem()/1000000000 + "Giga byte")
console.log(" free: "+os.freemem()/1000000000 + "Giga byte")
console.log("CPU "+ util.inspect(os.cpus()))
console.log("Network"+ util.inspect(os.networkInterfaces()))
console.log("programe end")

