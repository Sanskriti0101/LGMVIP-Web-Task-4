function calculateResult() {
    const name = document.getElementById("name").value;
    const maths = parseFloat(document.getElementById("maths").value);
    const science = parseFloat(document.getElementById("science").value);
    const english = parseFloat(document.getElementById("english").value);

    const totalMarks = maths + science + english;
    const average = totalMarks / 3;

    let result = "Fail";
    if (average >= 40) {
        result = "Pass";
    }

    const resultDisplay = document.getElementById("resultDisplay");
    resultDisplay.innerHTML = `
        <h3>Result for ${name}:</h3>
        <p>Total Marks: ${totalMarks}</p>
        <p>Average: ${average.toFixed(2)}</p>
        <p>Result: ${result}</p>
    `;
}

document.getElementById("resultForm").addEventListener("submit", function(event) {
    event.preventDefault();
    calculateResult();
});
