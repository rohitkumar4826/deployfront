import {Team} from './component/teamm';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
        <Router>
          <Routes>
            <Route exact path="/" element={<Team/>}/>
          </Routes>
        </Router>
        
    </>
  )
}

export default App
