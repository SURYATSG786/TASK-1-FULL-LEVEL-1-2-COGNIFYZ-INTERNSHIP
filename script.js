// Task 2: Greeting Alert Box 
function displayTimeGreeting() {
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good Morning, Surya! Time to start coding.";
    } else if (hour < 18) {
        greeting = "Good Afternoon, Surya! Keep up the good work.";
    } else {
        greeting = "Good Evening, Surya! Time to review your progress.";
    }

    // Displays the greeting
    alert(greeting);
}

displayTimeGreeting();


// Finds the button by its ID
const colorButton = document.getElementById('colorChangeBtn');


colorButton.addEventListener('click', function() {
    // Changes the style properties directly
    this.style.backgroundColor = '#d1341c'; // A noticeable red
    this.style.color = 'white'; 
    this.textContent = "Color Changed!"; // Optional: update text
});


//         Task 3: Basic Calculator 

document.getElementById('addBtn').addEventListener('click', function() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    const sum = Number(num1) + Number(num2); 

    document.getElementById('result').textContent = sum;
});
