import React from "react";
import NewPost from "./components/NewPost";
import './components/Components.css'

function App() {
  return (
    <div className="App">
      <h1>Блог о том и этом</h1>
      <NewPost/>
    </div>
  );
}
export default App;