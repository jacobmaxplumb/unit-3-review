import './App.css';
import Home from './components/Home';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Todo from './components/Todo';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">home</Link>
        <Link to="/todo">todo</Link>
        <Routes>
          <Route path="/todo" element={<Todo />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
