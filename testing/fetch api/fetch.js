// // let promise=fetch('https://www.google.com/');
// (async ()=>{
//     let x= await fetch("https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg");
// console.log("vikas patel");
// console.log(x);
// })();
async function fetchData() {
    try {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=kanpur&appid=f27b269d54e4fa1e72993364a80fa8bd&units=metric');
    const data = await response.json();
    // Handle data
    } catch (error) {
    // Handle errors
    }
    }

fetchData();