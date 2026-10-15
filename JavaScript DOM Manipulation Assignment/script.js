// ==========================================
// SECTION 1: PRACTICAL DOM TASKS
// ==========================================

// --- Task 1: Change Text and Style ---
// HTML Setup:
// <h1 id="mainHeading">Hello</h1>
// <p id="para">This is a paragraph.</p>

document.getElementById("mainHeading").innerText = "Welcome to DOM!";
document.getElementById("para").style.color = "Green";


// --- Task 2: Replace Text with Bold HTML ---
// HTML Setup:
// <p id="info">This is a normal text.</p>

document.getElementById("info").innerHTML = "<strong>This is bold text now!</strong>";


// --- Task 3: Style Multiple Elements ---
// HTML Setup:
// <p class="note">Note 1</p>
// <p class="note">Note 2</p>

let notes = document.getElementsByClassName("note");
for (let i = 0; i < notes.length; i++) {
    notes[i].style.fontStyle = "italic";
}


// --- Task 4: Add a New Paragraph ---
// HTML Setup:
// <div id="container">
//     <p>This is the original paragraph.</p>
// </div>

let newPara = document.createElement("p");
newPara.textContent = "This paragraph was added using JavaScript!";
document.getElementById("container").appendChild(newPara);


// --- Task 5: Change Image Source ---
// HTML Setup:
// <img id="myImage" src="image1.jpg" alt="Old Image" width="200">

document.getElementById("myImage").src = "image2.jpg";



// ==========================================
// SECTION 2: ADVANCED SELECTION & MANIPULATION
// ==========================================

// HTML Setup:
// <h1 id="main-heading">Welcome to DOM</h1>
// <p class="description">Learning DOM is fun!</p>
// <button>Click me</button>
// <button>Don't click me</button>
// <div><span style="display:none">This is a span inside a div</span></div>

// 1. Select the <h1> using getElementById
let mainHeading = document.getElementById("main-heading");
console.log("h1 innerText:", mainHeading.innerText);
mainHeading.innerHTML = "Welcome <span>Student</span>";

// 2. Select the <p> using getElementsByClassName
let description = document.getElementsByClassName("description")[0];
if (description) {
    description.textContent = "DOM is powerful";
    description.style.color = "blue";
}

// 3. Use querySelectorAll to select both buttons and modify the second one
let buttons = document.querySelectorAll("button");
if (buttons.length > 1) {
    buttons[1].innerText = "Clicked!";
}

// 4. Use querySelector to select the hidden span inside the div and compare
let hiddenSpan = document.querySelector("div span");
if (hiddenSpan) {
    console.log("span innerText (visible text only):", hiddenSpan.innerText);
    console.log("span textContent (all text including hidden):", hiddenSpan.textContent);
}



// ==========================================
// SECTION 3: DYNAMIC TABLE GENERATION
// ==========================================

// Task 7: Generate a 5x5 Table
let table = document.createElement("table");
table.border = "1"; // Optional border for visibility

let cellCounter = 1;

for (let i = 0; i < 5; i++) {
    let row = document.createElement("tr");
    
    for (let j = 0; j < 5; j++) {
        let cell = document.createElement("td");
        cell.textContent = cellCounter;
        cellCounter++;
        row.appendChild(cell);
    }
    
    table.appendChild(row);
}

// Append the completed table directly to the body of the page
document.body.appendChild(table);