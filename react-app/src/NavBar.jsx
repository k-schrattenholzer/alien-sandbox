/* eslint-disable react/prop-types */
import { 
    Link,
    useNavigate
} from "react-router-dom";
import { Switch } from "@mui/material";
import { useState } from "react";

export default function NavBar() {
    const navigate = useNavigate()
    const [nav, setNav] = useState(true)

    function handleSwitch() {
      console.log("beginning of function", nav)
        setNav(!nav)
      console.log("end of function", nav)
      navUser()
    }
  
    function navUser() { 
      if (nav === true) {
        navigate("/")
      } else {
        navigate("/alien")
      }
    }
  
  return (
    <div>
          <ul>
            <li>
              <Switch 
                checked={nav}
                onChange={handleSwitch}
              />
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pagetwo">Page Two</Link>
            </li>
            <li>
              <Link to="/ghost">Ghost</Link>
            </li>
            <li>
              <Link to="/alien">Alien</Link>
            </li>
          </ul>
    </div>
  )
}
