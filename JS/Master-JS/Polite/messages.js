/*
Use Node js
for your data in .json file
for each applicant create a message: to inform him/her that he/she did not get the job. (did not meet qualifications, but be on the look out for new opportunities from us.)
*/
// Import data

const data = require(`./data.json`);
// console.log(data);

/* 
Step 2
- use a for<while> loop to go through each data point
- print the data

Step 3
- for each data point create a message example
"Dear (sir/madam)
we regret to inform you that you won't be going to the next stage of the interview 
the reason - you are not a good fit for the role."

Step 4
Create an empty array and put the user data, including the messages.
output object should be 
{
id: 942,
  first_name: 'Lewie',
  last_name: 'Prinn',
  email: 'lprinnq5@constantcontact.com',
  gender: 'Male',
  phone: '339-187-3645'
}

step 5 
write this data to a file called output.json
Hint do JSON.stringify -> js object to json notation.
save this data to your file i.e output.json. 
*/
/* let i = 0;
while (i < data.length) {
  console.log(data[i]);
  i++;
}

i = 0;
while (i < data.length) {
  const person = data[i];
  const message = `Dear ${person.gender}
we regret to inform you that you won't be going to the next stage of the interview 
the reason - you are not a good fit for the role.`;

  console.log(message);
  i++;
}
*/
// Step 4
const fs = require("fs");
const output = [];

for (let i = 0; i < data.length; i++) {
  const person = data[i];

  const message = `Dear ${person.gender === "Male" ? "sir" : "madam"},
We regret to inform you that you won't be going to the next stage of the interview.
The reason - you are not a good fit for the role.`;
  const personAndMessage = {
    ...person,
    message: message,
  };
  output.push(personAndMessage);
}
console.log(output);

//Step 5
const jsonData = JSON.stringify(output, null, 2);

fs.writeFile("output.json", jsonData, (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("Data successfully written to output.json");
});
