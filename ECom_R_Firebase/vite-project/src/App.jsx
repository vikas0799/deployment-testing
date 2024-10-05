// // Create a parent component that wraps child components with a Provider

// import { useState, React } from "react";
// import { MyContext } from "./context/MyContext";
// import MyComponent from "./components/MyComponent";
// import Card from "./components/Card";

// function App() {
//   const [text, setText] = useState("Hii");
// let a=90;
//   return (
//     <div>
//       <h2>{a}</h2>  

//       <MyContext.Provider value={{ text ,a}}>
//       <h1>this is {text}</h1>
//       <h2>{a}</h2>  

//         <MyComponent/>
//         <Card/>
      
//       </MyContext.Provider>
//     </div>
//   );
// }

// export default App;



import { useState, React } from "react";
import { MyContext } from "./context/MyContext";
import MyComponent from "./components/MyComponent";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  const [text, setText] = useState("Hii");
  let a = 90;

  const handleTextChange = (newText) => {
    setText(newText);
  };

  return (
    <div>
      {/* <h2>{a}</h2>

      <MyContext.Provider value={{ text, a, handleTextChange }}>
        <h1>this is {text}</h1>
        <h2>{a}</h2>

        <MyComponent />
        <Card />
      </MyContext.Provider> */}
      <Footer />
    </div>
  );
}

export default App;
