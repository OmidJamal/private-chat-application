import "./style.scss"
import Home from "./pages/Home";
import Register from "./pages/auth/Register";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/auth/Login";
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/">
              <Route index element={<Home/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="register" element={<Register/>}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
