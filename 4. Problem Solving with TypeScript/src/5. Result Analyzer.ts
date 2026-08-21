


interface Student {
    name: string; 
    marks: number[];
}

type Output = {
    name:string;
    average:number;
    result:string
}
function getStudentResult(student: Student): Output { 
    let avg: number = (student.marks.reduce((acc, curr):number =>acc+curr,0) / student.marks.length);
    return {
        name: student.name,
        average: avg,
        result: avg > 39 ? "Passed" : "Failed"
    };
} 


console.log(getStudentResult({ 
    name: "Rafi", 
    marks: [80, 75, 90, 85] 
})); 
  
// Expected output: 
// { name: "Rafi", average: 82.5, result: "Passed" } 
  
// another example: 
console.log(getStudentResult({ 
    name: "Nabil", 
    marks: [30, 35, 40, 25] 
})); 
// Expected output: 
// { name: "Nabil", average: 32.5, result: "Failed" } 

