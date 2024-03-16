createElement in js,
inserting as childappendChild, append, prepend,
inserting as sibling before,after

// const box=document.getElementsByClassName("box");
// box[0].parentElement.style.backgroundColor="red";
// box[0].nextElementSibling.style.backgroundColor="black";
// let x=document.getElementsByClassName("box");
//HTML Collection
// console.log(x);
// x[0].innerHTML="<ul><li>item1</li><li>item1</li></ul>"


// function add() {
//     let para = document.createElement("p");
//     // console.log(para);
//     para.innerText = "rishabh jain";
//     // console.log(para);

//     let boxes = document.getElementsByClassName("box");
//     //   console.log(boxes[3]);
//     boxes[3].after(para);
// //     boxes[3].before(para);
// // boxes[3].appendChild(para);
// // boxes[3].prepend(para);
// // boxes[3].append(para);
// Create a new paragraph element
const newParagraph = document.createElement('p');
newParagraph.textContent = 'New paragraph';

// Prepend the new paragraph as the first child of the parent element
const parent = document.getElementById('parent');
parent.prepend(newParagraph);


//     let paragraph = document.getElementsByTagName("p");
//     console.log(paragraph);
//     paragraph[1].style.backgroundColor = "bisque";
// }



introduction to events, events handlers,event listeners,
 onclick, mouseover , mouseout,
keypress, keydown, keyup,
 input box with eval function value
 localstorage(storing value and accessing in another elements)
 calculator projects

 <
<script>
document.getElementById("myBtn").onclick = displayDate;

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
</script>

//   function xyz(){
    
//   }
//   function display(){
//     console.log(" function invoked");
//     console.log("HEllo");
//     document.getElementById("box2").style.backgroundColor="blue";
//   }
//   function disha(){
//     document.getElementsByClassName("container")[0].style.backgroundColor="red";
//   }

// function result(){
//    let exp =document.getElementById("in").value;
//    console.log(exp);
//  let  res=eval(exp);
//    console.log(res);
//    document.getElementById("in").value=res;

// }

// document.getElementsByClassName("box")[0].addEventListener("mouseover",(e)=>{
//     console.log("hello");
//     document.getElementById("box2").style.backgroundColor="blue";



//   document.getElementById("btn").addEventListener("mouseover",(e)=>{
//     document.getElementById("btn").style.color="red";
//     console.log(e);
//   })


// let keypress=()=>{
//     console.log("key is pressesd");
// }
// let keydown=()=>{
//     console.log("key is down");
// }
// let keyUP=()=>{
//     console.log("key is UP");
// }



 
