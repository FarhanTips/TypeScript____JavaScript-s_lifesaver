


type Role = "admin" | "editor" | "viewer";

function canEdit(role: Role): boolean { 
    return role === "admin" || role === "editor" ? true : false;
} 


console.log(canEdit("admin")); 
// true 
  
console.log(canEdit("editor")); 
// true 
  
console.log(canEdit("viewer")); 
// false 

