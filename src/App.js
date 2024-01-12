import "./style.scss"
import Home from "./pages/Home";
import Register from "./pages/auth/Register";
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "./pages/auth/Login";
import {useContext} from "react";
import {AuthContext} from "./context/AuthContext";

function App() {
    const {currentUser} = useContext(AuthContext);

    const ProtectedRoute = ({children}) => {
        if (!currentUser) {
            return <Navigate to="/login"/>
        }
        return children;
    }

    return (
        <div className="App">
            <Routes>
                <Route path="/">
                    <Route index
                           element={
                               <ProtectedRoute>
                                   <Home/>
                               </ProtectedRoute>
                           }
                    />
                    <Route path="login" element={<Login/>}/>
                    <Route path="register" element={<Register/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
