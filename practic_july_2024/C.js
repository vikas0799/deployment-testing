let chitkara={
    address:"rajpura punjab",
    display:()=>{
        console.log("welcome to chitkara");
    }
}

let vikas={
    name:"vikas patel",
    age:24
}

let punit={
    name:"punit maurya",
    age:25
}
console.log(vikas);
vikas.__proto__=chitkara;
console.log(vikas);
vikas.display();
punit.__proto__=vikas;
console.log(punit);
console.log(punit.age);

