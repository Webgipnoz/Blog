import React from "react";
import "./styles/App.css"
import About from "./pages/About";
import Posts from './pages/Posts';
import { BrowserRouter, Route , Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/posts" element={<Posts/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;