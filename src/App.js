import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";

const HomeHeader = () => (
  <>
    <Header />
    <Home />
  </>
);


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" Component={Login}>
          </Route>
          <Route exact path="/home" element={<HomeHeader />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
