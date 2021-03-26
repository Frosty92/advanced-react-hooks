// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'


const CountContext = React.createContext();

const CountProvider = ({children, ...props}) => {
  const [count, setCount] = React.useState(0);

  console.log("rest of props:", props);
  return <CountContext.Provider value={[count, setCount]} {...props}>
    {children}
    <h3>Message is: {props.message}</h3>
  </CountContext.Provider>
}

function CountDisplay() {
  const [count] = React.useContext(CountContext);
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [,setCount] = React.useContext(CountContext);
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider message={"test1"} test={"test2"}>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
