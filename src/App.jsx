import { useState } from 'react'
import React ,{Fragment} from "react"

function App() {
  const [title, setTitle] = useState("my name is anjali");

  function updateTitle() {
    setTitle("my name is " + Math.random());
  }

  return (
    <div>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
      <Header title="anjali2"></Header>
      <Header title="anjali3"></Header>
    </div>
  )
}


// function Header({title}) {
//   return <div>
//     {title}
//   </div>
// }

const Header = React.memo(function Header({title}) {
  return <div>
    {title}
  </div>
})
export default App
