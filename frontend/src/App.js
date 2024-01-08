import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Signup";

function App() {
  return (
    // <div className="App">
    //   <Login />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      {/* <Login /> */}
    </BrowserRouter>
  );
}

export default App;
