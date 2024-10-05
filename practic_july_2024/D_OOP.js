// class person{
//     constructor(name,age,village){
//         this.name=name;
//         this.age=age;
//         this.village=village;
//     }
//     village(){
//         console.log("welcom to my village");
//     }
//     dist(){
//         console.log("welcome to my district"+this.age);
//     }
// };
// console.log(person);
// let vikas=new person("john wick",50,"sangrooor");
// vikas.dist();

let name1={
    fname:"vikas",
    lname:"patel",
    display:function(){
        console.log(this);
        console.log(this.fname+" "+this.lname);
    },
    print:function(){
        console.log(this);
    }
};


let name2={
    fname:"punit",
    lname:"maurya",
    // display:function(){
    //     console.log(this.fname+" "+this.lname);
    // }
};

// name2.__proto__=name1;
// console.log(name2);
// name2.display();

// function borrowing
// name1.display();
// name1.display.call(name2);
// name1.print.call(name2);



let showing=function(aug,state,vill){
    console.log(this);
    console.log(aug+" "+state+" "+vill);
}
// showing.call(name1,"mr wick","up","hasanpur");
//showing.apply(name1,["1",23,45,987]);  // aug passing diffrence from call only

  let ans=showing.bind(name1,"vikas","up","amh","hasanpur")  //not directly calling
console.log(ans);
ans();
