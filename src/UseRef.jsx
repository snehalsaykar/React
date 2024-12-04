import React ,{useRef} from 'react'

const UseRef = () => {
  //initialize the useRef hook
  let myH1 = useRef();
  // Z

  let changeContent = () => {
    console.log(myH1);
    myH1.current.style.color="orange";
    myH1.current.style.backgroundColor="black";
    myH1.current.style.fontSize="100px";
    
  }

 
  return (
    <div>
      <h1 ref={myH1} onClick={changeContent}>Click to get Content{/* React Class Is Good{""} */}</h1>
      <h1 ref={myH1} onClick={changeContent}>Click to get Next Content</h1>
    </div>
  )
}

export default UseRef