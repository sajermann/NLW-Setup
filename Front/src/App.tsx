import { Habit } from "./components/Habit"
import "./styles/global.css"

function App() {


  return (
    <div>
   <Habit completed={1} />
   <Habit completed={2} />
    </div>
  )
}

export default App
