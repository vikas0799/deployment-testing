// const heading=React.createElement("h1",{},'welcome to chitkara');
const heading=React.createElement("h1",{id:"head",className:"red"},'welcome <b>cb</b> to chitkara');
// const heading = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", { id: "h11" }, "i am h1 tag div-div-h1"),
//     React.createElement("h1", { id: "h12" }, "i am h1 tag div-div-h1"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", { id: "h11" }, "i am h1 tag div-div-h1"),
//     React.createElement("h1", { id: "h12" }, "i am h1 tag div-div-h1"),
//   ]),
// ]);

// to simplify this use jsx
// reactelement is jsobject
// ReactElement(object)==> HTML(broser undestand)

console.log(heading); //js object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
