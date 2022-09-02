/*
--------------------------------------------------Exercise 2------------------------------------------------------------ 
: The Grade Assigner
Instructions
Ask the user for their grade.

If the grade is bigger than 90, console.log “A”

If the grade is between 80 and 90 (included), console.log “B”
If the grade is between 70(included) and 80 (included), console.log “C”
If the grade is lower than 70, console.log “D”
---------------------------------------------------------------------------------------------------------------------------
*/


let note = prompt("Enter Your class mark here:");
if (note > 90) {
    console.log("A")
} else if (note > 80 && note <= 90) {
    console.log("B")
} else if (note > 70 && note <= 80) {
    console.log("C")
} else {
    console.log("D")
}