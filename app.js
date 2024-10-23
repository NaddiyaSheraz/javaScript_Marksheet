// Q#6. Take 
document.write(`<h1>Subject Total Marks Obtained Marks Percentage</h1>`);
// a) Take three subjects name from user and store them in 3 different variables. 
var Sub1 = prompt("Enter the name of the first subject", "Data Mining");
var Sub2 = prompt("Enter the name of the second subject", "Data Structure");
var Sub3 = prompt("Enter the name of the third subject", "Graphic Design");
// b) Total marks for each subject is 100, store it in another variable. 
var totalMarks = 100;
// c) Take obtained marks for first subject from user and stored it in different variable.
var Sub1Marks = parseInt(prompt(`Enter obtained marks for ${Sub1}`, 80));

// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
var Sub2Marks = parseInt(prompt(`Enter obtained marks for ${Sub2}`, 70));
var Sub3Marks = parseInt(prompt(`Enter obtained marks for ${Sub3}`, 90));
// e) Now calculate total marks and percentage and show the result in the browser
var totalObtainedMarks = Sub1Marks + Sub2Marks + Sub3Marks;
var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;
// Display the result in a table format
document.write(`
    <table border="1" cellspacing="0" cellpadding="5">
        <tr>
            <th>Subject</th>
            <th>Total Marks</th>
            <th>Obtained Marks</th>
            <th>Percentage</th>
        </tr>
        <tr>
            <td>${Sub1}</td>
            <td>${totalMarks}</td>
            <td>${Sub1Marks}</td>
            <td>${(Sub1Marks / totalMarks) * 100}%</td>
        </tr>
        <tr>
            <td>${Sub2}</td>
            <td>${totalMarks}</td>
            <td>${Sub2Marks}</td>
            <td>${(Sub2Marks / totalMarks) * 100}%</td>
        </tr>
        <tr>
            <td>${Sub3}</td>
            <td>${totalMarks}</td>
            <td>${Sub3Marks}</td>
            <td>${(Sub3Marks / totalMarks) * 100}%</td>
        </tr>
        <tr>
            <td><strong>Total</strong></td>
            <td><strong>${3 * totalMarks}</strong></td>
            <td><strong>${totalObtainedMarks}</strong></td>
            <td><strong>${percentage}%</strong></td>
        </tr>
    </table>
    `);
