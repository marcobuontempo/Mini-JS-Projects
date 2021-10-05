// DOM SELECTORS

//  Background Section
const colourBackground = document.querySelector("#colourBackground");

// Colour Information Spans
const colourType = document.querySelector("#colour-type");
const colourCode = document.querySelector("#colour-code");

// Colour Flipper Buttons
let colourFlipperButton = document.querySelector(".colour-flipper-button");

// Navbar Options
const simpleGenNav = document.querySelector("#simpleGenNav");
const hexGenNav = document.querySelector("#hexGenNav");
const rgbGenNav = document.querySelector("#rgbGenNav");
const randGenNav = document.querySelector("#randGenNav");





// CHANGE COLOUR FLIPPER BUTTON

// Changes button id when clicking respective navbar item
const changeButton = (event) => {
    // Change button class to change functionality
    const buttonTo = event.target.className;
    colourFlipperButton.id = buttonTo;
    // Change "Current Mode" displayed
    const currentMode = document.getElementById("current-mode");
    currentMode.innerText = event.target.innerText
    currentMode.style.textTransform = "lowercase";
}

simpleGenNav.addEventListener("click", changeButton)
hexGenNav.addEventListener("click", changeButton)
rgbGenNav.addEventListener("click", changeButton)
randGenNav.addEventListener("click", changeButton)




// COLOUR FLIPPER FUNCTIONS

// Render Background Colour Change
const renderColourFlipper = (type, code) => {
    colourType.innerHTML = `${type}`;
    colourCode.innerHTML = `${code}`;
    colourBackground.style.backgroundColor = code;
}

// Generate Random Colour from Pre-Determined Array
const simpleGenerator = () => {
    const simpleColours = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet", "White", "Black"];
    const rng = Math.floor(Math.random()*simpleColours.length);
    renderColourFlipper("Simple", simpleColours[rng]);
}

// Generate Random Hex Colour
const hexGenerator = () => {
    let hex = "#";
    
    for(i=0; i<6; i++) {
    const rng = Math.floor(Math.random()*16)
    switch (rng) {
        case 0:
            hex += "0";
            break;
        case 1:
            hex += "1";
            break;
        case 2:
            hex += "2";
            break;
        case 3:
            hex += "3";
            break;
        case 4:
            hex += "4";
            break;
        case 5:
            hex += "5";
            break;
        case 6:
            hex += "6";
            break;
        case 7:
            hex += "7";
            break;
        case 8:
            hex += "8";
            break;
        case 9:
            hex += "9";
            break;
        case 10:
            hex += "A";
            break;
        case 11:
            hex += "B";
            break;
        case 12:
            hex += "C";
            break;
        case 13:
            hex += "D";
            break;
        case 14:
            hex += "E";
            break;
        case 15:
            hex += "F";
            break;
        }
    }
    renderColourFlipper("Hex", hex);
}

// Generate Random RGB Colour
const rgbGenerator = () => {
    let rngRgb = [];
    
    for(i=0; i<3; i++) {
        rngRgb.push(Math.floor(Math.random()*256));
    }
    
    const rgb = `rgb(${rngRgb[0]}, ${rngRgb[1]}, ${rngRgb[2]})`;

    renderColourFlipper("RGB", rgb)
}

// Run a Random Colour Flipper Function
const rngColour = () => {
    const rng = Math.random();
    
    if (rng < 0.33) {
        hexGenerator();
    } else if (rng > 0.33 && rng < 0.66) {
        rgbGenerator();
    } else {
        simpleGenerator();
    }
    
}

// Decides which type of colour flipper function should be run
const flipperFunction = () => {
    if (colourFlipperButton.id === "simple-flipper-button") {
        simpleGenerator();
    } else if (colourFlipperButton.id === "hex-flipper-button") {
        hexGenerator();
    } else if (colourFlipperButton.id === "rgb-flipper-button") {
        rgbGenerator();
    } else if (colourFlipperButton.id === "random-flipper-button") {
        rngColour();
    }
}


// LISTENER EVENTS TO CALL COLOUR FLIPPER FUNCTIONS
colourFlipperButton.addEventListener("click", flipperFunction);




// NAVBAR TITLE COLOUR

// Generate random title letter colours and update
const changeTitleColour = () => {
    const title = document.getElementById("title-colour");
    const simpleColours = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet", "White"];
    const randColours = [];

    for(i=0; i<13; i++) {
        let rng = Math.floor(Math.random()*simpleColours.length);
        let randColour = simpleColours[rng];

        while (randColour === randColours[randColours.length-1]) {
            rng = Math.floor(Math.random()*simpleColours.length);
            randColour = simpleColours[rng];  
        }
        randColours.push(simpleColours[rng]);
    }        
    
    const html = 
            `<div class="title-logo">
                <span style="color: ${randColours[0]}">C</span>
                <span style="color: ${randColours[1]}">o</span>
                <span style="color: ${randColours[2]}">l</span>
                <span style="color: ${randColours[3]}">o</span>
                <span style="color: ${randColours[4]}">u</span>
                <span style="color: ${randColours[5]}">r</span>
            </div>

            <div class="title-logo">
                <span style="color: ${randColours[6]}">F</span>
                <span style="color: ${randColours[7]}">l</span>
                <span style="color: ${randColours[8]}">i</span>
                <span style="color: ${randColours[9]}">p</span>
                <span style="color: ${randColours[10]}">p</span>
                <span style="color: ${randColours[11]}">e</span>
                <span style="color: ${randColours[12]}">r</span>
            </div>`

    title.innerHTML = html;
    console.log(html)
}
// Call title colour changer on load
changeTitleColour();
// Update title colours every 1 second
setInterval(changeTitleColour, 1000);