import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
} from "react-router-dom";
import PageTwo from "./PageTwo.jsx";
import Ghost from "./Ghost.jsx";
import Alien from "./Alien.jsx";
import NavBar from "./NavBar.jsx";

function App() {

  return (
    <Router>
      <div>
        <NavBar />
        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path='/' element={<Ghost/>} />
          <Route path='/pagetwo' element={<PageTwo/>} />
          <Route path='/alien' element={<Alien/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
