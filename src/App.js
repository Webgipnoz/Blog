import React from "react";
import Posts from "./components/Posts";
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <h1>Напиши новый пост, пидрило!</h1>
      <Posts/>
    </div>
  );
}
export default App;