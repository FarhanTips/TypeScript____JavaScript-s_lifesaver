"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getPatientStatus(patient) {
    return patient.type === "general" ? "General Patient" : patient.emergencyLevel === 1 ? "Critical emergency" : patient.emergencyLevel === 2 ? "Serious emergency" : "Moderate emergency";
}
console.log(getPatientStatus({ name: "Rahim", age: 35, type: "general" }));
// "General patient" 
console.log(getPatientStatus({ name: "Karim", age: 60, type: "emergency",
    emergencyLevel: 1 }));
// "Critical emergency" 
console.log(getPatientStatus({ name: "Hasan", age: 45, type: "emergency",
    emergencyLevel: 3 }));
// "Moderate emergency" 
//# sourceMappingURL=8.%20Patient%20Status.js.map