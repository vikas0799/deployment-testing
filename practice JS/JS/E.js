setInterval(() => {
    // Get elements by their tag name (assuming first 3 divs are green, red, yellow respectively)
    const greenElement = document.getElementsByTagName("div")[0];
    const redElement = document.getElementsByTagName("div")[1];
    const yellowElement = document.getElementsByTagName("div")[2];

    // Step 1: Switch from "green" to "red"
    // Remove "green" class and add "red" class
    if (greenElement) {
        greenElement.classList.remove("green");
    }
    if (redElement) {
        redElement.classList.add("red");
    }

    // Log the current time and state for "red"
    var date = new Date();
    console.log(date);
    console.log("red");

    // Step 2: After 3 seconds, switch from "red" to "yellow"
    setTimeout(() => {
        if (redElement) {
            redElement.classList.remove("red");
        }
        if (yellowElement) {
            yellowElement.classList.add("yellow");
        }

        // Log the current time and state for "yellow"
        var date = new Date();
        console.log(date);
        console.log("yellow");
    }, 3000);

    // Step 3: After 5 seconds, switch from "yellow" to "green"
    setTimeout(() => {
        if (yellowElement) {
            yellowElement.classList.remove("yellow");
        }
        if (greenElement) {
            greenElement.classList.add("green");
        }

        // Log the current time and state for "green"
        var date = new Date();
        console.log(date);
        console.log("green");
    }, 5000);

}, 9000);
