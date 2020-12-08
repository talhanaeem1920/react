import React, {useState, useEffect, useRef} from "react";

// const obj1 = {
//   name: "talha",
//   company: "vs"
// };
// const arr1 = [1,2,3];


// function App() {
//   //const [obj, setObj] = useState(obj1);
//   // const [arr, setArr] = useState(arr1);
//   return (
//     <div>
//       {/* Arr: {arr} */}
//       {/* name : {obj.name}  |
//       company: {obj.company}   |
//       <button onClick={() => (setObj(prevState => {return {...prevState, company: "Viral square", name: "ali"}}))}>mutate</button> */}
//       {/* <button onClick={() => (setArr(prevArr => ([...prevArr, [4]])))}>+</button> */}
//       {/* <button onClick={() => {
//         arr.push(4);
//         console.log(arr);
//       }}>+</button> */}

      
//     </div>
//   );
// }

function App() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}


// function App() {
//   return (
//     <div className="App">
//       this is it...!
//     </div>
//   );
// }

export default App;