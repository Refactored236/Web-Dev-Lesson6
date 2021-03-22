let allStudents = ['A', 'B-', 1, 4, 5, 3, 'C-'];//Added C- for testing purposes
let studentsWhoPass = [];
let x; //Variable to be used in for loop
for (x in allStudents) {
  if (allStudents[x] <= 'C') studentsWhoPass.push(allStudents[x]);
  else if (allStudents[x] <= 3) studentsWhoPass.push(allStudents[x]);
}

for (x in studentsWhoPass) {
  console.log(studentsWhoPass[x]);
}
