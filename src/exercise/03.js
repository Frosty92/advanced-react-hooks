// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'


const CountContext = React.createContext();

const CountProvider = ({children, ...props}) => {
  const [count, setCount] = React.useState(0);

  console.log("rest of props:", props);
  return <CountContext.Provider value={[count, setCount]} {...props}>
    {children}
  </CountContext.Provider>
}


const useCount = () => {

  const countextState = React.useContext(CountContext);
  if (typeof countextState === "undefined") {
    throw new Error('UseCount must be used within the countext of CountProvider');
  }
  return countextState;
}

function CountDisplay() {
  const [count] = useCount();
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [,setCount] = useCount();
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
